/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
/*****************************************
// bigco, inc account
// transitions
// 2020-02-01 : mamund
 *****************************************/
 
 // page- and item-level forms
 exports.forms = {
   pageForms: [
     {
       id:"self",
       name:"self",
       href:"{fullurl}",
       rel: "self colllection account",
       tags: "collection account self home list item",
       title: "Self",
       method: "GET",
       properties:[]
     },
     {
       id:"home",
       name:"home",
       href:"{fullhost}/",
       rel: "collection account",
       tags: "collection account home list item",
       title: "Home",
       method: "GET",
       properties:[]
     },
     {
       id:"list",
       name:"list",
       href:"{fullhost}/list/",
       rel:"collection account",
       tags:"collection account home list item",
       title:"List",
       method:"GET",
       properties:[]
     },
     {
       id:"filter",
       name:"filter",
       href:"{fullhost}/filter/",
       rel:"collection account filter",
       tags:"collection account filter list item",
       title:"Search",
       method:"GET",
       properties:[
         {name:"status",value:""},
         {name:"companyName",value:""},
         {name:"stateProvince",value:""},
         {name:"country",value:""}
       ]
     },
     {
       id: "createAccount",
       name: "create",
       href: "{fullhost}/",
       rel: "create-form account",
       tags: "collection account list",
       title: "Create Account",
       method: "POST",
       properties: [
        {name:"id",value:"{makeid}"},
        {name:"companyId",value:""},
        {name:"division",value:""},
        {name:"spendingLimit",value:"10000"},
        {name:"discountPercentage",value:"10"},
        {name:"status",value:"pending"}
       ]
     }
   ],
   itemForms: [
     {
       id:"read_{id}",
       name: "read",
       href: "{fullhost}/{id}",
       rel: "item account read",
       title: "Read",
       method: "GET",
       properties: []
     },
     {
       id:"update_{id}",
       name:"update",
       href:"{fullhost}/{id}",
       rel: "item edit-form account",
       tags: "account list item",
       title: "Edit",
       method: "PUT",
       properties: [
         {name:"id",value:"{id}"},
         {name:"companyId",value:"{companyId}"},
         {name:"status",value:"{status}"},
         {name:"division",value:"{division}"},
         {name:"spendingLimit",value:"{spendingLimit}"},
         {name:"discountPercentage",value:"{discountPercentage}"},
       ]
     },
     {
       id:"status_{id}",
       name:"status",
       href:"{fullhost}/status/{id}",
       rel: "item account status",
       tags: "account item list status",
       title: "Status",
       method: "PATCH",
       properties: [
         {name:"status",value:"{status}"}
       ]
     },
     {
       id:"limits_{id}",
       name:"status",
       href:"{fullhost}/status/{id}",
       rel: "item account limits",
       tags: "account item list limits",
       title: "Status",
       method: "PATCH",
       properties: [
         {name:"spendingLimit",value:"{spendingLimit}"},
         {name:"discountPercentage",value:"{discountPercentage}"}
       ]
     }
   ]
 }
