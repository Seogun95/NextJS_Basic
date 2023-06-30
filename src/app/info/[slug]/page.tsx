interface InfoProps {
  params: {
    slug: string;
  };
}

export default function InfoDetail({ params }: InfoProps) {
  return <h1>{params.slug} 페이지</h1>;
}

export function generateStaticParams() {
  const info = ['account', 'setting'];
  return info.map(item => ({ slug: item }));
}
