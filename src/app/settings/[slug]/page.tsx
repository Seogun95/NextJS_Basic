interface SettingProps {
  params: {
    slug: string;
  };
}

export default function SettingDetail({ params }: SettingProps) {
  return <h1>내정보 - {params.slug} 페이지</h1>;
}

export function generateStaticParams() {
  const setting = ['account', 'setting'];
  return setting.map(item => ({ slug: item }));
}
