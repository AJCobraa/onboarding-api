/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/***********************************
 COMPANY CREATE (missing properties)
************************************/

// protocol
pm.test('Status is 400', function() {
   pm.expect(pm.response.code).to.equal(400); 
});

pm.test('Content-Type includes application/problem+json', function() {
   var hdr = pm.response.headers.get('content-type');
   pm.expect(hdr).includes('application/problem+json');
});

// structure
var body = pm.response.json();
var error = body.error

pm.test('root has a valid error object', function() {
    pm.expect(error).to.be.an('array');
    error.forEach(function(obj) {
        pm.expect(obj).has.property('type');
        pm.expect(obj).has.property('title');
        pm.expect(obj).has.property('detail');
        pm.expect(obj).has.property('status');
        pm.expect(obj).has.property('instance');        
    });
});

// values
var obj = error[0];
pm.test('error.type includes error', function() {
    pm.expect(obj.type).includes('error');    
});
pm.test('error.status includes 400', function() {
    pm.expect(obj.status).includes('400');    
});
pm.test('error.title includes Missing companyName, email, and status', 
  function() {
    pm.expect(obj.title).includes('Missing companyName');    
    pm.expect(obj.title).includes('Missing email');    
    pm.expect(obj.title).includes('Missing status');    
});
pm.test('error.detail includes Missing companyName, email, and status', 
  function() {
    pm.expect(obj.detail).includes('Missing companyName');    
    pm.expect(obj.detail).includes('Missing email');    
    pm.expect(obj.detail).includes('Missing status');    
});


