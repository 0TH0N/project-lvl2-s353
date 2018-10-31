#!/usr/bin/env node

import commander from 'commander';
import gendiff from '..';


commander
  .version('1.0.8')
  .usage('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .action((firstFile, secondFile) => {
    gendiff(firstFile, secondFile);
  })
  .parse(process.argv);
