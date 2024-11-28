/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/***********************
 * COMPANY HOME
 ***********************/

// collect the response body
var body = pm.response.json();


// 200 OK
pm.test('Status is 200', function() {
    pm.expect(pm.response.code).to.equal(200);
});

// application/json
pm.test('Content-Type header is application/json', function() {
    var hdr = pm.response.headers.get('content-type');
    pm.expect(hdr).to.include('application/json');
});

// expect body be valid home object
pm.test('Response body contains a valid home object', function() {
    pm.expect(body.home).to.be.an('array'); 
    pm.expect(body.home[0]).to.have.property('id');
    pm.expect(body.home[0]).to.have.property('name');
    pm.expect(body.home[0]).to.have.property('rel');
    pm.expect(body.home[0]).to.have.property('href');
});

// check property values
pm.test('home.id is set to list', function() {
   pm.expect(body.home[0].id).to.include('list');
});
pm.test('home.name is set to company', function() {
   pm.expect(body.home[0].name).to.include('company');
});
pm.test('home.rel contains company and collection', function() {
    pm.expect(body.home[0].rel).to.include('company');
    pm.expect(body.home[0].rel).to.include('collection');
});
