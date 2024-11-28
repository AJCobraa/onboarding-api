/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
module.exports.writeCompany = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'onboarding',
          action:'update',
          id:id,
          item:body,
          props:data.props,
          reqd:data.reqd,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

