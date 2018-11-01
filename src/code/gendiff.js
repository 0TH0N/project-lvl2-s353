import { cons } from 'hexlet-pairs';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parsers from './parsers';


const gendiff = (filePath1, filePath2) => {
  // const writeResultFile = './__tests__/__fixtures__/out/out_result';
  const content1 = parsers(cons(path.extname(filePath1), fs.readFileSync(filePath1, 'utf8')));
  const content2 = parsers(cons(path.extname(filePath2), fs.readFileSync(filePath2, 'utf8')));
  const commonKeys = _.union(Object.keys(content1), Object.keys(content2));

  const result = commonKeys.map((key) => {
    if (_.has(content1, key) && _.has(content2, key) && (content1[key] === content2[key])) {
      return `    ${key}: ${content1[key]}`;
    }
    if (_.has(content1, key) && _.has(content2, key)) {
      return `  - ${key}: ${content1[key]},\n  + ${key}: ${content2[key]}`;
    }
    if (_.has(content1, key)) {
      return `  - ${key}: ${content1[key]}`;
    }
    if (_.has(content2, key)) {
      return `  + ${key}: ${content2[key]}`;
    }
    return '';
  });

  // console.log(`{\n${result.slice(0, -2)}\n}`);
  // fs.writeFileSync(writeResultFile, result);
  return `{\n${result.join(',\n')}\n}`;
};


export default gendiff;
