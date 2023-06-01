import { useEffect } from 'react';
import init from './init';
import step1 from './step1';

/*
 * @Author: try try418@163.com
 * @Date: 2023-05-30 16:40:46
 * @Description:
 */
export default () => {
  useEffect(() => {
    step1();
  }, []);
  return (
    <div>
      <canvas width="512" height="512"></canvas>
    </div>
  );
};
