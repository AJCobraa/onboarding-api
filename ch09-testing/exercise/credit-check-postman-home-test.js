/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/*************************
 CREDIT CHECK HOME
***************************/

// protocol
pm.test('Status is 200', function() {
   pm.expect(pm.response.code).to.equal(200); 
});

pm.test('Content-Type includes application/json', function() {
   var hdr = pm.response.headers.get('content-type');
   pm.expect(hdr).includes('application/json');
});

// structure
var body = pm.response.json();
var obj = body.home.find(x => x.id === 'list');

pm.test('root has a valid home object', function() {
    pm.expect(body.home).to.be.an('array');
    pm.expect(obj).has.property('id');
    pm.expect(obj).has.property('name');
    pm.expect(obj).has.property('href');
    pm.expect(obj).has.property('rel');
});

// values
pm.test('home.id includes list', function() {
    pm.expect(obj.id).includes('list');    
});
pm.test('home.name includes credit-check', function() {
    pm.expect(obj.name).includes('credit-check');    
});
pm.test('home.rel includes credit-check', function() {
    pm.expect(obj.rel).includes('credit-check');    
});
pm.test('home.rel includes collection', function() {
    pm.expect(obj.rel).includes('collection');    
});


