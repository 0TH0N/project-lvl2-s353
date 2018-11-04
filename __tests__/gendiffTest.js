import fs from 'fs';
import gendiff from '../src';


const filePathToSimpleResult = './__tests__/__fixtures__/answers/simple';
const filePathTosimpleTreeResult = './__tests__/__fixtures__/answers/simpleTree';
const filePathToPlainResult = './__tests__/__fixtures__/answers/plain';
const filePathToPlainIniResult = './__tests__/__fixtures__/answers/plainini';
const filePathToPlainTreeResult = './__tests__/__fixtures__/answers/plainTree';


const jsonFilePath1 = './__tests__/__fixtures__/in/json/file1.json';
const jsonFilePath2 = './__tests__/__fixtures__/in/json/file2.json';
const jsonTreeFilePath1 = './__tests__/__fixtures__/in/json/tree1.json';
const jsonTreeFilePath2 = './__tests__/__fixtures__/in/json/tree2.json';

describe('JSON format tests:', () => {
  test('Test N1. Gendiff with simple format.', () => expect(gendiff(jsonFilePath1, jsonFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathToSimpleResult, 'utf8').trim()));
  test('Test N2. Gendiff with simple tree format.', () => expect(gendiff(jsonTreeFilePath1, jsonTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathTosimpleTreeResult, 'utf8').trim()));
  test('Test N3. Gendiff with plain format.', () => expect(gendiff(jsonFilePath1, jsonFilePath2, 'plain'))
    .toBe(fs.readFileSync(filePathToPlainResult, 'utf8').trim()));
  test('Test N4. Gendiff with plain tree format.', () => expect(gendiff(jsonTreeFilePath1, jsonTreeFilePath2, 'plain'))
    .toBe(fs.readFileSync(filePathToPlainTreeResult, 'utf8').trim()));
});


const yamlFilePath1 = './__tests__/__fixtures__/in/yaml/file1.yml';
const yamlFilePath2 = './__tests__/__fixtures__/in/yaml/file2.yml';
const yamlTreeFilePath1 = './__tests__/__fixtures__/in/yaml/tree1.yaml';
const yamlTreeFilePath2 = './__tests__/__fixtures__/in/yaml/tree2.yaml';

describe('YAML format tests:', () => {
  test('Test N1. Gendiff with simple format.', () => expect(gendiff(yamlFilePath1, yamlFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathToSimpleResult, 'utf8').trim()));
  test('Test N2. Gendiff with simple tree format.', () => expect(gendiff(yamlTreeFilePath1, yamlTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathTosimpleTreeResult, 'utf8').trim()));
  test('Test N3. Gendiff with plain format.', () => expect(gendiff(yamlFilePath1, yamlFilePath2, 'plain'))
    .toBe(fs.readFileSync(filePathToPlainResult, 'utf8').trim()));
  test('Test N4. Gendiff with plain tree format.', () => expect(gendiff(yamlTreeFilePath1, yamlTreeFilePath2, 'plain'))
    .toBe(fs.readFileSync(filePathToPlainTreeResult, 'utf8').trim()));
});


const iniFilePath1 = './__tests__/__fixtures__/in/ini/file1.ini';
const iniFilePath2 = './__tests__/__fixtures__/in/ini/file2.ini';
const iniTreeFilePath1 = './__tests__/__fixtures__/in/ini/tree1.ini';
const iniTreeFilePath2 = './__tests__/__fixtures__/in/ini/tree2.ini';

describe('INI format tests:', () => {
  test('Test N1. Gendiff with simple format.', () => expect(gendiff(iniFilePath1, iniFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathToSimpleResult, 'utf8').trim()));
  test('Test N2. Gendiff with simple tree format.', () => expect(gendiff(iniTreeFilePath1, iniTreeFilePath2, 'simple'))
    .toBe(fs.readFileSync(filePathTosimpleTreeResult, 'utf8').trim()));
  test('Test N3. Gendiff with plain format.', () => expect(gendiff(iniFilePath1, iniFilePath2, 'plain'))
    .toBe(fs.readFileSync(filePathToPlainIniResult, 'utf8').trim()));
  test('Test N4. Gendiff with plain tree format.', () => expect(gendiff(iniTreeFilePath1, iniTreeFilePath2, 'plain'))
    .toBe(fs.readFileSync(filePathToPlainTreeResult, 'utf8').trim()));
});
