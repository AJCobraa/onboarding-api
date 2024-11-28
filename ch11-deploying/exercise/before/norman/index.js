#!/usr/bin/env node
/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/

/* 
 * name ....: norman utility
 * date ....: 2019-01
 * author ..: mamund
 *
 * runs postman collections test via newman
 * see https://www.npmjs.com/package/newman#api-reference
 *
 * "Goodbye, Norman, Goodbye!"
 * https://getyarn.io/yarn-clip/6e57047d-795a-4904-bdcf-784de3ed0066
 */

"use strict";

var newman = require('newman');
var program = require('commander');
var fs = require('fs');
var shell = require('shelljs');

// top-level routine
program
  .arguments('<coll> [en]')
  .action(function(coll, en){runner(coll, en)})
  .parse(process.argv);

// do the work
function runner(coll, en) {
  var options;
 
  if(fs.existsSync(coll)===true) {
    options = {};
    options.collection = coll;
    options.environment = en;
    options.reporters = 'cli';
     
    newman.run(options, function (err, summary) {
      if (err) { throw err; }
      if (summary.run.failures.length!==0) {
         console.log("One or more tests failed.")
      }
      else {
         console.log('collection run complete!');
         // add deployment command here
         shell.exec("git push heroku master");
      }
    });  
  }
  else {
    console.log("** ERROR: Collection file not found: " + coll);
  }
} 

// *** eof

