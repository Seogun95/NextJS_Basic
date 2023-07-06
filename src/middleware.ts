import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  console.log('middleware 체킹 ✅');
  if (request.nextUrl.pathname.startsWith('/settings/middleware')) {
    console.log(`${request.url}이 홈으로 이동합니다!`);
    return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  matcher: ['/settings/:path+'],
};
