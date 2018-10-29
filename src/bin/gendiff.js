#!/usr/bin/env node

import gendiff from '../code/gendiff';

gendiff();


const program = require('commander');

program
  .version('1.0.2')
  .usage('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
