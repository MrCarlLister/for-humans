import fs from 'fs';
import path from 'path';

export function getTipByID(id: number) {
  const filePath = path.join(process.cwd(), 'public', 'tips.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const tips = JSON.parse(jsonData);

  return tips.find((tip: any) => tip.id === id);
}