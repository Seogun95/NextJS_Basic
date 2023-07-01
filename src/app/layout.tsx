import Navigation from '@/app/(layout)/navigation';
import styles from '@/app/layout.module.css';
import './globals.css';

import { Metadata } from 'next';
import { META } from '../constants/seo';

export const metadata: Metadata = {
  title: {
    default: META.TITLE,
    template: `%s | ${META.TITLE}`,
  },
  description: META.DESCRIPTION,
  alternates: {
    canonical: '/',
    languages: {
      'ko-KR': '/ko-KR',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    type: 'website',
    url: META.PAGE_URL,
    images: [
      {
        url: META.THUMBNAIL_URL,
        width: 800,
        height: 600,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: META.TITLE,
    description: META.DESCRIPTION,
    images: [META.THUMBNAIL_URL],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>레이아웃 데모</h1>
          <Navigation />
        </header>
        <section className={styles.section}>{children}</section>
      </body>
    </html>
  );
}
