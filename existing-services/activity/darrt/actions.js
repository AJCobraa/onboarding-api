/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/*****************************************
// bigco, inc 
// activity action elements
// 2020-02-01 : mamund
 *****************************************/

var component = require('./lib/component');
var data = require('./data');

/***************************************** 
// actions for the activity service
// home, create, list, filter, 
// read, update, status, close
 *****************************************/

module.exports.home = function(req,res) {
  return new Promise(function(resolve,reject) {
    var body = []; 
    
    // hack to handle empty root for non-link types
    ctype = req.get("Accept")||"";
    if("application/json text/csv */*".indexOf(ctype)!==-1) {
      body = {
        id:"list",
        name:"activity",
        rel:"collection activity",
        href: "{fullhost}/list/"
      };
    }
    
    if(body) {
      resolve(body);
    }
    else {
      reject({error:"invalid body"});
    }
  });
}

module.exports.create = function(req,res) {
  return new Promise(function(resolve,reject) {
    if(req.body) {
     var body = req.body;
     resolve(
      component(
        { 
          name:'activity',
          action:'add',
          item:body,
          props:data.props,
          reqd:data.reqd, 
          enums:data.enums,
          defs:data.defs
        }
       )
     );
    }
    else {
      reject({error:"invalid body"});
    }
  });
};

module.exports.list = function(req,res) {
  return new Promise(function(resolve,reject) {
    resolve(component({name:'activity',action:'list'}));
  });
}

module.exports.filter = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.query && req.query.length!==0) {
      resolve(component({name:'activity',action:'filter',filter:req.query}));
    }
    else {
      reject({error:"invalid query string"});
    }
  })
}

module.exports.read = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.params.id && req.params.id!==null) {
      var id = req.params.id;
      resolve(component({name:'activity',action:'item',id:id}));
    } 
    else {
      reject({error:"missing id"});
    }
  });
}

module.exports.update = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'activity',
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

module.exports.status = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'activity',
          action:'update',
          id:id,
          item:body,
          props:data.props,
          reqd:data.data,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

module.exports.close = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'activity',
          action:'update',
          id:id,
          item:{"status":"closed"},
          props:data.props,
          reqd:data.data,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

/*
module.exports.remove = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.params.id && req.params.id!==null) {
      var id = req.params.id;
      resolve(component(
        {name:'activity',action:'delete', id:id}));
    }
    else {
      reject({error:"invalid id"});
    }
  });
}
*/

