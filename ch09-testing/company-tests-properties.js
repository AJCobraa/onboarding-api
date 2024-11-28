/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
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
