const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const SignUpPage = require('../pageobjects/signup.page');

const pages = {
  login: LoginPage,
  signup: SignUpPage,
};

Given(/^I am on the (\w+) page$/, (page) => {
  pages[page].open();
});

When(/^I login with (.+) and (.+)$/, (username, password) => {
  LoginPage.login(username, password);
});

Then(/^I should text (.*)$/, (message) => {
  expect(browser.$('body')).toHaveTextContaining(message);
});

Then(/^I reload browser session/, () => {
  browser.reloadSession();
});

When(/^I select (.+) and (.+)$/, (gender, lookingFor) => {
  SignUpPage.selectGender(gender);
  SignUpPage.selectLookingFor(lookingFor);
});

When(/^I submit with (.+)$/, (email) => {
  SignUpPage.enterEmail(email);
  SignUpPage.submit();
});

When(/^I enter (.+) as name$/, (name) => {
  SignUpPage.enterName(name);
});

When(/^I click on Next button$/, () => {
  SignUpPage.clickNext();
  SignUpPage.wait(2);
});

When(/^I select (.+) as gender$/, (gender) => {
  SignUpPage.wait(2);
  SignUpPage.selectMyGender(gender);
});

When(/^I enter (.+) as email$/, (email) => {
  SignUpPage.enterEmailAddress(email);
});

When(/^I enter (.+) as password$/, (password) => {
  SignUpPage.enterPassword(password);
});

When(/^I select (.+) for Birthday$/, (date) => {
  SignUpPage.selectDate(date);
});

//DEBUG
When(/^Wait for next one$/, () => {
  console.log("I'll wait");
  browser.pause(30000);
});

When(/^I select (.+) as Country$/, (country) => {
  SignUpPage.selectCountry(country);
});

When(/^I select (.+) as City$/, (city) => {
  SignUpPage.selectCity(city);
});

When(/^I select (.+) as District$/, (district) => {
  SignUpPage.selectDistrict(district);
});

When(/^I select (.+) for the how far member location$/, (location) => {
  SignUpPage.selectProximateArea(location);
  SignUpPage.wait(2);
});

When(/^I select (.+) for monthly income$/, (income) => {
  SignUpPage.selectIncome(income);
  SignUpPage.wait(2);
});

When(/^I select keep it secret as (.+)$/, (isSecret) => {
  SignUpPage.keepIncomeSecret(isSecret);
});

When(
  /^I select (.+) for the finance situation of member$/,
  (isFinanceImportant) => {
    SignUpPage.importanceOfMemberIncome(isFinanceImportant);
    SignUpPage.wait(2);
  },
);

When(/^I select Your Merital Status as (.+)$/, (status) => {
  SignUpPage.selectMaritalStatus(status);
});

When(/^I select (.+) in Children$/, (hasChildren) => {
  SignUpPage.selectChildrenStatus(hasChildren);
  SignUpPage.wait(2);
});

When(/^I add the details as (.+)$/, (comment) => {
  SignUpPage.enterDetails(comment);
});

When(/^I select (.+) in occupation$/, (occupation) => {
  SignUpPage.selectOccupation(occupation);
});

When(/^I have (.+) Children$/, (children) => {
  if (children !== '' && children !== '0') {
    SignUpPage.selectChildren(children);
  }
});

When(/^I select (.+) for is children living with you$/, (isWithYou) => {
  SignUpPage.selectChildrenLiving(isWithYou);
  SignUpPage.wait(2);
});

When(/^I select (.+) for the accept member who has child$/, (hasChildren) => {
  SignUpPage.acceptMemberWithChild(hasChildren);
  SignUpPage.wait(2);
});

When(
  /^I select (.+) for the accept member live with child$/,
  (liveWithChildren) => {
    SignUpPage.acceptMemberLivingWithChild(liveWithChildren);
    SignUpPage.wait(2);
  },
);

When(/^I select (.+) for if I want children$/, (wantChildren) => {
  SignUpPage.ifWantChildren(wantChildren);
  SignUpPage.wait(2);
});

When(/^I select (.+) for who can see my profile$/, (isPrivacy) => {
  SignUpPage.isProfilePrivate(isPrivacy);
  SignUpPage.wait(2);
});

When(/^I (.+) for the accepting the agreement$/, (isAgreement) => {
  SignUpPage.acceptAgreement(isAgreement);
  SignUpPage.wait(2);
});

When(
  /^I (.+) for the receiving the promotional mails$/,
  (isReceivePromoMail) => {
    SignUpPage.receivePrmo(isReceivePromoMail);
  },
);

When(/^I select my height as (.+)$/, (height) => {
  SignUpPage.selectHeight(height);
});

When(/^I select my weight as (.+)$/, (weight) => {
  SignUpPage.selectWeight(weight);
});

When(/^I select my eye color as (.+)$/, (eyeColor) => {
  SignUpPage.selecteyeColor(eyeColor);
  SignUpPage.wait(2);
});

When(/^I select my hair color as (.+)$/, (hairColor) => {
  SignUpPage.selectHairColor(hairColor);
  SignUpPage.wait(2);
});

When(/^I select I am physically (.+)$/, (physique) => {
  SignUpPage.selectPhysique(physique);
  SignUpPage.wait(2);
});

When(/^I select (.+) importance of member weight$/, (weight) => {
  SignUpPage.selectMemberWeightImportance(weight);
  SignUpPage.wait(2);
});

When(/^I select (.+) importance of member size$/, (size) => {
  SignUpPage.selectMemberSizeImportance(size);
  SignUpPage.wait(2);
});

When(/^I select (.+) importance of member appearance$/, (appearance) => {
  SignUpPage.selectMemberAppearanceImportance(appearance);
  SignUpPage.wait(2);
});

When(/^I select (.+) as my dressing style$/, (dressing) => {
  SignUpPage.selectDressingStyle(dressing);
  SignUpPage.wait(2);
});

When(/^I select (.+) importance of member dressing style$/, (dressing) => {
  SignUpPage.selectMemberDressingImportance(dressing);
  SignUpPage.wait(2);
});

When(/^I select my degree as (.+)$/, (degree) => {
  SignUpPage.selectDegree(degree);
  SignUpPage.wait(2);
});

When(/^I enter my graduate school (.+)$/, (school) => {
  SignUpPage.enterSchoolName(school);
  SignUpPage.wait(2);
});

When(/^I select (.+) for my current is_schooling$/, (isSchooling) => {
  SignUpPage.selectIsSchooling(isSchooling);
  SignUpPage.wait(2);
});

When(/^I select (.+) as my current study$/, (currentStudy) => {
  SignUpPage.selectSchoolingFor(currentStudy);
  SignUpPage.wait(2);
});

When(/^I select (.+) importance of member degree$/, (degree) => {
  SignUpPage.selectMemberDegreeImportance(degree);
  SignUpPage.wait(2);
});

When(/^I select (.+) for member degree preference$/, (preference) => {
  SignUpPage.selectMemberPreferredDegreeImportance(preference);
  SignUpPage.wait(2);
});

When(/^I select (.+) for my smoking$/, (isSmoke) => {
  SignUpPage.selectIsSmoking(isSmoke);
  SignUpPage.wait(2);
});

When(/^I select (.+) importance of member smoking$/, (isSmoke) => {
  SignUpPage.selectIsMemberSmoking(isSmoke);
  SignUpPage.wait(2);
});

When(/^I select (.+) as my alcohol consumption$/, (isDrink) => {
  SignUpPage.selectIsDrinking(isDrink);
  SignUpPage.wait(2);
});

When(/^I select (.+) importance of member drinking$/, (isDrink) => {
  SignUpPage.selectIsMemberDrinking(isDrink);
  SignUpPage.wait(2);
});

When(/^I select with whom I live with (.+)$/, (liveWith) => {
  SignUpPage.selectILiveWith(liveWith);
  SignUpPage.wait(2);
});

When(/^I select (.+) for if I have my house$/, (hasHouse) => {
  SignUpPage.selectHasOwnHouse(hasHouse);
  SignUpPage.wait(2);
});

When(/^I select I work as (.+)$/, (workType) => {
  SignUpPage.selectWorkType(workType);
  SignUpPage.wait(2);
});

When(/^I select my work position as (.+)$/, (position) => {
  SignUpPage.selectWorkPosition(position);
  SignUpPage.wait(2);
});

When(/^I select I know (.+) as well as other language$/, (language) => {
  SignUpPage.selectLanguge(language);
  SignUpPage.wait(2);
});

When(/^I select (.+) as Other thing I like$/, (aboutMe) => {
  SignUpPage.selectAboutMe(aboutMe);
  SignUpPage.wait(2);
});

When(/^I select (.+) as thing that describe me$/, (describeMe) => {
  SignUpPage.selectDescribeMe(describeMe);
  SignUpPage.wait(2);
});

When(/^I select (.+) as my hobbies$/, (hobby) => {
  SignUpPage.selectHobby(hobby);
  SignUpPage.wait(2);
});

When(/^I enter (.+) as my dream person$/, (about) => {
  SignUpPage.enterAboutDreamPerson(about);
  SignUpPage.wait(2);
});

When(/^I enter (.+) as about myself and life$/, (about) => {
  SignUpPage.enterAboutSelf(about);
  SignUpPage.wait(2);
});

When(/^I upload my picture (.+)$/, (photo) => {
  if (photo.toLowerCase() === 'later') SignUpPage.uploadPictureLater(photo);
  else SignUpPage.uploadPicture(photo);
});

Then(/^I succesfully completed the registration$/, () => {
  SignUpPage.wait(5);
  expect(browser.$('a img[src*="home-icon"]')).toBeDisplayed();
});
