#!/usr/bin/env node

import commander from 'commander';
import gendiff from '..';


commander
  .version('1.2.5')
  .usage('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2));
  })
  .parse(process.argv);
