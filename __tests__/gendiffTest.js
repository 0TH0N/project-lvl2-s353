// import { test, expect, toBe } from 'jest';
import gendiff from '../src';


const file1 = './__tests__/__fixtures__/in/file1';
const file2 = './__tests__/__fixtures__/in/file2';
const file3 = './__tests__/__fixtures__/in/file3';
const file4 = './__tests__/__fixtures__/in/file4';

const result1 = '{\n\n}';
test('Test gendiff N1', () => expect(gendiff('o', file1, file2)).toBe(result1));

const result2 = '{\n  + timeout: 20,\n  + verbose: true,\n  + host: hexlet.io\n}';
test('Test gendiff N2', () => expect(gendiff('o', file1, file4)).toBe(result2));

const result3 = '{\n  - timeout: 20,\n  - verbose: true,\n  - host: hexlet.io\n}';
test('Test gendiff N3', () => expect(gendiff('o', file4, file1)).toBe(result3));

const result41 = '{\n    host: hexlet.io,\n  - timeout: 50,\n  + timeout: 20,\n';
const result42 = '  - proxy: 123.234.53.22,\n  - follow: false,\n  + verbose: true\n}';
const result4 = result41.concat(result42);
test('Test gendiff N4', () => expect(gendiff('o', file3, file4)).toBe(result4));
