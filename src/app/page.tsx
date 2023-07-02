import Counter from '@/components/Counter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홈 | 서근',
};

export default function Home() {
  console.log('안녕');
  return (
    <>
      <h1> 홈페이지다!</h1>
      <Counter />
    </>
  );
}
