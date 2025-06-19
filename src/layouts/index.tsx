/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
import { Outlet } from 'umi';
import styles from './index.less';
import Nav from './nav';
import { useEffect, useState } from 'react';
import './reset.less';

export default function Layout() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 根据滚动位置计算导航栏的透明度
  // 0-100px: 从0.3渐变到0.95
  const getHeaderOpacity = () => {
    const maxScroll = 100;
    const minOpacity = 0.3;
    const maxOpacity = 0.95;
    
    if (scrollY <= 0) return minOpacity;
    if (scrollY >= maxScroll) return maxOpacity;
    
    return minOpacity + (maxOpacity - minOpacity) * (scrollY / maxScroll);
  };

  return (
    <div className={styles.container}>
      {/* 光影特效背景 */}
      <div 
        className={styles.glowEffect}
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
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
        className={styles.header}
        style={{
          background: `rgba(10, 10, 10, ${getHeaderOpacity()})`,
          transition: 'background 0.3s ease',
        }}
      >
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>🤖</div>
            <span className={styles.logoText}>AI Life</span>
          </div>
          <Nav />
          <div className={styles.headerActions}>
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
