import { useNavigate } from 'umi';
import { useEffect, useState } from 'react';
import styles from './index.less';
/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
export default function HomePage() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = '在几秒钟内创建令人惊叹的 AI 生活养成方案';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI 智能分析',
      description: '深度学习算法分析你的行为模式，提供个性化建议'
    },
    {
      icon: '📊',
      title: '数据可视化',
      description: '实时追踪进度，用图表展示你的成长轨迹'
    },
    {
      icon: '⚡',
      title: '智能提醒',
      description: '基于最佳时机的个性化提醒系统'
    },
    {
      icon: '🎯',
      title: '目标管理',
      description: '科学的目标设定和分解，让成功触手可及'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            ✨ 世界上第一个无限免费的 AI 生活养成应用 ✨
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.brandName}>AI Life</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            {typedText}
            <span className={styles.cursor}>|</span>
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>100% 免费</span>
            <span className={styles.tag}>AI 驱动</span>
            <span className={styles.tag}>无需登录</span>
            <span className={styles.tag}>无限生成</span>
          </div>

          <div className={styles.heroActions}>
            <button 
              className={styles.primaryButton}
              onClick={() => navigate('/download')}
            >
              立即开始使用
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => navigate('/features')}
            >
              了解更多
            </button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.phoneContainer}>
            <div className={styles.phone}>
              <div className={styles.screen}>
                <div className={styles.statusBar}></div>
                <div className={styles.appInterface}>
                  <div className={styles.greeting}>
                    <h3>早安，小明 ☀️</h3>
                    <p>今天是你成长的第 42 天</p>
                  </div>
                  
                  <div className={styles.progressSection}>
                    <h4>今日目标</h4>
                    <div className={styles.habitItem}>
                      <span>💧 喝水 8 杯</span>
                      <div className={styles.progressBar}>
                        <div className={styles.progress} style={{width: '75%'}}></div>
                      </div>
                      <span>6/8</span>
                    </div>
                    <div className={styles.habitItem}>
                      <span>🏃‍♂️ 运动 30 分钟</span>
                      <div className={styles.progressBar}>
                        <div className={styles.progress} style={{width: '60%'}}></div>
                      </div>
                      <span>18/30</span>
                    </div>
                    <div className={styles.habitItem}>
                      <span>📚 阅读 1 小时</span>
                      <div className={styles.progressBar}>
                        <div className={styles.progress} style={{width: '100%'}}></div>
                      </div>
                      <span>完成</span>
                    </div>
                  </div>

                  <div className={styles.aiInsight}>
                    <div className={styles.aiIcon}>🤖</div>
                    <div>
                      <h5>AI 建议</h5>
                      <p>根据你的睡眠数据，建议在下午 3 点进行运动...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>核心功能</h2>
          <p>AI 驱动的生活养成体验</p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1M+</div>
            <div className={styles.statLabel}>活跃用户</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>习惯养成成功率</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>21天</div>
            <div className={styles.statLabel}>平均养成周期</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4.9★</div>
            <div className={styles.statLabel}>用户评分</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>准备开始你的 AI 生活养成之旅？</h2>
          <p>加入百万用户，用人工智能重新定义你的生活方式</p>
          <button 
            className={styles.ctaButton}
            onClick={() => navigate('/download')}
          >
            免费开始使用
          </button>
        </div>
      </section>
    </div>
  );
}
