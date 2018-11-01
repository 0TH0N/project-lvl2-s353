import fs from 'fs';
import gendiff from '../src';


const filePath1 = './__tests__/__fixtures__/in/file1';
const filePath2 = './__tests__/__fixtures__/in/file2';
const filePath3 = './__tests__/__fixtures__/in/file3';
const filePath4 = './__tests__/__fixtures__/in/file4';
const filePathToResult1 = './__tests__/__fixtures__/answers/test1';
const filePathToResult2 = './__tests__/__fixtures__/answers/test2';
const filePathToResult3 = './__tests__/__fixtures__/answers/test3';
const filePathToResult4 = './__tests__/__fixtures__/answers/test4';

test('Test gendiff N1', () => expect(gendiff(filePath1, filePath2))
  .toBe(fs.readFileSync(filePathToResult1, 'utf8').slice(0, -1)));

test('Test gendiff N2', () => expect(gendiff(filePath1, filePath4))
  .toBe(fs.readFileSync(filePathToResult2, 'utf8').slice(0, -1)));

test('Test gendiff N3', () => expect(gendiff(filePath4, filePath1))
  .toBe(fs.readFileSync(filePathToResult3, 'utf8').slice(0, -1)));

test('Test gendiff N4', () => expect(gendiff(filePath3, filePath4))
  .toBe(fs.readFileSync(filePathToResult4, 'utf8').slice(0, -1)));
