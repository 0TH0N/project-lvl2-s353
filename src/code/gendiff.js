import _ from 'lodash';
import parsers from './parsers';


const gendiff = (filePath1, filePath2) => {
  if (filePath1 && filePath2) {
    // const writeResultFile = './__tests__/__fixtures__/out/out_result';
    const parced1 = parsers(filePath1);
    const parced2 = parsers(filePath2);

    const commonKeys = _.union(Object.keys(parced1), Object.keys(parced2));

    const result = commonKeys.reduce((acc, key) => {
      if (parced1[key] !== undefined && parced2[key] !== undefined
        && (parced1[key] === parced2[key])) {
        return `${acc}    ${key}: ${parced1[key]},\n`;
      }
      if (parced1[key] !== undefined && parced2[key] !== undefined) {
        return `${acc}  - ${key}: ${parced1[key]},\n  + ${key}: ${parced2[key]},\n`;
      }
      if (parced1[key] !== undefined) {
        return `${acc}  - ${key}: ${parced1[key]},\n`;
      }
      if (parced2[key] !== undefined) {
        return `${acc}  + ${key}: ${parced2[key]},\n`;
      }
      return `${acc}`;
    }, '');

    // console.log(`{\n${result.slice(0, -2)}\n}`);
    // fs.writeFileSync(writeResultFile, result);
    return `{\n${result.slice(0, -2)}\n}`;
  }

  return null;
};


export default gendiff;
