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
// data elements for activity
// properties, requireds, and enums
// 2020-02-01 : mamund
// ****************************************

// this service's message properties
exports.props = [
  'id',
  'companyId',
  'accountId',
  'activityType',
  'dateScheduled',
  'notes',
  'status',
  'dateCreated',
  'dateUpdated'
];

// required properties
exports.reqd = ['id','companyId','activityType','status'];

// enumerated properties
exports.enums = [
  {status:['pending','active','suspended','closed']},
  {activityType:['email','inperson','phone','letter']}
];

exports.defs = [
  {name:"activityType", value:"email"},
  {name:"status",value:"active"}
]

