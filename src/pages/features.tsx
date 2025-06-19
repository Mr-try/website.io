/*
 * @Author: 唐荣洋 daoma.try@raycloud.com
 * @Date: 2025-06-19 09:39:20
 * @Description: 
 */
import styles from './features.less';

export default function FeaturesPage() {
  const features = [
    {
      icon: '🤖',
      title: 'AI 智能分析',
      description: '深度学习算法分析你的行为模式，提供个性化建议',
      details: ['行为模式识别', '个性化推荐', '智能预测', '数据洞察']
    },
    {
      icon: '📊',
      title: '数据可视化',
      description: '实时追踪进度，用图表展示你的成长轨迹',
      details: ['实时数据更新', '多维度图表', '趋势分析', '进度追踪']
    },
    {
      icon: '⚡',
      title: '智能提醒',
      description: '基于最佳时机的个性化提醒系统',
      details: ['智能时机选择', '个性化内容', '多种提醒方式', '自适应调整']
    },
    {
      icon: '🎯',
      title: '目标管理',
      description: '科学的目标设定和分解，让成功触手可及',
      details: ['SMART 目标设定', '任务分解', '进度跟踪', '成就系统']
    },
    {
      icon: '🧠',
      title: '行为洞察',
      description: 'AI 分析你的习惯模式，发现潜在改进机会',
      details: ['行为分析', '模式识别', '改进建议', '习惯养成']
    },
    {
      icon: '🎨',
      title: '个性化体验',
      description: '根据你的偏好定制界面和功能',
      details: ['自定义界面', '个性化设置', '偏好学习', '体验优化']
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>强大功能</h1>
        <p className={styles.subtitle}>用 AI 技术重新定义生活养成体验</p>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
            <ul className={styles.featureDetails}>
              {feature.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 