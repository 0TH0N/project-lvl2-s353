import fs from 'fs';
import gendiff from '../src';


const filePathToResult1 = './__tests__/__fixtures__/answers/test1';
const filePathToResult2 = './__tests__/__fixtures__/answers/test2';
const filePathToResult3 = './__tests__/__fixtures__/answers/test3';
const filePathToResult4 = './__tests__/__fixtures__/answers/test4';


const jsonFilePath1 = './__tests__/__fixtures__/in/json/file1.json';
const jsonFilePath2 = './__tests__/__fixtures__/in/json/file2.json';
const jsonFilePath3 = './__tests__/__fixtures__/in/json/file3.json';
const jsonFilePath4 = './__tests__/__fixtures__/in/json/file4.json';

describe('JSON tests:', () => {
  test('Test N1. JSON gendiff with empty files', () => expect(gendiff(jsonFilePath1, jsonFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathToResult1, 'utf8').trim()));

  test('Test N2. JSON gendiff with first empty file.', () => expect(gendiff(jsonFilePath1, jsonFilePath4, 'simple'))
    .toBe(fs.readFileSync(filePathToResult2, 'utf8').trim()));

  test('Test N3. JSON gendiff with second empty file.', () => expect(gendiff(jsonFilePath4, jsonFilePath1, 'simple'))
    .toBe(fs.readFileSync(filePathToResult3, 'utf8').trim()));

  test('Test N4. JSON gendiff with simple files.', () => expect(gendiff(jsonFilePath3, jsonFilePath4, 'simple'))
    .toBe(fs.readFileSync(filePathToResult4, 'utf8').trim()));
});


const yamlFilePath1 = './__tests__/__fixtures__/in/yaml/file1.yml';
const yamlFilePath2 = './__tests__/__fixtures__/in/yaml/file2.yml';
const yamlFilePath3 = './__tests__/__fixtures__/in/yaml/file3.yml';
const yamlFilePath4 = './__tests__/__fixtures__/in/yaml/file4.yml';

describe('YAML tests:', () => {
  test('Test N1. YAML gendiff with empty files', () => expect(gendiff(yamlFilePath1, yamlFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathToResult1, 'utf8').trim()));

  test('Test N2. YAML gendiff with first empty file.', () => expect(gendiff(yamlFilePath1, yamlFilePath4, 'simple'))
    .toBe(fs.readFileSync(filePathToResult2, 'utf8').trim()));

  test('Test N3. YAML gendiff with second empty file.', () => expect(gendiff(yamlFilePath4, yamlFilePath1, 'simple'))
    .toBe(fs.readFileSync(filePathToResult3, 'utf8').trim()));

  test('Test N4. YAML gendiff with simple files.', () => expect(gendiff(yamlFilePath3, yamlFilePath4, 'simple'))
    .toBe(fs.readFileSync(filePathToResult4, 'utf8').trim()));
});


const iniFilePath1 = './__tests__/__fixtures__/in/ini/file1.ini';
const iniFilePath2 = './__tests__/__fixtures__/in/ini/file2.ini';
const iniFilePath3 = './__tests__/__fixtures__/in/ini/file3.ini';
const iniFilePath4 = './__tests__/__fixtures__/in/ini/file4.ini';

describe('INI tests:', () => {
  test('Test N1. INI gendiff with empty files', () => expect(gendiff(iniFilePath1, iniFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathToResult1, 'utf8').trim()));

  test('Test N2. INI gendiff with first empty file.', () => expect(gendiff(iniFilePath1, iniFilePath4, 'simple'))
    .toBe(fs.readFileSync(filePathToResult2, 'utf8').trim()));

  test('Test N3. INI gendiff with second empty file.', () => expect(gendiff(iniFilePath4, iniFilePath1, 'simple'))
    .toBe(fs.readFileSync(filePathToResult3, 'utf8').trim()));

  test('Test N4. INI gendiff with simple files.', () => expect(gendiff(iniFilePath3, iniFilePath4, 'simple'))
    .toBe(fs.readFileSync(filePathToResult4, 'utf8').trim()));
});


const TreeFilePathToResult1 = './__tests__/__fixtures__/answers/tree1';
const TreeFilePathToResult2 = './__tests__/__fixtures__/answers/tree2';
const TreeFilePathToResult3 = './__tests__/__fixtures__/answers/tree3';
const TreeFilePathToResult4 = './__tests__/__fixtures__/answers/tree4';


const jsonEmptyFile = './__tests__/__fixtures__/in/json/file1.json';
const jsonTreeFilePath1 = './__tests__/__fixtures__/in/json/tree1.json';
const jsonTreeFilePath2 = './__tests__/__fixtures__/in/json/tree2.json';

describe('JSON Tree tests:', () => {
  test('Test N1. JSON gendiff with empty files', () => expect(gendiff(jsonEmptyFile, jsonEmptyFile, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult1, 'utf8').trim()));

  test('Test N2. JSON gendiff with first empty file.', () => expect(gendiff(jsonEmptyFile, jsonTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult2, 'utf8').trim()));

  test('Test N3. JSON gendiff with second empty file.', () => expect(gendiff(jsonTreeFilePath1, jsonEmptyFile, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult3, 'utf8').trim()));

  test('Test N4. JSON gendiff with simple files.', () => expect(gendiff(jsonTreeFilePath1, jsonTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult4, 'utf8').trim()));
});


const ymlEmptyFile = './__tests__/__fixtures__/in/yaml/file1.yml';
const ymlTreeFilePath1 = './__tests__/__fixtures__/in/yaml/tree1.yml';
const ymlTreeFilePath2 = './__tests__/__fixtures__/in/yaml/tree2.yml';

describe('YML Tree tests:', () => {
  test('Test N1. YML gendiff with empty files', () => expect(gendiff(ymlEmptyFile, ymlEmptyFile, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult1, 'utf8').trim()));

  test('Test N2. YML gendiff with first empty file.', () => expect(gendiff(ymlEmptyFile, ymlTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult2, 'utf8').trim()));

  test('Test N3. YML gendiff with second empty file.', () => expect(gendiff(ymlTreeFilePath1, ymlEmptyFile, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult3, 'utf8').trim()));

  test('Test N4. YML gendiff with simple files.', () => expect(gendiff(ymlTreeFilePath1, ymlTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult4, 'utf8').trim()));
});


const iniEmptyFile = './__tests__/__fixtures__/in/ini/file1.ini';
const iniTreeFilePath1 = './__tests__/__fixtures__/in/ini/tree1.ini';
const iniTreeFilePath2 = './__tests__/__fixtures__/in/ini/tree2.ini';
const iniResultForTest2 = './__tests__/__fixtures__/answers/tree2ini';

describe('INI Tree tests:', () => {
  test('Test N1. INI gendiff with empty files', () => expect(gendiff(iniEmptyFile, iniEmptyFile, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult1, 'utf8').trim()));

  test('Test N2. INI gendiff with first empty file.', () => expect(gendiff(iniEmptyFile, iniTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(iniResultForTest2, 'utf8').trim()));

  test('Test N3. INI gendiff with second empty file.', () => expect(gendiff(iniTreeFilePath1, iniEmptyFile, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult3, 'utf8').trim()));

  test('Test N4. INI gendiff with simple files.', () => expect(gendiff(iniTreeFilePath1, iniTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(TreeFilePathToResult4, 'utf8').trim()));
});


const plainPathToResult1 = './__tests__/__fixtures__/answers/plain1';
const plainPathToResult2 = './__tests__/__fixtures__/answers/plain2';
const plainPathToResult3 = './__tests__/__fixtures__/answers/plain3';
const plainPathToResult4 = './__tests__/__fixtures__/answers/plain4';
const plainPathToResult5 = './__tests__/__fixtures__/answers/plain5';

describe('Plain render tests:', () => {
  test('Test N1. Plain render with empty files.', () => expect(gendiff(jsonFilePath1, jsonFilePath2, 'plain'))
    .toBe(fs.readFileSync(plainPathToResult1, 'utf8').trim()));

  test('Test N2. Plain render simple files.', () => expect(gendiff(jsonFilePath3, jsonFilePath4, 'plain'))
    .toBe(fs.readFileSync(plainPathToResult2, 'utf8').trim()));

  test('Test N3. Plain render with empty second file.', () => expect(gendiff(jsonTreeFilePath1, jsonFilePath1, 'plain'))
    .toBe(fs.readFileSync(plainPathToResult3, 'utf8').trim()));

  test('Test N4. Plain render with empty first file.', () => expect(gendiff(jsonFilePath1, jsonTreeFilePath2, 'plain'))
    .toBe(fs.readFileSync(plainPathToResult4, 'utf8').trim()));

  test('Test N5. Plain render with tree files.', () => expect(gendiff(jsonTreeFilePath1, jsonTreeFilePath2, 'plain'))
    .toBe(fs.readFileSync(plainPathToResult5, 'utf8').trim()));
});


const jsonPathToResult1 = './__tests__/__fixtures__/answers/json1';
const jsonPathToResult2 = './__tests__/__fixtures__/answers/json2';
const jsonPathToResult3 = './__tests__/__fixtures__/answers/json3';
const jsonPathToResult4 = './__tests__/__fixtures__/answers/json4';
const jsonPathToResult5 = './__tests__/__fixtures__/answers/json5';

describe('JSON render tests:', () => {
  test('Test N1. JSON render with empty files.', () => expect(gendiff(jsonFilePath1, jsonFilePath2, 'json'))
    .toBe(fs.readFileSync(jsonPathToResult1, 'utf8').trim()));

  test('Test N2. JSON render simple files.', () => expect(gendiff(jsonFilePath3, jsonFilePath4, 'json'))
    .toBe(fs.readFileSync(jsonPathToResult2, 'utf8').trim()));

  test('Test N3. JSON render with empty second file.', () => expect(gendiff(jsonTreeFilePath1, jsonFilePath1, 'json'))
    .toBe(fs.readFileSync(jsonPathToResult3, 'utf8').trim()));

  test('Test N4. JSON render with empty first file.', () => expect(gendiff(jsonFilePath1, jsonTreeFilePath2, 'json'))
    .toBe(fs.readFileSync(jsonPathToResult4, 'utf8').trim()));

  test('Test N5. JSON render with tree files.', () => expect(gendiff(jsonTreeFilePath1, jsonTreeFilePath2, 'json'))
    .toBe(fs.readFileSync(jsonPathToResult5, 'utf8').trim()));
});
