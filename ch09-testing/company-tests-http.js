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

// 200 OK
pm.test('Status is 200', function() {
    pm.expect(pm.response.code).to.equal(200);
});

// application/json
pm.test('Content-Type header is application/json', function() {
    var hdr = pm.response.headers.get('content-type');
    pm.expect(hdr).to.include('application/json');
});

