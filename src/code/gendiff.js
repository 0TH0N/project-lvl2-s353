import fs from 'fs';
import _ from 'lodash';


const json1Gen = ([head, ...rest], json1, json2Keys, json2) => {
  if (head === undefined) return '';
  const result1 = json1[head] === json2[head] ? `    ${head}: ${json1[head]}` : null;
  const result2 = json2Keys.includes(head)
    ? `  - ${head}: ${json1[head]},\n  + ${head}: ${json2[head]}`
    : `  - ${head}: ${json1[head]}`;
  const result = result1 === null ? result2 : result1;
  if (rest.length === 0) return `${result}`;
  return `${result},\n${json1Gen(rest, json1, json2Keys, json2)}`;
};

const diffGen = ([head, ...rest], obj) => {
  if (head === undefined) return '';
  const result = `  + ${head}: ${obj[head]}`;
  if (rest.length === 0) return result;
  return `${result},\n${diffGen(rest, obj)}`;
};


const gendiff = (file1, file2) => {
  if (file1 && file2) {
    const writeResultFile = './out_result';
    const json1 = JSON.parse(fs.readFileSync(file1));
    const json2 = JSON.parse(fs.readFileSync(file2));

    const json1Keys = Object.keys(json1);
    const json2Keys = Object.keys(json2);
    const diff = _.difference(json2Keys, json1Keys);


    const result1 = `${json1Gen(json1Keys, json1, json2Keys, json2)}`;
    const necessaryComma = json1Keys.length === 0 ? '' : ',\n';
    const diffResult = diff.length === 0 ? '' : `${necessaryComma}${diffGen(diff, json2)}`;

    const result = `{\n${result1}${diffResult}\n}`;
    console.log(result);
    fs.writeFileSync(writeResultFile, result);
    return result;
  }

  console.log('No file(-s) in the command line.\nUse key "-h" or "--help" to call the reference.');
  return null;
};


export default gendiff;
