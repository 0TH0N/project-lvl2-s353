import fs from 'fs';
import path from 'path';
import getParser from './parsers';
import render from './renderers';
import buildAst from './buildAst';


const gendiff = (filePath1, filePath2, format) => {
  const ext1 = path.extname(filePath1);
  const data1 = fs.readFileSync(filePath1, 'utf8');
  const content1 = getParser(ext1, data1);
  const ext2 = path.extname(filePath2);
  const data2 = fs.readFileSync(filePath2, 'utf8');
  const content2 = getParser(ext2, data2);
  return render(buildAst(content1, content2), format);
};


export default gendiff;
