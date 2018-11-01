import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parsers from './parsers';


const gendiff = (filePath1, filePath2) => {
  // const writeResultFile = './__tests__/__fixtures__/out/out_result';
  const content1 = parsers(fs.readFileSync(filePath1, 'utf8'), path.extname(filePath1));
  const content2 = parsers(fs.readFileSync(filePath2, 'utf8'), path.extname(filePath2));
  const commonKeys = _.union(Object.keys(content1), Object.keys(content2));

  const result = commonKeys.reduce((acc, key) => {
    if (_.has(content1, key) && _.has(content2, key) && (content1[key] === content2[key])) {
      return `${acc}    ${key}: ${content1[key]},\n`;
    }
    if (_.has(content1, key) && _.has(content2, key)) {
      return `${acc}  - ${key}: ${content1[key]},\n  + ${key}: ${content2[key]},\n`;
    }
    if (_.has(content1, key)) {
      return `${acc}  - ${key}: ${content1[key]},\n`;
    }
    if (_.has(content2, key)) {
      return `${acc}  + ${key}: ${content2[key]},\n`;
    }
    return `${acc}`;
  }, '');

  // console.log(`{\n${result.slice(0, -2)}\n}`);
  // fs.writeFileSync(writeResultFile, result);
  return `{\n${result.slice(0, -2)}\n}`;
};


export default gendiff;
