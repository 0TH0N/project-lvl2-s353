import fs from 'fs';
import _ from 'lodash';


const gendiff = (filePath1, filePath2) => {
  if (filePath1 && filePath2) {
    // const writeResultFile = './__tests__/__fixtures__/out/out_result';
    const json1 = JSON.parse(fs.readFileSync(filePath1));
    const json2 = JSON.parse(fs.readFileSync(filePath2));

    const commonKeys = _.union(Object.keys(json1), Object.keys(json2));

    const result = commonKeys.reduce((acc, key) => {
      if (json1[key] !== undefined && json2[key] !== undefined && (json1[key] === json2[key])) {
        return `${acc}    ${key}: ${json1[key]},\n`;
      }
      if (json1[key] !== undefined && json2[key] !== undefined) {
        return `${acc}  - ${key}: ${json1[key]},\n  + ${key}: ${json2[key]},\n`;
      }
      if (json1[key] !== undefined) {
        return `${acc}  - ${key}: ${json1[key]},\n`;
      }
      if (json2[key] !== undefined) {
        return `${acc}  + ${key}: ${json2[key]},\n`;
      }
      return `${acc}`;
    }, '');

    // fs.writeFileSync(writeResultFile, result);
    return `{\n${result.slice(0, -2)}\n}`;
  }

  return null;
};


export default gendiff;
