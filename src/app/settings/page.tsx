import { getSettingMenus } from '@/service/settingMenu';
import Link from 'next/link';

export default async function SettingHome() {
  const settings = await getSettingMenus();

  return (
    <>
      <h1>설정</h1>
      <ul>
        {settings.map(({ id, menu_kr }) => (
          <li key={id}>
            <Link href={`/settings/${id}`}>{menu_kr}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
