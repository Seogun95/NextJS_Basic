export default function About() {
  return <h1>About 페이지</h1>;
}

export function generateStaticParams() {
  const about = ['', ''];
  return about.map(item => ({ slug: item }));
}
