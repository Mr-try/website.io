/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
import { Outlet } from 'umi';
import styles from './index.less';
import Nav from './nav';
import { useState } from 'react';
import { MouseGlow } from '@/components';
import './reset.less';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* 鼠标光晕效果 */}
      <MouseGlow glowColor="gold" intensity="medium" size="large" />
      
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
        className={`${styles.header} ${styles.glassHeader}`} >
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
