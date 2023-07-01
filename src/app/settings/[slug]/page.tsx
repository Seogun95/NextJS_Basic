interface SettingProps {
  params: {
    slug: string;
  };
}

export default function SettingDetail({ params }: SettingProps) {
  return <h1>내정보 - {params.slug} 페이지</h1>;
}

// 동적으로 MetaData 설정 해주는 generateMetadata()
export function generateMetadata({ params }: SettingProps) {
  return {
    title: `${params.slug}`,
  };
}

// 동적 라우팅에서 특정한 path만 static 하게 해주는 generateStaticParams()
export function generateStaticParams() {
  const setting = ['account', 'setting'];
  return setting.map(item => ({ slug: item }));
}
