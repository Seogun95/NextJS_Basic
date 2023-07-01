import { ROUT } from '@/constants/routes';
import Link from 'next/link';

export default function SettingHome() {
  return (
    <>
      <h1>설정</h1>
      <ul>
        {Object.entries(ROUT.SETTINGS)
          .map(([KEY, VALUE]) => (
            <li key={KEY}>
              <Link href={VALUE}>{KEY.toLowerCase()}</Link>
            </li>
          ))
          .slice(1)}
      </ul>
    </>
  );
}
