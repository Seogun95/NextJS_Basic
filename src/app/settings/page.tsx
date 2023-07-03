import { getSettingMenus } from '@/service/settingMenu';
import axios from 'axios';
import Link from 'next/link';
import styles from '@/app/settings/page.module.css';

// export const revalidate = 3;

export default async function SettingHome() {
  const settings = await getSettingMenus();

  const response = await fetch('https://meowfacts.herokuapp.com', {
    cache: 'no-store',
  })
    .then(res => res.json())
    .then(({ data }) => data[0]);

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
      <hr />
      <article className={styles.article}>{response}</article>
    </>
  );
}
