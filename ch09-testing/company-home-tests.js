/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/***********************
 * FORMS+JSON TESTS
 ***********************/

// shared vars for this script 
var body = pm.response.json();
var utils = eval(globals.loadUtils);
utils.setObject({object:'home'});

// 200 OK
utils.checkStatus(200);

// HEADERS
utils.checkHeader({name:'content-type',value:'application/forms+json'});

// METADATA
utils.checkMetaProperty({name:'title', value:'BigCo Company Records'});
utils.checkMetaProperty({name:'release', value:'1.0.0'});
utils.checkMetaProperty({name:'author', value:'Amundsen'});

// LINKS
utils.checkPageLink({name:'home', has:['id','href','rel']});
utils.checkPageLink({name:'self', has:['id','href','rel']});
utils.checkPageLink({name:'list', has:['id','href','rel']});

// EOF
