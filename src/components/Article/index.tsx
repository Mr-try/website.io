import React, { useState } from 'react';
import styles from './index.less';
import ReactMarkdown from 'react-markdown';
import { Flex } from '..';
/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 20:59:38
 * @Description:article
 */
interface ArticleProps {
  title: string | React.ReactNode;
  cover: string;
  content: any;
  author?: string | React.ReactNode;
  date: string | React.ReactNode;
}

function Article(props: ArticleProps) {
  return <div>{props.title}</div>;
}
/**
 * 置顶文章
 */
Article.Top = (props: ArticleProps) => {
  const [open, setOpen] = useState(false);
  const { title, cover, content } = props;
  return (
    <div className={styles.articleTop}>
      <Flex justifyContent="space-between">
        <Flex.Column style={{ flex: 1 }}>
          <div className={styles.title}>{title}</div>
          <ReactMarkdown
            children={content}
            className={open ? styles.contentOpen : styles.contentClose}
          />
        </Flex.Column>
        <div
          className={styles.cover}
          style={{ backgroundImage: `url(${cover})` }}
        />
      </Flex>
      <div className={styles.readmoreWrap}>
        <Flex.Center
          className={styles.readmore}
          onClick={() => setOpen((pre) => !pre)}
        >
          阅读更多
        </Flex.Center>
      </div>
    </div>
  );
};

export default Article;
