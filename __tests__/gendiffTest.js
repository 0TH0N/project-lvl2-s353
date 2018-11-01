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
  test('Test JSON gendiff N1', () => expect(gendiff(jsonFilePath1, jsonFilePath2))
    .toBe(fs.readFileSync(filePathToResult1, 'utf8').slice(0, -1)));

  test('Test JSON gendiff N2', () => expect(gendiff(jsonFilePath1, jsonFilePath4))
    .toBe(fs.readFileSync(filePathToResult2, 'utf8').slice(0, -1)));

  test('Test JSON gendiff N3', () => expect(gendiff(jsonFilePath4, jsonFilePath1))
    .toBe(fs.readFileSync(filePathToResult3, 'utf8').slice(0, -1)));

  test('Test JSON gendiff N4', () => expect(gendiff(jsonFilePath3, jsonFilePath4))
    .toBe(fs.readFileSync(filePathToResult4, 'utf8').slice(0, -1)));
});


const yamlFilePath1 = './__tests__/__fixtures__/in/yaml/file1.yml';
const yamlFilePath2 = './__tests__/__fixtures__/in/yaml/file2.yml';
const yamlFilePath3 = './__tests__/__fixtures__/in/yaml/file3.yml';
const yamlFilePath4 = './__tests__/__fixtures__/in/yaml/file4.yml';

describe('JSON YAML:', () => {
  test('Test YAML gendiff N1', () => expect(gendiff(yamlFilePath1, yamlFilePath2))
    .toBe(fs.readFileSync(filePathToResult1, 'utf8').slice(0, -1)));

  test('Test YAML gendiff N2', () => expect(gendiff(yamlFilePath1, yamlFilePath4))
    .toBe(fs.readFileSync(filePathToResult2, 'utf8').slice(0, -1)));

  test('Test YAML gendiff N3', () => expect(gendiff(yamlFilePath4, yamlFilePath1))
    .toBe(fs.readFileSync(filePathToResult3, 'utf8').slice(0, -1)));

  test('Test YAML gendiff N4', () => expect(gendiff(yamlFilePath3, yamlFilePath4))
    .toBe(fs.readFileSync(filePathToResult4, 'utf8').slice(0, -1)));
});


const iniFilePath1 = './__tests__/__fixtures__/in/ini/file1.ini';
const iniFilePath2 = './__tests__/__fixtures__/in/ini/file2.ini';
const iniFilePath3 = './__tests__/__fixtures__/in/ini/file3.ini';
const iniFilePath4 = './__tests__/__fixtures__/in/ini/file4.ini';

describe('INI tests:', () => {
  test('Test INI gendiff N1', () => expect(gendiff(iniFilePath1, iniFilePath2))
    .toBe(fs.readFileSync(filePathToResult1, 'utf8').slice(0, -1)));

  test('Test INI gendiff N2', () => expect(gendiff(iniFilePath1, iniFilePath4))
    .toBe(fs.readFileSync(filePathToResult2, 'utf8').slice(0, -1)));

  test('Test INI gendiff N3', () => expect(gendiff(iniFilePath4, iniFilePath1))
    .toBe(fs.readFileSync(filePathToResult3, 'utf8').slice(0, -1)));

  test('Test INI gendiff N4', () => expect(gendiff(iniFilePath3, iniFilePath4))
    .toBe(fs.readFileSync(filePathToResult4, 'utf8').slice(0, -1)));
});
