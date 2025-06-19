import styles from './about.less';

export default function AboutPage() {
  const team = [
    {
      name: '张三',
      role: 'CEO & 创始人',
      avatar: '👨‍💼',
      description: '前 Google AI 研究员，专注于机器学习和用户体验设计'
    },
    {
      name: '李四',
      role: 'CTO',
      avatar: '👨‍💻',
      description: '资深全栈工程师，拥有 10 年移动应用开发经验'
    },
    {
      name: '王五',
      role: '产品总监',
      avatar: '👩‍🎨',
      description: '用户体验专家，致力于创造直观易用的产品界面'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>关于我们</h1>
        <p className={styles.subtitle}>
          我们是一群热爱技术、关注生活质量的团队，致力于用 AI 技术帮助每个人建立更好的生活习惯。
        </p>
      </div>

      <div className={styles.mission}>
        <h2>我们的使命</h2>
        <p>
          通过先进的人工智能技术，让每个人都能轻松养成良好的生活习惯，提高生活质量，实现个人成长。
          我们相信技术应该服务于人，让生活变得更美好。
        </p>
      </div>

      <div className={styles.values}>
        <h2>核心价值观</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💡</div>
            <h3>创新</h3>
            <p>持续探索 AI 技术的边界，为用户带来革命性的体验</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>❤️</div>
            <h3>关怀</h3>
            <p>真正关心用户的需求，设计贴心的产品功能</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔒</div>
            <h3>隐私</h3>
            <p>保护用户隐私，确保数据安全是我们的底线</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌟</div>
            <h3>卓越</h3>
            <p>追求产品和服务的极致，为用户创造最大价值</p>
          </div>
        </div>
      </div>

      <div className={styles.team}>
        <h2>团队成员</h2>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.avatar}>{member.avatar}</div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.description}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.contact}>
        <h2>联系我们</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <strong>邮箱：</strong>
            <span>contact@ailife.com</span>
          </div>
          <div className={styles.contactItem}>
            <strong>地址：</strong>
            <span>中国北京市朝阳区</span>
          </div>
          <div className={styles.contactItem}>
            <strong>电话：</strong>
            <span>+86 138-0000-0000</span>
          </div>
        </div>
      </div>
    </div>
  );
} 