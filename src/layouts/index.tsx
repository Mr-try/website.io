/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
import { Outlet } from 'umi';
import styles from './index.less';
import Nav from './nav';
import { useEffect, useState, useRef } from 'react';
import './reset.less';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Array<{x: number, y: number, age: number}>>([]);
  const mouseRef = useRef({x: 0, y: 0});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 移动端性能检测
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const maxPoints = isMobile ? 15 : 30;

    // 设置canvas尺寸
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    // 鼠标跟踪点类
    class TrailPoint {
      constructor(public x: number, public y: number, public age: number = 0) {}
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // 添加新的跟踪点
      pointsRef.current.push(new TrailPoint(e.clientX, e.clientY));
      
      // 限制点的数量
      if (pointsRef.current.length > maxPoints) {
        pointsRef.current.shift();
      }
    };

    

    const handleResize = () => {
      updateCanvasSize();
    };

    // 帧率控制
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    // 动画循环
    const animate = (currentTime: number = 0) => {
      if (!ctx || !canvas) return;
      
      // 帧率控制
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;
      
      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 更新点的年龄并移除老旧的点
      const maxAge = isMobile ? 20 : 30;
      pointsRef.current = pointsRef.current.filter(point => {
        point.age += 1;
        return point.age < maxAge;
      });

      // 绘制多层细腻光线轨迹
      if (pointsRef.current.length > 2) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // 定义多层光线效果
        const layers = [
          { 
            colors: ['hsla(45, 100%, 60%, 0.6)', 'hsla(50, 100%, 70%, 0.4)', 'hsla(55, 100%, 80%, 0.2)'], 
            widthMultiplier: 2.5, 
            blur: 8 
          },
          { 
            colors: ['hsla(45, 100%, 70%, 0.8)', 'hsla(50, 100%, 80%, 0.6)', 'hsla(55, 100%, 90%, 0.4)'], 
            widthMultiplier: 1.5, 
            blur: 4 
          },
          { 
            colors: ['hsla(45, 100%, 80%, 0.9)', 'hsla(50, 100%, 90%, 0.7)', 'hsla(55, 100%, 95%, 0.5)'], 
            widthMultiplier: 0.8, 
            blur: 2 
          },
          { 
            colors: ['hsla(45, 100%, 90%, 1)', 'hsla(50, 100%, 95%, 0.8)', 'hsla(55, 100%, 98%, 0.6)'], 
            widthMultiplier: 0.3, 
            blur: 0 
          }
        ];
        
        layers.forEach((layer) => {
          for (let i = 2; i < pointsRef.current.length; i++) {
            const p0 = pointsRef.current[i - 2];
            const p1 = pointsRef.current[i - 1];
            const p2 = pointsRef.current[i];
            
            const baseOpacity = (1 - p1.age / maxAge);
            const lineWidth = baseOpacity * (isMobile ? 1.5 : 3) * layer.widthMultiplier;
            
            if (baseOpacity > 0.05 && lineWidth > 0.1) {
              // 创建沿轨迹的渐变
              const gradient = ctx.createLinearGradient(p0.x, p0.y, p2.x, p2.y);
              
              layer.colors.forEach((color, colorIndex) => {
                const stop = colorIndex / (layer.colors.length - 1);
                // 动态调整透明度
                const opacityMatch = color.match(/[\d.]+\)$/);
                if (opacityMatch) {
                  const originalOpacity = parseFloat(opacityMatch[0].slice(0, -1));
                  const adjustedColor = color.replace(/[\d.]+\)$/, `${baseOpacity * originalOpacity})`);
                  gradient.addColorStop(stop, adjustedColor);
                }
              });
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = lineWidth;
              
              // 设置阴影（外层光晕）
              if (layer.blur > 0) {
                const shadowOpacity = baseOpacity * 0.3;
                const shadowColor = layer.colors[1].replace(/[\d.]+\)$/, `${shadowOpacity})`);
                ctx.shadowColor = shadowColor;
                ctx.shadowBlur = layer.blur;
              } else {
                ctx.shadowBlur = 0;
              }
              ctx.beginPath();
              ctx.moveTo(p0.x, p0.y);
              // 使用二次贝塞尔曲线创建流畅轨迹
              const cpx = (p0.x + p2.x) / 2;
              const cpy = (p0.y + p2.y) / 2;
              ctx.quadraticCurveTo(p1.x, p1.y, cpx, cpy);
              ctx.stroke();
            }
          }
        });
        // 重置阴影
        ctx.shadowBlur = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);


  return (
    <div className={styles.container}>
      {/* Canvas光线跟随效果 */}
      <canvas 
        ref={canvasRef}
        className={styles.mouseTrailCanvas}
      />
      
      {/* 粒子背景 */}
      <div className={styles.particleBackground}>
        {Array.from({ length: 50 }, (_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 40}s`
            }}
          />
        ))}
      </div>

      {/* 顶部导航 */}
      <header 
        className={`${styles.header} ${styles.glassHeader}`}
      >
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>🤖</div>
            <span className={styles.logoText}>AI Life</span>
          </div>
          
          {/* 桌面端导航 */}
          <div className={styles.desktopNav}>
            <Nav />
          </div>
          
          {/* 移动端菜单按钮 */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <div className={styles.headerActions}>
            <button className={styles.loginBtn}>登录</button>
            <button className={styles.signupBtn}>注册</button>
          </div>
        </div>
        
        {/* 移动端下拉菜单 */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <Nav onItemClick={() => setIsMobileMenuOpen(false)} />
          <div className={styles.mobileActions}>
            <button className={styles.loginBtn}>登录</button>
            <button className={styles.signupBtn}>注册</button>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* 页脚 */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>🤖</div>
              <span className={styles.logoText}>AI Life</span>
            </div>
            <p>用 AI 重新定义生活方式</p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerLinks}>
              <a href="/">隐私政策</a>
              <a href="/">使用条款</a>
              <a href="/">支持</a>
            </div>
            <p className={styles.copyright}>© 2024 AI Life. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
