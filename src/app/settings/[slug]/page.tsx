interface SettingProps {
  params: {
    slug: string;
  };
}

// TODO: 서버 파일에 있는 데이터 중 해당 페이지의 정보를 찾아서 그걸 보여줄 예정
export default function SettingDetail({ params }: SettingProps) {
  return <h1>내정보 - {params.slug} 페이지</h1>;
}

// 동적으로 MetaData 설정 해주는 generateMetadata()
export function generateMetadata({ params }: SettingProps) {
  return {
    title: `${params.slug}`,
  };
}

// TODO: 모든 설정의 페이지들을 미리 만들어 둘 수 있게 해줄 예정 (SSG)
// 동적 라우팅에서 특정한 path만 static 하게 해주는 generateStaticParams()
export function generateStaticParams() {
  const setting = ['account', 'setting'];
  return setting.map(item => ({ slug: item }));
}
