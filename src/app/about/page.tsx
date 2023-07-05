import Image from 'next/image';

export default function About() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <Image
        src="https://mblogthumb-phinf.pstatic.net/MjAyMDEyMTBfMTEg/MDAxNjA3NTgxNjEzMDY0.B6Pg57afNyzJJwtCrDJlsHZ423W01lmaS-vQ9PBHexYg.KlCtmlh1UuaOQZqA9yF-357We3k6NLmUtnU3U7Tw4Y8g.JPEG.htae_/ponyo040.jpg?type=w800"
        alt="포뇨"
        width={500}
        height={500}
        priority
      />
      <h1>About 페이지</h1>
    </>
  );
}
