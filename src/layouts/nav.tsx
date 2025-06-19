/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
import styles from './index.less';
import './reset.less';
import { Flex } from '@/components';
import { useLocation } from 'react-router';
import { goto } from '@/utils';
import { useEffect, useState } from 'react';
const NAVS = [
  { title: '首页', link: '/' },
  { title: '下载', link: '/download' },
  { title: '特点', link: '/features' },
  { title: '常见问题', link: '/faq' },
  { title: '关于我们', link: '/about' },
];

interface NavProps {
  onItemClick?: () => void;
}

export default function Layout({ onItemClick }: NavProps) {
  const { pathname } = useLocation();
  const [index, setIndex] = useState(0);
  const [style, setStyle] = useState({});
  useEffect(() => {
    const crt: any = document.querySelectorAll('.navCell')[index];
    if (crt) {
      setStyle(() => ({
        transform: `translate3d(${crt.offsetLeft}px,0,0)`,
        width: crt.offsetWidth,
      }));
    }
  }, [index]);
  return (
    <Flex className={styles.navWrap}>
      {NAVS.map((nav, j) => (
        <div
          className={`${
            pathname === nav.link ? styles.navActive : styles.navNormal
          } navCell`}
          key={nav.title}
          onClick={() => {
            setIndex(j);
            goto(nav.link);
            onItemClick?.(); // 移动端点击后关闭菜单
          }}
        >
          {nav.title}
        </div>
      ))}
      <div style={style} className={styles.activeLine}></div>
    </Flex>
  );
}
