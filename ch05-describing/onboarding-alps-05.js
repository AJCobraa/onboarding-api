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
      {"id" : "identifier", "type" : "semantic"},
      {"id" : "companyName", "type" : "semantic"},
      {"id" : "email", "type" : "semantic"},
      {"id" : "telephone", "type" : "semantic"},
      {"id" : "status", "type" : "semantic"},
      {"id" : "maxValue", "type" : "semantic"},
      {"id" : "discount", "type" : "semantic"},

      {"id" : "wip", "type" : "group", 
        "descriptor" : [
          {"href" : "#identifier"},
          {"href" : "#companyName"},
          {"href" : "#email"},
          {"href" : "#telephone"},
          {"href" : "#status"},
          {"href" : "#maxValue"},
          {"href" : "#discount"}
        ]
      },

      {"id" : "startOnboarding", "type" : "unsafe", "rt" : "wip",},
      {"id" : "collectCompanyData", "type" : "safe", "rt" : "wip",
        "descriptor" : [
          {"id" : "#identifier"}
        ]
      },
      {"id" : "SaveToWIP", "type" : "idempotent", "rt" : "wip",
        "descriptor" [
          {"href" : "#identifier"},
          {"href" : "#companyName"},
          {"href" : "#email"},
          {"href" : "#telephone"},
          {"href" : "#status"},
          {"href" : "#maxValue"},
          {"href" : "#discount"}
        ]
      },
      {"id" : "collectAccountData", "type" : "safe", "rt" : "wip",
        "descriptor" : [
          {"href" : "#identifier"}
        ]      
      },
      {"id" : "completeOnboarding", "type" : "idempotent", "rt" : "wip",
        "descriptor" : [
          {"href" : "#identifier"}
        ]
      },
      {"id" : "abandonOnboarding", "type" : "idempotent", "rt" : "wip",
        "descriptor" : [
          {"href" : "#identifier"}
        ]
      },
      {"id" : "goHome", "type" : "safe"}
    ]
  }
}

