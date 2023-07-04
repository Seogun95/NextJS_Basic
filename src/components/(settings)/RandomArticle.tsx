'use client';

import styles from '@/components/(settings)/RandomArticle.module.css';
import { useEffect, useState } from 'react';

export default function RandomArticle() {
  const [text, setText] = useState('클라이언트 컴포넌트 데이터 로딩중');

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then(res => res.json())
      .then(({ data }) => setText(data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
