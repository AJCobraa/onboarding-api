/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/***********************
 * COMPANY HOME UTILS
 ***********************/

var body = pm.response.json();
var utils = eval(globals.loadUtils);

utils.checkStatus(200);
utils.checkHeader({name:'content-type', value:'application/json'});
utils.checkObject({name:'home',has:['id','name','rel','href']});
utils.checkObjectProperty({name:'home',property:'id',value:'list'});
utils.checkObjectProperty({name:'home',property:'name',value:'company'});
utils.checkObjectProperty({name:'home',property:'rel',value:'company'});
utils.checkObjectProperty({name:'home',property:'rel',value:'collection'});
