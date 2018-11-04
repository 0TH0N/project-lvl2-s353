import fs from 'fs';
import path from 'path';
import parse from './parsers';
import render from './renderers';
import buildAst from './buildAst';


const readContent = (filePath) => {
  const ext = path.extname(filePath);
  const data = fs.readFileSync(filePath, 'utf8');
  return parse(ext, data);
};


const gendiff = (filePath1, filePath2, format) => {
  const content1 = readContent(filePath1);
  const content2 = readContent(filePath2);
  return render(buildAst(content1, content2), format);
};


export default gendiff;
