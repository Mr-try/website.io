import { useState } from 'react';
import { Flex } from '@/components';
import styles from './index.less';

export default function LifePage() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'AI 习惯追踪',
      description: '智能分析你的行为模式，提供个性化建议',
      icon: '🤖',
      detail: '使用先进的机器学习算法，深度分析你的日常习惯，提供精准的改进建议和目标设定。'
    },
    {
      title: '智能提醒',
      description: '基于你的作息和偏好，智能安排提醒时间',
      icon: '⏰',
      detail: '不再是简单的定时提醒，而是根据你的生物钟、当前状态和历史数据，选择最佳提醒时机。'
    },
    {
      title: '情绪分析',
      description: 'AI 分析你的情绪变化，帮助调节心理状态',
      icon: '😊',
      detail: '通过语音、文字和行为数据，实时监测情绪状态，提供科学的情绪调节建议。'
    },
    {
      title: '成长报告',
      description: '生成个性化的成长报告和数据可视化',
      icon: '📊',
      detail: '每周生成详细的成长分析报告，包含习惯完成度、情绪趋势、健康指标等多维度数据。'
    }
  ];

  const testimonials = [
    {
      name: '小明',
      avatar: '👨‍💻',
      content: '用了3个月，成功养成了早起和运动的习惯，AI 提醒真的很智能！',
      role: '产品经理'
    },
    {
      name: '小红',
      avatar: '👩‍🎨',
      content: '情绪分析功能帮我更好地理解自己，压力管理效果很明显。',
      role: 'UI设计师'
    },
    {
      name: '阿华',
      avatar: '👨‍🔬',
      content: '数据可视化做得很棒，能清楚看到自己的成长轨迹。',
      role: '数据科学家'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            用 AI 重新定义
            <br />
            <span className={styles.highlight}>生活养成</span>
          </h1>
          <p className={styles.heroSubtitle}>
            智能习惯追踪，个性化成长建议，让每一天都成为更好的自己
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              免费开始使用
            </button>
            <button className={styles.secondaryButton}>
              了解更多
            </button>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phonePreview}>
            <div className={styles.screen}>
              <div className={styles.statusBar}></div>
              <div className={styles.appContent}>
                <div className={styles.greeting}>早安！今天是美好的一天 ☀️</div>
                <div className={styles.habitCard}>
                  <div className={styles.habitTitle}>今日目标</div>
                  <div className={styles.habitProgress}>
                    <div className={styles.progressItem}>
                      <span>💧 喝水</span>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className={styles.progressItem}>
                      <span>🏃‍♂️ 运动</span>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{width: '50%'}}></div>
                      </div>
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
          <h2 className={styles.sectionTitle}>核心功能</h2>
          <p className={styles.sectionSubtitle}>
            结合前沿 AI 技术，打造个性化的生活养成体验
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureItem} ${
                  selectedFeature === index ? styles.active : ''
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.featureDetail}>
            <div className={styles.featureDetailCard}>
              <div className={styles.featureDetailIcon}>
                {features[selectedFeature].icon}
              </div>
              <h3>{features[selectedFeature].title}</h3>
              <p>{features[selectedFeature].detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50万+</div>
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
            <div className={styles.statNumber}>4.9分</div>
            <div className={styles.statLabel}>用户评分</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>用户反馈</h2>
          <p className={styles.sectionSubtitle}>
            听听他们的成长故事
          </p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                "{testimonial.content}"
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{testimonial.avatar}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>开始你的 AI 生活养成之旅</h2>
          <p>加入数十万用户，用科技的力量改变生活</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              立即下载 App
            </button>
            <button className={styles.secondaryButton}>
              预约演示
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>产品</h4>
            <ul>
              <li>功能介绍</li>
              <li>定价方案</li>
              <li>下载应用</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>支持</h4>
            <ul>
              <li>帮助中心</li>
              <li>联系我们</li>
              <li>用户指南</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>社区</h4>
            <ul>
              <li>用户社区</li>
              <li>成功案例</li>
              <li>开发者</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>关于</h4>
            <ul>
              <li>关于我们</li>
              <li>隐私政策</li>
              <li>服务条款</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 AI生活养成 · 用心设计每一个细节</p>
        </div>
      </footer>
    </div>
  );
} 