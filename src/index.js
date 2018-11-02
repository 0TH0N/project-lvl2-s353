import fs from 'fs';
import path from 'path';
import parse from './code/parsers';
import render from './code/renders';
import buildAst from './code/buildAst';


const gendiff = (filePath1, filePath2) => {
  const content1 = parse({ [path.extname(filePath1)]: fs.readFileSync(filePath1, 'utf8') });
  const content2 = parse({ [path.extname(filePath2)]: fs.readFileSync(filePath2, 'utf8') });
  return render(buildAst(content1, content2));
};


export default gendiff;
