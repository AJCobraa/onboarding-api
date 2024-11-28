/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
// SHARED FUNCTIONS for forms+json
// Utilities available for all tests in this collection
pm.globals.set('loadUtils', function loadUtils() {
    let utils = {};
    let obj = '';
    
    // set shared object
    utils.setObject = function(args) {
        obj = args.object||'';
    };
    
    // check status
    utils.checkStatus = function(value) {
        pm.test('Status is ' + value, function() {
           pm.expect(pm.response.code).to.equal(value); 
        });
    };

    // check header
    utils.checkHeader = function(args) {
        pm.test('Header ' + args.name + ' contains ' + args.value, function() {
            var hdr = pm.response.headers.get(args.name);
            pm.expect(hdr).to.include(args.value);
        });
    };

    // check metadata
    utils.checkMetaProperty = function(args) {
        pm.test('Meta property ' + args.name + ' contains ' + args.value, function() {
           var meta = body[obj].metadata.find( x => x.name === args.name);
           pm.expect(meta.value).to.include(args.value);
        });
    };

    // check page link
    utils.checkPageLink = function(args) {
        pm.test('Valid ' + args.name + ' page link', function() {
            var link = body[obj].links.find(x => x.name === args.name);
            var coll = args.has||[];
            coll.forEach(function(p) {
                pm.expect(link).to.have.property(p);
            });
        });
    };

    utils.checkPageLinkProperty = function(args) {
        pm.test('Page link ' + args.name + ' has a property ' + args.property + ' set to ' + args.value, function() {
            var link = body[obj].links.find(x => x.name === args.name);
            pm.expect(link).to.have.property(args.property);
            pm.expect(link[args.property]).to.include(args.value);            
        });
    };
    
    // check item
    utils.checkItem = function(args) {
        pm.test('Valid items', function() {
            var coll = body[obj].items;
            coll.forEach(function(item) {
                var props = args.has||[];
                props.forEach(function(p) {
                   pm.expect(item).to.have.property(p); 
                });
            });
        });
    };

    // check item link
    utils.checkItemLink = function(args) {
        pm.test('Valid ' + args.name + ' item link', function() {
            coll = body[obj].items;
            coll.forEach(function(item) {
                var link = item.links.find(x => x.name === args.name);
                var props = args.has||[];
                props.forEach(function(p) {
                    pm.expect(link).to.have.property(p);
                });
            });
        });
    };

    utils.checkItemLinkProperty = function(args) {
        pm.test('Link ' + args.name + ' for Item ' + args.id + ' has a property ' + args.property + ' set to ' + args.value, function() {
            var coll = body[obj].items;
            item = coll.find (x => x.id = args.id);
            link = item.links.find(x => x.name = args.name);
            pm.expect(link).to.have.property(args.property);
            pm.expect(link[args.property]).to.include(args.value);
        });    
    };
        
    utils.checkItemProperty = function(args) {
        pm.test('Item ' + args.id + ' has a property ' + args.property + ' set to ' + args.value, function() {
            coll - body[obj].items;
            item = coll.find (x => x.id = args.id);
            pm.expect(item).to.have.property(args.property);
            pm.expect(item[args.property]).to.include(args.value);
        });    
    };

    // check for errort
    utils.checkError = function() {
        pm.test('Body root is a valid error object', function() {
            pm.expect(body.error).to.be.an('array');
            pm.expect(body.error[0]).to.have.property('type');
            pm.expect(body.error[0]).to.have.property('title');
            pm.expect(body.error[0]).to.have.property('detail');
            pm.expect(body.error[0]).to.have.property('status');
            pm.expect(body.error[0]).to.have.property('instance');
        });    
    };
    
    utils.checkErrorProperty = function(args) {
        pm.test('Error property ' + args.property + ' set to ' + args.value, function() {
            error = body.error[0];
            pm.expect(error).to.have.property(args.property);
            pm.expect(error[args.property]).contains(args.value);
        });
    };
    
    // check item
    utils.checkObject = function(args) {
        pm.test('Valid ' + args.name + ' object', function() {
            var coll = body[args.name];
            coll.forEach(function(item) {
                var props = args.has||[];
                props.forEach(function(p) {
                   pm.expect(item).to.have.property(p); 
                });
            });
        });
    };

    utils.checkObjectProperty = function(args) {
        pm.test(args.name + ' has property ' + args.property + ' set to ' + args.value, function() {
            var coll = body[args.name];
            coll.forEach(function(item) {
                pm.expect(item).to.have.property(args.property);
                pm.expect(item[args.property]).contains(args.value);
            });
        });
    };
    
    return utils;
    
} + '; loadUtils();');
