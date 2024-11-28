/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
{
  "links": [
    {"rel": "list", "href": "/account/list"},
    {"rel": "add","href": "/account/list"},
    {"rel": "home","href": "/account/"}
  ],
  "account": [
    {
      "id": "1c0x0mzp83t",
      "division": "DryGoods",
      "companyId": "1or2ab05imf",
      "spendingLimit": "",
      "discountPercentage": "",
      "status": "active",
      "dateCreated": "2019-02-25T08:12:00.579Z",
      "dateUpdated": "2019-02-25T08:12:00.579Z",
      "links": [
        {"rel": "read","href": "/account/1c0x0mzp83t"},
        {"rel": "update","href": "/account/1c0x0mzp83t"},
        {"rel": "delete","href": "/account/1c0x0mzp83t"},
        {"rel": "update-limit","href": "/account/1c0x0mzp83t"}
        {"rel": "update-status","href": "/account/1c0x0mzp83t"}
      ]
    },
    ...
    {
      "id": "6x7hpmtxbss",
      "division": "Pharmacy",
      "companyId": "1or2ab05imf",
      "spendingLimit": "",
      "discountPercentage": "",
      "status": "active",
      "dateCreated": "2019-02-25T08:12:36.747Z",
      "dateUpdated": "2019-02-25T08:12:36.747Z",
      "links": [
        {"rel": "read","href": "/account/6x7hpmtxbss"},
        {"rel": "update","href": "/account/6x7hpmtxbss"},
        {"rel": "delete","href": "/account/6x7hpmtxbss"},
        {"rel": "update-limit","href": "/account/6x7hpmtxbss"}
        {"rel": "update-status","href": "/account/6x7hpmtxbss"}
      ]
    }
  ]
}
