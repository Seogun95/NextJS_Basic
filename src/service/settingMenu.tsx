import path from 'path';
import { promises as fs } from 'fs';

export interface ISettings {
  id: string;
  menu_eng: string;
  menu_kr: string;
  needPW: boolean;
}

export async function getSettingMenus(): Promise<ISettings[]> {
  for (let i = 0; i < 10000000000; i++) {}
  const filePath = path.join(process.cwd(), 'data', 'settings.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getSettingMenu(
  id: string,
): Promise<ISettings | undefined> {
  const settings = await getSettingMenus();
  return settings.find(item => item.id === id);
}
