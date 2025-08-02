import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getInternData = (req, res) => {
  const dataPath = path.join(__dirname, '../data/internData.json');
  const jsonData = JSON.parse(readFileSync(dataPath, 'utf-8'));
  res.json(jsonData);
};
