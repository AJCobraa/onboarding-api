/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
{
  "company": {
   "metadata": [
   ],
    "links": [
     {
        "properties": [],
        "method": "GET",
        "title": "Home",
        "tags": "collection company home list item",
        "rel": "collection company",
        "href": "http://company-atk.herokuapp.com/",
        "name": "home",
        "id": "home"
      },
      {
        "properties": [],
        "method": "GET",
        "title": "List",
        "tags": "collection company home list item",
        "rel": "collection company",
        "href": "http://company-atk.herokuapp.com/list/",
        "name": "list",
        "id": "list"
      },
      {
        "id": "filter"
        "method": "GET",
        "title": "Search",
        "tags": "collection company filter list item",
        "rel": "collection company filter",
        "href": "http://company-atk.herokuapp.com/filter/",
        "name": "filter",
        "properties": [
          {"value": "", "name": "status"},
          {"value": "", "name": "companyName" },
          {"value": "", "name": "stateProvince"},
          {"value": "", "name": "country"}
        ],
      }
    ],
   "items": [
      {
        "id": "72g8euppcm",
        "companyName": "mike-co",
        "streetAddress": "",
        "city": "",
        "stateProvince": "",
        "postalCode": "",
        "country": ""
        "dateUpdated": "2020-03-13T04:51:12.506Z",
        "dateCreated": "2020-03-13T04:51:12.506Z",
        "status": "pending",
        "email": "mike-co@gmail.com",
        "telephone": "",
        "links": [
          {
            "properties": [],
            "method": "GET",
            "title": "Read",
            "rel": "item company read",
            "href": "http://company-atk.herokuapp.com/72g8euppcm",
            "name": "read",
            "id": "read_72g8euppcm"
          },
          {
            "properties": [
              {
                "value": "pending",
                "name": "status"
              }
            ],
            "method": "PATCH",
            "title": "Status",
            "tags": "company item list status",
            "rel": "item company status",
            "href": "http://company-atk.herokuapp.com/status/72g8euppcm",
            "name": "status",
            "id": "status_72g8euppcm"
          },
          {
            "properties": [],
            "method": "DELETE",
            "title": "Remove",
            "rel": "item company remove",
            "href": "http://company-atk.herokuapp.com/72g8euppcm",
            "name": "remove",
            "id": "remove_72g8euppcm"
          }
        ]
      }
    ]
  }
}
