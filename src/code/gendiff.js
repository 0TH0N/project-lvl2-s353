import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parsers from './parsers';


const gendiff = (filePath1, filePath2) => {
  // const writeResultFile = './__tests__/__fixtures__/out/out_result';
  const contentOfParsing1 = parsers(fs.readFileSync(filePath1, 'utf8'), path.extname(filePath1));
  const contentOfParsing2 = parsers(fs.readFileSync(filePath2, 'utf8'), path.extname(filePath2));
  const commonKeys = _.union(Object.keys(contentOfParsing1), Object.keys(contentOfParsing2));

  const result = commonKeys.reduce((acc, key) => {
    if ((key in contentOfParsing1) && (key in contentOfParsing2)
      && (contentOfParsing1[key] === contentOfParsing2[key])) {
      return `${acc}    ${key}: ${contentOfParsing1[key]},\n`;
    }
    if ((key in contentOfParsing1) && (key in contentOfParsing2)) {
      return `${acc}  - ${key}: ${contentOfParsing1[key]},\n  + ${key}: ${contentOfParsing2[key]},\n`;
    }
    if (key in contentOfParsing1) {
      return `${acc}  - ${key}: ${contentOfParsing1[key]},\n`;
    }
    if (key in contentOfParsing2) {
      return `${acc}  + ${key}: ${contentOfParsing2[key]},\n`;
    }
    return `${acc}`;
  }, '');

  // console.log(`{\n${result.slice(0, -2)}\n}`);
  // fs.writeFileSync(writeResultFile, result);
  return `{\n${result.slice(0, -2)}\n}`;
};


export default gendiff;
