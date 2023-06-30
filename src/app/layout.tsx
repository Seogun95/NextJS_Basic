'use client';

import Link from 'next/link';
import styles from '@/app/layout.module.css';
import './globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = usePathname();

  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>레이아웃 데모</h1>
          <nav className={styles.nav}>
            <Link href="/" className={navigation === '/' ? styles.active : ''}>
              홈
            </Link>
            <Link
              href="/settings"
              className={navigation === '/settings' ? styles.active : ''}
            >
              설정
            </Link>
            <Link
              href="/settings/mypage"
              className={navigation === '/settings/mypage' ? styles.active : ''}
            >
              마이페이지
            </Link>
          </nav>
        </header>
        <section className={styles.section}>
          {children}
          </section>
      </body>
    </html>
  );
}
