#!/usr/bin/env node

import commander from 'commander';
import gendiff from '..';
import { version, description } from '../../package.json';


commander
  .version(version)
  .usage('[options] <firstConfig> <secondConfig>')
  .description(description)
  .option('-f, --format [type]', 'Output format', 'simple')
  .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2, commander.format));
  })
  .parse(process.argv);
