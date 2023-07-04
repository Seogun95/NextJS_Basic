'use client';
import Link from 'next/link';
import styles from '@/app/settings/(common)/category.module.css';

export default function SettingsCategory() {
  return (
    <>
      <div className={styles.category__container}>
        <Link href="/settings/mypage">내 정보</Link>
        <Link href="/settings/cart">장바구니</Link>
      </div>
    </>
  );
}
