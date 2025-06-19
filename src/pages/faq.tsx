/*
 * @Author: 唐荣洋 daoma.try@raycloud.com
 * @Date: 2025-06-19 09:39:33
 * @Description: 
 */
import { useState } from 'react';
import styles from './faq.less';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'AI Life 完全免费吗？',
      answer: '是的！AI Life 完全免费使用，无需付费即可享受所有功能。我们相信每个人都应该有机会改善自己的生活。'
    },
    {
      question: '我的数据安全吗？',
      answer: '我们采用端到端加密技术保护您的数据，所有个人信息都在本地处理，不会上传到服务器。您的隐私是我们的首要考虑。'
    },
    {
      question: 'AI 如何帮助我养成习惯？',
      answer: 'AI 会分析您的行为模式、时间偏好和成功率，提供个性化的建议和提醒时机，让习惯养成变得更加自然和高效。'
    },
    {
      question: '支持哪些设备？',
      answer: 'AI Life 支持 iOS、Android 和桌面设备，数据可以在所有设备间同步，让您随时随地管理自己的生活。'
    },
    {
      question: '如何开始使用？',
      answer: '下载应用后，只需几个简单步骤：选择您想要养成的习惯、设定目标、让 AI 为您制定个性化计划。无需复杂设置即可开始。'
    },
    {
      question: '可以追踪多少个习惯？',
      answer: '您可以同时追踪无限个习惯。AI 会帮助您合理安排，避免目标过多导致的压力，建议从 3-5 个习惯开始。'
    },
    {
      question: '如果遇到问题怎么办？',
      answer: '您可以通过应用内的帮助中心、邮件或在线客服联系我们。我们的技术团队会在 24 小时内回复您的问题。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.faqHeader}>
        <h1 className={styles.title}>常见问题</h1>
        <p className={styles.subtitle}>为您解答关于 AI Life 的疑问</p>
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div 
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span className={styles.toggle}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 