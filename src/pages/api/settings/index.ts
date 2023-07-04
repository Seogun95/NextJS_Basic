import { ISettings, getSettingMenus } from '@/service/settingMenu';
import type { NextApiRequest, NextApiResponse } from 'next';

//http://localhost:3000/api/settings

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISettings[]>,
) {
  if (req.method === 'GET') {
    const settings = await getSettingMenus();
    return res.status(200).json(settings);
  }
  res.status(200);
}
