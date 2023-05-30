/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
import { Outlet } from 'umi';
import styles from './index.less';
import { Flex } from '@/components';
import { useEffect } from 'react';
import SVGTextAnimate from 'svg-text-animate';
import SearchIcon from '@/assets/search.png';
import './reset.less';

export default function Layout() {
  useEffect(() => {
    const handle = new SVGTextAnimate(
      '/Apalu-3.ttf',
      {
        duration: 900,
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
      handle.create('Try', '#logo');
    });
  }, []);

  return (
    <div className={styles.body}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={styles.nav}
      >
        <div id="logo" />
        <Flex alignItems="center" className={styles.searchWrap}>
          <img src={SearchIcon} />
          <input className={styles.input} />
        </Flex>
      </Flex>
      <Outlet />
    </div>
  );
}
