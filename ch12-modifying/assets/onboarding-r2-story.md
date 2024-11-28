## Onboarding Story at BigCo, Inc.
_RELEASE 2 (R2)_

### Purpose
Add the option of including the `ratingValue` (from the Credit-Check service) as part of the onboarding process.

### Processing
When going through the existing _onboarding process_ add the option of including results from the CreditCheck service (in the form of a `ratingValue`) to the onboarding record. 

The current onboarding API experience has the following steps:

1. Create a new Onboarding Record
2. Collect and store Company information
3. Collect and store Account information
4. Collect and store Activity information
5. After review, either _accept_ or _reject_ the completed record.

For this release (R2), add an optional step (sometime after the current step 2 and before step 5) to collect and store CreditCheck Information. The current CreditCheck service outputs a single `ratingValue` (number between 1 and 10). This property (`ratingValue`) will be added to the **Data** list for the Onboarding API.

### Data
Add the `ratingValue` to the list of data properties managed by this API. 

### Actions
Add the `addCreditCheckInfo` action to the list of possible actions for this API.

