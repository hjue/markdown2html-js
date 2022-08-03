#!/usr/bin/env node
/*
 * usage: cat test/test.md | main.js
 */
var fs = require('fs');
var md = require('markdown-it')();
// var content = fs.readFileSync('test.html', { encoding: 'utf8', flag: 'r' })
var stdinBuffer = fs.readFileSync(0)
var html = md.render(stdinBuffer.toString())
console.log(html)