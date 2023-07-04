import { getSettingMenus } from '@/service/settingMenu';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const settings = await getSettingMenus();
  return NextResponse.json({ settings });
}
