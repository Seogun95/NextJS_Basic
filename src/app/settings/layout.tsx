import SettingsCategory from '@/app/settings/(common)/category';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '설정',
  description: '설정 페이지 입니다.',
};
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
