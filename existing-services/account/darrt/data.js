/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
// ****************************************
// bigco, inc
// data elements for account
// properties, requireds, and enums
// 2020-02-01 : mamund
// ****************************************

// this service's message properties
exports.props = [
  'id',
  'companyId',
  'division',
  'spendingLimit',
  'discountPercentage',
  'status',
  'dateCreated',
  'dateUpdated'
];

// required properties
exports.reqd = ['id','companyId','division'];

// enumerated properties
exports.enums = [
  {status:['pending','active','suspended','closed']},
  {division:['DryGoods','Hardware','Software','Grocery','Pharmacy','Military']}
];

exports.defs = [
  {name:"spendingLimit", value:"10000"},
  {name:"discountPercentage", value:"10"},
  {name:"status",value:"active"}
]

