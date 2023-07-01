'use client';

import Link from 'next/link';
import styles from '@/app/layout.module.css';
import './globals.css';
import { usePathname } from 'next/navigation';
import { ROUT } from '@/constants/routes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = usePathname();

  const homeLinks = Object.entries(ROUT).flatMap(([key, value]) => {
    if (value.HOME) {
      return [{ key, value: value.HOME }];
    }
    return [];
  });

  console.log('homeLinks --->', homeLinks);

  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>레이아웃 데모</h1>
          <nav className={styles.nav}>
            {homeLinks.map(({ key, value }) => (
              <Link
                key={key}
                href={value}
                className={navigation?.includes(value) ? styles.active : ''}
              >
                {key}
              </Link>
            ))}
          </nav>
        </header>
        <section className={styles.section}>{children}</section>
      </body>
    </html>
  );
}
