# Onboarding Vocabulary

## Data Elements
 * id
 * companyId
 * companyName
 * streetAddress
 * city
 * stateProvince
 * postalCode
 * country
 * telephone
 * email
 * division (DryGoods, Hardware, Software, Pharmacy, Military)
 * spendingLimit
 * discountPercentage
 * activityType (email, inperson, phone, letter)
 * dateScheduled
 * notes
 * status (active, pending, closed)
 * ratingValue
 * dateCreated
 * dateUpdated

## Action Elements
 
 * listOnboardings
 * createOnboarding
   * id[R]
 * readOnboarding
   * id[R]
 * addCompanyInfo
   * companyName[R], streetAddress, city, stateProvince, postalCode, country, telephone, email[R], status(pending)[R]
 * addAccountInfo
   * division(Military)[R], spendingLimit(1000), discountPercentage(0)
 * addActivityInfo
   * activityType(email)[R], dateScheduled, notes
 * addCreditCheckInfo
   * ratingValue(5)[R]
 * approveOnboarding
   * status(active)[R]
 * rejectOnboarding
   * status(closed)[R]

