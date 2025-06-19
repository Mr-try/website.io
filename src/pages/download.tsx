/*
 * @Author: 唐荣洋 daoma.try@raycloud.com
 * @Date: 2025-06-19 09:38:16
 * @Description: 
 */
import styles from './download.less';

export default function DownloadPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>下载 AI Life</h1>
        <p className={styles.subtitle}>在您的设备上免费体验 AI 生活养成</p>
        
        <div className={styles.downloadButtons}>
          <button className={styles.downloadBtn}>
            📱 iOS 版本
          </button>
          <button className={styles.downloadBtn}>
            🤖 Android 版本
          </button>
          <button className={styles.downloadBtn}>
            💻 桌面版本
          </button>
        </div>
        
        <div className={styles.qrSection}>
          <div className={styles.qrCode}>
            <div className={styles.qrPlaceholder}>📱</div>
            <p>扫码下载 APP</p>
          </div>
        </div>
      </div>
    </div>
  );
} 