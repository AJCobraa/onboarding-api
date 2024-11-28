/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
{
  "alps" : {
    "title" : "Onboarding API",
    "doc" : { 
      "type" : "markdown",
      "value" : "This is the ALPS document for BigCo's **Onboarding API**."
    },
    "descriptor" : [
      {
        "id" : "identifier", 
        "type" : "semantic",
        "text" : "Unique identifier for this record",
        "ref" : "http://schema.org/identifier"
      },
      {
        "id" : "companyName", 
        "type" : "semantic",
        "text" : "Company's legal name",
        "ref" : "http://schema.org/legalName"
      },
      {
        "id" : "email", 
        "type" : "semantic",
        "text" : "Company's primary email account",
        "ref" : "http://schema.org/email"
      },
      {
        "id" : "telephone", 
        "type" : "semantic",
        "text" : "Company's phone number",
        "ref" : "http://schema.org/telephone"
      },
      {
        "id" : "status", 
        "type" : "semantic",
        "text" : "Account status (active, inactive, suspended)",
        "ref" : "http://schema.org/status"        
      },
      {
        "id" : "maxValue", 
        "type" : "semantic",
        "text" : "Account's maximum spending limit",
        "ref" : "http://schema.org/maxValue"
      },
      {
        "id" : "discount", 
        "type" : "semantic",
        "text' : "Account's default sales discount (as a percentage)",
        "ref" : "http://schema.org/discount"        
      }
    ]
  }
}

