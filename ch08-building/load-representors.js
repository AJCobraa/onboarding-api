/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
// load representors
var appJson = require('./representors/app-json');
var formsJson = require('./representors/forms-json');
var linksJson = require('./representors/links-json');
var pragJson = require('./representors/prag-json');
var textCsv = require('./representors/text-csv');

// return supported response bodies
exports.getTemplates = function() {
  var list = [];
  
  list.push(appJson.template);
  list.push(formsJson.template);
  list.push(linksJson.template);
  list.push(pragJson.template);
  list.push(textCsv.template);

  return list;  
}

// return supported response identifiers
exports.getResponseTypes = function() {
  var rtn  = [];
  var viewList = this.getTemplates();

  viewList.forEach(function(item) {
    rtn.push(item.format);
  });
  
  return rtn;
}
