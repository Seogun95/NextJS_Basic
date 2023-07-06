'use client';

import { useRouter } from 'next/navigation';

export default function RedirectBtn() {
  const backTo = () => {
    router.back();
  };

  const goSettings = () => {
    router.push('/settings');
  };

  const router = useRouter();

  return <button onClick={backTo}>RedirectBtn</button>;
}
