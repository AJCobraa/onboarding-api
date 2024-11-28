/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/*****************************************
// DARRT Framework
// root of the service API
// 2020-02-01 : mamund
 *****************************************/
 
var express = require('express');
var app = express();
var cors = require('cors');

var resources = require('./darrt/resources');
var utils = require('./darrt/lib/utils.js');
var port = process.env.PORT || 8181;

//******************************************
// start of auth support
var secure = require('./darrt/lib/api-auth.js');
app.use(secure.jwtCheck);
// end of auth support
//******************************************

// general error-handler
app.use(function(err, req, res, next) {
  var rtn = {};

  console.log("app-level error");
  console.log(err);
  
  if(res.headersSent) {
    return next(err);  
  }
  
  rtn.type = "Error";
  rtn.title = err.name
  rtn.detail = err.message;
  rtn.status = err.status
  res.setHeader("content-type","application/problem+json");
  res.status(err.status).send(JSON.stringify(rtn,null,2)+"\n");
});


// *************************************************************

// support calls from JS in browser
app.use(cors());
app.options('*',cors()); 

// point to exposed resources for this API
app.use('/',resources); 

// start listening for requests
app.listen(port, () => console.log(`listening on port ${port}!`));
