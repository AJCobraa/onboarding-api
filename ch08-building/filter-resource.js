/***
 * Excerpted from "Design and Build Great Web APIs",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
***/
// filter the list of onboarding records
router.get('/wip/filter/', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.filterWIP;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms, 
    filter:"list"
  }
  respond(args);
});
