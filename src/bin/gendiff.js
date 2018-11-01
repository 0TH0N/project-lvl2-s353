#!/usr/bin/env node

import fs from 'fs';
import commander from 'commander';
import gendiff from '..';


commander
  .version('1.2.2')
  .usage('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .action((filePath1, filePath2) => {
    if (fs.existsSync(filePath1) && fs.existsSync(filePath2)) {
      const result = gendiff(filePath1, filePath2);
      console.log(result);
    } else {
      console.log('Any file(-s) doesn\'t exist');
    }
  })
  .parse(process.argv);
