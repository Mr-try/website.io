import { Article } from '@/components';
import { fetchFile } from '@/utils';
import { useRequest } from 'ahooks';
/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description:
 */
export default function HomePage() {
  const { data } = useRequest(() => fetchFile('/articles/2023/1.md'));
  console.log('data', data);

  const article = {
    title: '郑伯克段于鄢',
    content: data,
    date: '2023-5-27',
    cover: 'https://img6.bdstatic.com/img/image/pcindex/sunjunpchuazhoutu.JPG',
  };
  return (
    <div>
      <Article.Top {...article} />
    </div>
  );
}
