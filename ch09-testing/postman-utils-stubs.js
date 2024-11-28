/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
pm.globals.set('loadUtils', function loadUtils() {
    let utils = {};
    let obj = '';

    utils.checkStatus = function(value) {...};
    utils.checkHeader = function(args) {...};  
    utils.setObject = function(args) {...};
    utils.checkObject = function(args) {...};
    utils.checkObjectProperty = function(args) {...};
    utils.checkMetaProperty = function(args) {...};
    utils.checkPageLink = function(args) {...};
    utils.checkPageLinkProperty = function(args) {...};
    utils.checkItem = function(args) {...};
    utils.checkItemLink = function(args) {...};
    utils.checkItemLinkProperty = function(args) {...};
    utils.checkItemProperty = function(args) {...};
    utils.checkError = function() {...};
    utils.checkErrorProperty = function(args) {...};
    
    return utils;
    
} + '; loadUtils();');
