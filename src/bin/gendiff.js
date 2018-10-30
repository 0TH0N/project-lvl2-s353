#!/usr/bin/env node

import commander from 'commander';
import gendiff from '../code/gendiff';


commander
  .version('1.0.4')
  .usage('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .action((opt, firstFile, secondFile) => {
    gendiff(firstFile, secondFile, opt);
  })
  .parse(process.argv);
