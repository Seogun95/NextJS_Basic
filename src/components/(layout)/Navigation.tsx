'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/app/layout.module.css';
import { ROUT } from '@/constants/routes';

export default function Navigation() {
  const navigation = usePathname();

  const homeLinks = Object.entries(ROUT).flatMap(([key, value]) => {
    if (value.HOME) {
      return [{ key, value: value.HOME }];
    }
    return [];
  });

  return (
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
  );
}
