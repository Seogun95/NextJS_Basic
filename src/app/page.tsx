import Counter from '@/components/Counter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홈 | 서근',
};

export default function Home() {
  return (
    <>
      <h1> 홈페이지다!</h1>
      <Counter />
    </>
  );
}
