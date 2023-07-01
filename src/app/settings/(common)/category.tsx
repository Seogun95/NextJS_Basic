'use client';
import Link from 'next/link';

export default function SettingsCategory() {
  return (
    <>
      <style jsx>{`
        .category__container {
          display: flex;
          gap: 1rem;
          border: 1px solid tomato;
          padding: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
      <div className="category__container">
        <Link href="/settings/mypage">내 정보</Link>
        <Link href="/settings/cart">장바구니</Link>
      </div>
    </>
  );
}
