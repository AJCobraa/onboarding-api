#!/bin/bash
#---
# Excerpted from "Design and Build Great Web APIs",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/maapis for more book information.
#---

# **************************************
# OnBoardingAPI happy-path script
# see "Design and Build Great Web APIs"
# 2020-04 : @mamund
#
# assumes onboarding API is running w/
#   - http://localhost:8080
#   - application/json
#
# utility dependencies:
#   - curl
#   - jq
#
# **************************************

# **************************************
# network vars
svr="http://localhost:8080"
acc="accept:application/json"

# **************************************
# WIP data
wid="q1w2e3r4"
status="pending"

# **************************************
# company data
cid="w2e3r4t5"
name="Ems Corp"
email="emscorp@example.org"
street="123 Main"
city="Emtown"
state="MN"
pcode="12345"
country="USA"
tel="123-456-7890"

# **************************************
# account data
aid="e3r4t5y6"
div="Military"
limit="10000"
pct="10"

# **************************************
# activity data
tid="r4t5y6u7"
type="email"
sched="2020-04-01"
notes=""

# **************************************
# status
approve="active"
reject="closed"

# **************************************
# heading
clear
echo "Onboarding Happy Path Script"
date
echo 

# **************************************
# home read
echo Read $svr/
curl $svr/ \
  -H "$acc" | jq "."
echo

# **************************************
# WIP list read
echo Read $svr/wip/
curl $svr/wip/ \
  -H "$acc" | jq "."
echo

# **************************************
# WIP add
echo Add $svr/wip/
curl $svr/wip/ -X POST -d "id=$wid&status=pending" -H $acc | jq "."
echo

# **************************************
# company read
echo Read $svr/wip/$wid/company/
curl $svr/wip/$wid/company/ -H "$acc" | jq "."
echo

# **************************************
# company write
echo Write $svr/wip/$wid/company/
curl $svr/wip/$wid/company/ -X PUT -d "companyId=$cid&companyName=$name&streetAddress=$street&city=$city&stateProvince=$state&country=$country&postalCode=$pcode&telephone=$tel&email=$email" -H $acc | jq "." 
echo 

# **************************************
# account read
echo Read $svr/wip/$wid/account/
curl $svr/wip/$wid/account/ -H "$acc" | jq "."
echo

# **************************************
# account write
echo Write $svr/wip/$wid/account/
curl $svr/wip/$wid/account/ -X PUT -d "accountId=$aid&division=$div&spendingLimit=$limit&discountPercentage=$pct" -H $acc | jq "."
echo 

# **************************************
# activity read
echo Read $svr/wip/$wid/activity/
curl $svr/wip/$wid/activity/ -H "$acc" | jq "."
echo

# **************************************
# activity write
echo Write $svr/wip/$wid/activity/
curl $svr/wip/$wid/activity/ -X PUT -d "activityId=$tid&activityType=$type&dateScheduled=$sched" -H $acc | jq "."
echo 

# **************************************
# status read
echo Read $svr/wip/$wid/status/
curl $svr/wip/$wid/status/ -H "$acc" | jq "."
echo

# **************************************
# approve onboarding
echo Approve $svr/wip/$wid/status/
curl $svr/wip/$wid/status -X PUT -d "status=$approve" -H @acc | jq "."
echo

# **************************************
# EOF
# **************************************

