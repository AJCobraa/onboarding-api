/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
module.exports.listWIP = function(req,res) {
  return new Promise(function(resolve,reject) {
    resolve(
      component({name:'onboarding',action:'list'})
    );
  });
}

