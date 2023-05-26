/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
import { Outlet } from 'umi';
import styles from './index.less';
import { Flex } from '@/components';
import { useLocation } from 'react-router';
import { goto } from '@/utils';

const NAVS = [
  { title: '首页', link: '/' },
  { title: 'todo', link: '/todo' },
  { title: '文章', link: '/post' },
  { title: '我', link: '/me' },
];
export default function Layout() {
  const { pathname } = useLocation();
  console.log('location', location);

  return (
    <div className={styles.body}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={styles.nav}
      >
        <div>logo设计中</div>
        <Flex>
          {NAVS.map((nav) => (
            <div
              className={
                pathname === nav.link ? styles.navActive : styles.navNormal
              }
              key={nav.title}
              onClick={() => goto(nav.link)}
            >
              {nav.title}
            </div>
          ))}
        </Flex>
      </Flex>
      <Outlet />
    </div>
  );
}
