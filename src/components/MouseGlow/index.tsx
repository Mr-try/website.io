import { useEffect, useRef } from 'react';
import styles from './index.less';

interface MouseGlowProps {
  className?: string;
  glowColor?: 'blue' | 'gold' | 'purple' | 'white';
  intensity?: 'low' | 'medium' | 'high';
  size?: 'small' | 'medium' | 'large';
}

export default function MouseGlow({ 
  className = '', 
  glowColor = 'gold',
  intensity = 'medium',
  size = 'medium'
}: MouseGlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 性能配置
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const config = {
      fps: isMobile ? 30 : 60
    };

    // 颜色配置
    const colorSchemes = {
      blue: {
        outerColor: 'hsla(200, 100%, 70%, 0.15)',
        middleColor: 'hsla(210, 100%, 80%, 0.25)',
        innerColor: 'hsla(220, 100%, 90%, 0.4)',
        coreColor: 'hsla(230, 100%, 95%, 0.6)'
      },
      gold: {
        outerColor: 'hsla(45, 100%, 70%, 0.2)',
        middleColor: 'hsla(50, 100%, 75%, 0.35)',
        innerColor: 'hsla(55, 100%, 80%, 0.5)',
        coreColor: 'hsla(60, 100%, 90%, 0.7)'
      },
      purple: {
        outerColor: 'hsla(280, 100%, 70%, 0.15)',
        middleColor: 'hsla(290, 100%, 75%, 0.25)',
        innerColor: 'hsla(300, 100%, 80%, 0.4)',
        coreColor: 'hsla(310, 100%, 90%, 0.6)'
      },
      white: {
        outerColor: 'hsla(0, 0%, 100%, 0.1)',
        middleColor: 'hsla(0, 0%, 100%, 0.2)',
        innerColor: 'hsla(0, 0%, 100%, 0.3)',
        coreColor: 'hsla(0, 0%, 100%, 0.5)'
      }
    };

    // 尺寸配置
    const sizeConfig = {
      small: { outer: 60, middle: 30, inner: 15, core: 8 },
      medium: { outer: 90, middle: 45, inner: 22, core: 12 },
      large: { outer: 120, middle: 60, inner: 30, core: 15 }
    };

    // 强度配置
    const intensityMultiplier = {
      low: 0.6,
      medium: 1.5,
      high: 2.5
    };

    const currentColors = colorSchemes[glowColor];
    const currentSizes = sizeConfig[size];
    const intensityValue = intensityMultiplier[intensity];

    // 设置canvas尺寸
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    // 帧率控制
    let lastTime = 0;
    const frameInterval = 1000 / config.fps;

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
      
      const mouse = mouseRef.current;
      const time = currentTime * 0.001; // 时间因子用于动态效果

      // 外层大光晕（动态呼吸效果）
      const breathScale = 1 + Math.sin(time * 2) * 0.1;
      const outerRadius = currentSizes.outer * breathScale * intensityValue;
      const outerGlow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, outerRadius
      );
      
      const outerOpacity = 0.2 * intensityValue;
      outerGlow.addColorStop(0, currentColors.outerColor.replace('0.2', outerOpacity.toString()));
      outerGlow.addColorStop(0.3, currentColors.outerColor.replace('0.2', (outerOpacity * 0.7).toString()));
      outerGlow.addColorStop(0.6, currentColors.outerColor.replace('0.2', (outerOpacity * 0.4).toString()));
      outerGlow.addColorStop(1, currentColors.outerColor.replace('0.2', '0'));
      
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, outerRadius, 0, Math.PI * 2);
      ctx.fill();

      // 中层光晕
      const middleRadius = currentSizes.middle * intensityValue;
      const middleGlow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, middleRadius
      );
      
      const middleOpacity = 0.35 * intensityValue;
      middleGlow.addColorStop(0, currentColors.middleColor.replace('0.35', middleOpacity.toString()));
      middleGlow.addColorStop(0.4, currentColors.middleColor.replace('0.35', (middleOpacity * 0.7).toString()));
      middleGlow.addColorStop(0.8, currentColors.middleColor.replace('0.35', (middleOpacity * 0.3).toString()));
      middleGlow.addColorStop(1, currentColors.middleColor.replace('0.35', '0'));
      
      ctx.fillStyle = middleGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, middleRadius, 0, Math.PI * 2);
      ctx.fill();

      // 内层光晕（脉冲效果）
      const pulseScale = 1 + Math.sin(time * 4) * 0.2;
      const innerRadius = currentSizes.inner * pulseScale * intensityValue;
      const innerGlow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, innerRadius
      );
      
      const innerOpacity = 0.5 * intensityValue;
      innerGlow.addColorStop(0, currentColors.innerColor.replace('0.5', innerOpacity.toString()));
      innerGlow.addColorStop(0.3, currentColors.innerColor.replace('0.5', (innerOpacity * 0.8).toString()));
      innerGlow.addColorStop(0.7, currentColors.innerColor.replace('0.5', (innerOpacity * 0.4).toString()));
      innerGlow.addColorStop(1, currentColors.innerColor.replace('0.5', '0'));
      
      ctx.fillStyle = innerGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, innerRadius, 0, Math.PI * 2);
      ctx.fill();

      // 核心强光
      const coreRadius = currentSizes.core * intensityValue;
      const coreGlow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, coreRadius
      );
      
      const coreOpacity = 0.7 * intensityValue;
      coreGlow.addColorStop(0, currentColors.coreColor.replace('0.7', coreOpacity.toString()));
      coreGlow.addColorStop(0.5, currentColors.coreColor.replace('0.7', (coreOpacity * 0.6).toString()));
      coreGlow.addColorStop(1, currentColors.coreColor.replace('0.7', '0'));
      
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // 添加闪烁星点效果（低概率）
      if (Math.random() < 0.05 && intensity !== 'low') {
        const sparkles = 3;
        for (let s = 0; s < sparkles; s++) {
          const angle = (Math.PI * 2 / sparkles) * s + time * 2;
          const distance = 40 + Math.random() * 20;
          const sparkleX = mouse.x + Math.cos(angle) * distance;
          const sparkleY = mouse.y + Math.sin(angle) * distance;
          
          const sparkleGlow = ctx.createRadialGradient(
            sparkleX, sparkleY, 0,
            sparkleX, sparkleY, 6
          );
          
          const sparkleOpacity = 0.6 * intensityValue;
          sparkleGlow.addColorStop(0, currentColors.coreColor.replace('0.7', sparkleOpacity.toString()));
          sparkleGlow.addColorStop(0.5, currentColors.coreColor.replace('0.7', (sparkleOpacity * 0.5).toString()));
          sparkleGlow.addColorStop(1, currentColors.coreColor.replace('0.7', '0'));
          
          ctx.fillStyle = sparkleGlow;
          ctx.beginPath();
          ctx.arc(sparkleX, sparkleY, 6, 0, Math.PI * 2);
          ctx.fill();
        }
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
  }, [glowColor, intensity, size]);

  return (
    <canvas 
      ref={canvasRef}
      className={`${styles.mouseGlowCanvas} ${className}`}
    />
  );
} 