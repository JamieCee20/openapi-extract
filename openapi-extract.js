#!/usr/bin/env node

'use strict';

const fs = require('node:fs');

const yaml = require('yaml');

const extractor = require('./index.js');

let argv = require('yargs')
  .usage('Usage: openapi-extract [options] {infile}')
  .demand(1)
  .strict()
  .help('h')
  .alias('h', 'help')
  .version()
  .string('path')
  .alias('p', 'path')
  .describe('path', 'the path to extract')
  .boolean('info')
  .alias('i', 'info')
  .describe('info', 'copy full info object, otherwise minimal')
  .argv;

async function main() {
  let s = fs.readFileSync(argv._[0], 'utf8');
  let obj = yaml.parse(s);
  let res = extractor.extract(obj, argv);
  if (argv._[0].indexOf('.json') >= 0) {
    s = JSON.stringify(res, null, 2);
  }
  else {
    s = yaml.stringify(res);
  }
  if (argv._.length > 1) {
    console.log(s);
  }
  else {
    console.log(s);
  }
}

main();
