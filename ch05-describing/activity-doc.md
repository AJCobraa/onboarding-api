.Activity Properties
[cols="3,6,3",options="header"]
|=============================
|Term | Notes| Source
|[[identifier]]identifier|Activity record identifier|http://schema.org/identifier
|[[customerid]]customerId|Associated Customer record identifier|http://schema.org/givenName
|[[accountId]]accountId|Associated Account record name|http://schema.org/familyName
|[[name]]name|name of the activity|http://schema.org/name
|[[description]]description|description and/or details of the activity|http://schema.org/description
|[[dateCreated]]dateCreated|date the record was created|http://schema.org/DateTime
|[[dateUpdated]]dateUpdated|date the record was updated|http://schema.org/DateTime
|=============================

[[activity]]
.Activity Groups
[width="30%"]
|=============================
|<<identifier>>
|<<customerId>>
|<<accountId>>
|<<name>>
|<<description>>
|<<dateCreated>>
|<<dateUpdated>>
|=============================

.Activity Actions
[colxs="1,1,1,5,3,3", width="80%", options="header"]
|=========================
|ID|Type|Returns|Notes|Source|Inputs
|listActivity|unsafe|<<activity>>|Lists stored activty records|http://api.onboarding.com/alps/listActivity|None

|collectFilterData|safe||Returns a form for filtering activity records|http://api.onboarding.com/alps/collectFilterData|None

|filterActivity|safe|<<activity>>|Returns a filtered list of activity data|http://api.onboarding.com/alps/collectcustomerdata|<<name>>, <<accountId>>, <<customerId>>

|collectReadData|safe||Returns form inputs for reading a single activity record|http://api.onboarding.com/alps/collectReadData|None

|readActivity|safe|<<activity>>|returns a single activity record|http://api.onboarding.com/alps/readActivity|<<identifier>>

|collectCreateData|safe||Returns form inputs for creating a new activity record|http://api.onboarding.com/alps/collectCreateData|None

|createActivity|unsafe|<<activity>>|creates a new activity record|http://api.onboarding.com/alps/createActivity|<<accountId>>, <<customerId>>, <<name>>, <<description>>

|collectUpdateData|safe||Returns form inputs for updating an existing activity record|http://api.onboarding.com/alps/collectUpdateData|<<identifier>>

|updateActivity|idempotent|<<activity>>|Updates an existing activity record.|http://api.onboarding.com/alps/updateActivity|<<identifier>>, <<accountId>>, <<customerId>>, <<name>>, <<description>>

|collectRemoveData|safe||Returns form inputs for removing an existing activity record|http://api.onboarding.com/alps/collectRemoveData|None

|RemoveActivity|idempotent|<<activity>>|Removes an existing activity record.|http://api.onboarding.com/alps/removeActivity|<<identifier>>
|=========================

