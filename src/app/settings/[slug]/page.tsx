import NotFound from '@/app/not-found';
import { getSettingMenu, getSettingMenus } from '@/service/settingMenu';
import { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

interface SettingProps {
  params: {
    slug: string;
  };
}

export const revalidate = 3; // revalidate this page every 3 seconds

// TODO: 서버 파일에 있는 데이터 중 해당 페이지의 정보를 찾아서 보여줌
export default async function SettingDetail({
  params: { slug },
}: SettingProps) {
  const settingMenu = await getSettingMenu(slug);

  if (!settingMenu) {
    return <NotFound />;
  }
  return (
    <>
      <h1>내정보 - {settingMenu.menu_kr} 페이지</h1>
      <Image
        src={`/images/${settingMenu.image}`}
        alt={settingMenu.menu_kr}
        width="300"
        height="200"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
      />
    </>
  );
}

// TODO: 메타데이터 동적 라우트 설정
// 동적으로 MetaData 설정 해주는 generateMetadata()
export const generateMetadata = async ({
  params: { slug },
}: SettingProps): Promise<Metadata> => {
  const settings = await getSettingMenu(slug);
  return {
    title: `${settings?.menu_kr} | 서근`,
    description: `${settings?.menu_kr} 페이지 입니다.`,
  };
};

// TODO: 모든 설정의 페이지들을 미리 만들어 렌더링 (SSG)
// 동적 라우팅에서 특정한 path만 static 하게 해주는 generateStaticParams()
export const generateStaticParams = async () => {
  const settings = await getSettingMenus();
  return settings.map(item => ({ slug: item.id }));
};
