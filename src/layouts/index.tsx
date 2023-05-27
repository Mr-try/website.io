/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
import { Outlet } from 'umi';
import styles from './index.less';
import './reset.less';
import { Flex } from '@/components';
import { useLocation } from 'react-router';
import { goto } from '@/utils';
import { useEffect, useState } from 'react';
import SVGTextAnimate from 'svg-text-animate';

const NAVS = [
  { title: '瞎看', link: '/' },
  { title: 'todo', link: '/todo' },
  { title: '文章', link: '/post' },
  { title: '我', link: '/me' },
];
export default function Layout() {
  const { pathname } = useLocation();
  const [index, setIndex] = useState(0);
  const [style, setStyle] = useState({});
  useEffect(() => {
    const handle = new SVGTextAnimate(
      '/Apalu-3.ttf',
      {
        duration: 300,
        direction: 'normal',
        'fill-mode': 'forwards',
        delay: 150,
        mode: 'delay',
      },
      {
        stroke: '#000000',
        'stroke-width': '1px',
        'font-size': 55,
      },
    );
    handle.setFont().then(() => {
      handle.create("Try's", '#logo');
    });
  }, []);
  useEffect(() => {
    const crt: any = document.querySelectorAll('.navCell')[index];
    if (crt) {
      setStyle(() => ({
        transform: `translate3d(${crt.offsetLeft}px,0,0)`,
        width: crt.offsetWidth,
      }));
    }
  }, [index]);
  console.log('location', location);

  return (
    <div className={styles.body}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={styles.nav}
      >
        <div id="logo" />
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
              }}
            >
              {nav.title}
            </div>
          ))}
          <div style={style} className={styles.activeLine}></div>
        </Flex>
      </Flex>
      <Outlet />
    </div>
  );
}
