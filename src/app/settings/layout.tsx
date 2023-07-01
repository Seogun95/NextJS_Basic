'use client';
import SettingsCategory from '@/app/settings/(common)/category';

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
