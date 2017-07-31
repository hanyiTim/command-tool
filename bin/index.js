#!/usr/bin/env node


var program = require('commander');
var cc_process_cwd=process.cwd();
var dirplace = require("../lib/ct-git_dirplace");

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers',program.peppers);
if (program.pineapple) console.log('  - pineapple',program.pineapple);
if (program.bbqSauce) console.log('  - bbq');
