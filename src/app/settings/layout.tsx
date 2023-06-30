'use client';

import Link from 'next/link';
import SettingsCategory from './(common)/category';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <SettingsCategory />
      {children}
    </article>
  );
}
