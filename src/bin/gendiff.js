#!/usr/bin/env node

import commander from 'commander';
import gendiff from '..';


commander
  .version('1.1.0')
  .usage('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .action((filePath1, filePath2) => {
    gendiff(filePath1, filePath2);
  })
  .parse(process.argv);
