/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
// collect the response body
var body = pm.response.json();

// expect body be valid home object
pm.test('Response body contains a valid home object', function() {
    pm.expect(body.home).to.be.an('array'); 
    pm.expect(body.home[0]).to.have.property('id');
    pm.expect(body.home[0]).to.have.property('name');
    pm.expect(body.home[0]).to.have.property('rel');
    pm.expect(body.home[0]).to.have.property('href');
});

