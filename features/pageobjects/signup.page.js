const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
  /**
   * define selectors using getter methods
   */
  get checkGender() {
    return $$('[class*="my_gender"] div[class*="male"]');
  }
  get checkLookingFor() {
    return $$('[class*="i_am_looking_for"] div[class*="male"]');
  }
  get inputEmail() {
    return $('[name="email"]');
  }
  get btnSubmit() {
    const elem = $('[class="register_button"]');
    return elem;
  }
  get btnUploadLater() {
    const elem = $('[id="registration_next_button"]');
    return elem;
  }
  get inputName() {
    const elem = $('[name="name"]');
    this.waitUntilElementIsClickable(elem);
    return elem;
  }
  get schoolName() {
    const elem = $('[name="last_school_name"]');
    return elem;
  }
  get btnNext() {
    const elem = $('[id="registration_next_button"]');
    this.waitUntilElementIsClickable(elem);
    return elem;
  }
  get buttonGenders() {
    this.wait(2);
    const elem = $$('div[class*="gender_button"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get inputEmailAddress() {
    const elem = $('[name="email_or_phone_number"]');
    return elem;
  }
  get inputPassword() {
    const elem = $('[name="password"]');
    return elem;
  }
  get selectDay() {
    const elem = $('[id="input_birthday_day"]');
    return elem;
  }
  get selectMonth() {
    const elem = $('[id="input_birthday_month"]');
    return elem;
  }
  get selectYear() {
    const elem = $('[id="input_birthday_year"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get selectionCountry() {
    const elem = $('[id="input_country_id"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get selectionDistrict() {
    const elem = $('[id="input_district_id"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get selectionCity() {
    const elem = $('[id="input_city_id"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get radioProximityChoice() {
    const elem = $$(
      '[id="input_proximitychoice"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get radioMonthlyIncome() {
    const elem = $$('[id="input_income"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get checkboxKeepIncomeSecret() {
    const elem = $('[id*="input_hide"]  [class*="checkbox_text"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get radioMemberFinanceImportance() {
    const elem = $$(
      '[id="input_incomeimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get radioMaritalStatus() {
    const elem = $$('[id="input_maritalstatus"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get selectionOccupation() {
    const elem = $('[id = "input_occupation_id"]');
    this.waitUntilElementIsClickable(elem);
    return elem;
  }
  get inputOccupationDetails() {
    const elem = $('[name = "occupation_detail"]');
    this.waitUntilElementIsClickable(elem);
    return elem;
  }
  get radioMyChildren() {
    const elem = $$('[id="input_havechildren"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get radioChildrenCount() {
    const elem = $$(
      '[id="input_numberofchildren"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get radioChildrenLivingTogether() {
    const elem = $$(
      '[id="input_livewithchildren"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get radioAcceptMemberWithChildren() {
    const elem = $$(
      '[id="input_accepthavechildren"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get radioAcceptMemberLiveWithChildren() {
    const elem = $$(
      '[id="input_acceptlivewithchildren"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radionWantChildren() {
    const elem = $$('[id="input_wantchildren"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioProfilePrivacy() {
    const elem = $$(
      '[id="input_profile_privacy"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get checkboxAcceptAgreement() {
    const elem = $('[id="input_agreetoterms"]  [class*="checkbox_text"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get checkboxGetPromotionalEmail() {
    const elem = $(
      '[id="input_agreetomarketingemails"]  [class*="checkbox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get selectionHeight() {
    const elem = $('[id = "input_height"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get selectionWeight() {
    const elem = $('[id = "input_weight"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get radioSelectEyeColor() {
    const elem = $$('[id="input_eyecolor"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectHairColor() {
    const elem = $$('[id="input_haircolor"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectPhysiques() {
    const elem = $$(
      '[id="input_weightdescription"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectWeightImportance() {
    const elem = $$(
      '[id="input_weightimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectHeightImportance() {
    const elem = $$(
      '[id="input_heightimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectAppearanceImportance() {
    const elem = $$(
      '[id="input_appearanceimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectMemberDressingImportance() {
    const elem = $$(
      '[id="input_styleimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioDressingStyle() {
    const elem = $$('[id="input_style"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioDegree() {
    const elem = $$('[id="input_educationlevel"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSchooling() {
    const elem = $$(
      '[id="input_currently_studying"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioCurrentSchool() {
    const elem = $$(
      '[id="input_current_education_state"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectDegreeImportance() {
    const elem = $$(
      '[id="input_educationimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectPreferredDegreeImportance() {
    const elem = $$(
      '[id="input_minimum_education_requirement"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectYourSmoke() {
    const elem = $$('[id="input_smoker"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectMemberSmoke() {
    const elem = $$(
      '[id="input_smokerimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectYouDrinking() {
    const elem = $$('[id="input_alcohol"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectMemberDrinking() {
    const elem = $$(
      '[id="input_alcoholimportance"]  div[class*="radiobox_text"]',
    );
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectILiveWith() {
    const elem = $$('[id="input_liveswith"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get radioSelectHasOwnHouse() {
    const elem = $$('[id="input_own_house"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectWorkType() {
    const elem = $$('[id="input_work_status"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get radioSelectWorkPosition() {
    const elem = $$('[id="input_work_position"]  div[class*="radiobox_text"]');
    this.waitUntilElementIsDisplayed(elem[0]);
    return elem;
  }
  get checkboxLanguages() {
    const elem = $$('[id="input_languages"]  [class*="checkbox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get checkboxDetailsAboutMe() {
    const elem = $$('[id="input_character_general"]  [class*="checkbox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get checkboxDetailsDescribeMe() {
    const elem = $$('[id="input_life_types"]  [class*="checkbox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get checkboxHobbies() {
    const elem = $$('[id="input_hobbies"]  [class*="checkbox_text"]');
    this.waitUntilElementIsClickable(elem[0]);
    return elem;
  }
  get inputLookingFor() {
    const elem = $('[name="lookingfor"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  get inputAboutYourSelf() {
    const elem = $('[name="aboutyourself"]');
    this.waitUntilElementIsDisplayed(elem);
    return elem;
  }
  /**
   * methods to encapsule automation code to interact with the page
   * e.g. to selecting an option or entering the text in the text field
   */

  selectGender(gender) {
    gender === 'Erkek'
      ? this.checkGender[0].click()
      : this.checkGender[1].click();
  }

  selectLookingFor(lookingFor) {
    lookingFor === 'Erkek'
      ? this.checkLookingFor[0].click()
      : this.checkLookingFor[1].click();
  }

  enterEmail(email) {
    this.inputEmail.setValue(email);
  }

  submit() {
    this.btnSubmit.click();
  }

  uploadPictureLater() {
    this.btnUploadLater.click();
  }

  uploadPicture(photo) {
    browser.chooseFile(
      '#reg_photo_upload_button',
      'https://i.imgur.com/TaZ5SZY.jpeg',
    );
  }

  clickNext() {
    this.btnNext.click();
  }

  enterName(name) {
    this.inputName.setValue(name);
  }

  enterSchoolName(school) {
    this.schoolName.setValue(school);
  }

  enterEmailAddress(email) {
    this.inputEmailAddress.setValue(email);
  }

  enterPassword(password) {
    this.inputPassword.setValue(password);
  }

  enterAboutDreamPerson(about) {
    this.inputLookingFor.setValue(about);
  }

  enterAboutSelf(about) {
    this.inputAboutYourSelf.setValue(about);
  }

  selectMyGender(gender) {
    gender === 'Erkek'
      ? this.buttonGenders[0].click()
      : this.buttonGenders[1].click();
  }

  selectDate(date) {
    this.selectDay.click();
    this.selectDay.selectByVisibleText(date.split('/')[0]);
    this.selectMonth.click();
    this.selectMonth.selectByVisibleText(date.split('/')[1]);
    this.selectYear.click();
    this.selectYear.selectByVisibleText(date.split('/')[2]);
  }

  selectCountry(country) {
    this.selectionCountry.click();
    this.selectionCountry.selectByVisibleText(country);
  }

  selectCity(city) {
    this.selectionCity.click();
    this.selectionCity.selectByVisibleText(city);
  }

  selectDistrict(district) {
    this.selectionDistrict.click();
    this.selectionDistrict.selectByVisibleText(district);
  }

  selectOccupation(occupation) {
    this.selectionOccupation.click();
    this.selectionOccupation.selectByVisibleText(occupation);
  }

  selectHeight(height) {
    this.selectionHeight.click();
    this.selectionHeight.selectByVisibleText(height);
  }

  selectWeight(weight) {
    this.selectionWeight.click();
    this.selectionWeight.selectByVisibleText(weight);
  }

  selectProximateArea(location) {
    let isNotSelected = true;
    this.radioProximityChoice.every((selection) => {
      if (selection.getText().toLowerCase() === location.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  importanceOfMemberIncome(isFinanceImportant) {
    let isNotSelected = true;
    this.radioMemberFinanceImportance.every((selection) => {
      if (
        selection.getText().toLowerCase() === isFinanceImportant.toLowerCase()
      ) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectIncome(income) {
    let isNotSelected = true;
    this.radioMonthlyIncome.every((selection) => {
      if (selection.getText().toLowerCase() === income.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectMaritalStatus(status) {
    let isNotSelected = true;
    this.radioMaritalStatus.every((selection) => {
      if (selection.getText().toLowerCase() === status.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectChildrenStatus(hasChildren) {
    let isNotSelected = true;
    this.radioMyChildren.every((selection) => {
      if (selection.getText().toLowerCase() === hasChildren.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectChildren(children) {
    let isNotSelected = true;
    this.radioChildrenCount.every((selection) => {
      if (selection.getText().toLowerCase() === children.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectChildrenLiving(isWithYou) {
    let isNotSelected = true;
    this.radioChildrenLivingTogether.every((selection) => {
      if (selection.getText().toLowerCase() === isWithYou.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  acceptMemberWithChild(hasChildren) {
    let isNotSelected = true;
    this.radioAcceptMemberWithChildren.every((selection) => {
      if (selection.getText().toLowerCase() === hasChildren.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  acceptMemberLivingWithChild(hasChildren) {
    let isNotSelected = true;
    this.radioAcceptMemberLiveWithChildren.every((selection) => {
      if (selection.getText().toLowerCase() === hasChildren.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  ifWantChildren(wantChildren) {
    let isNotSelected = true;
    this.radionWantChildren.every((selection) => {
      if (selection.getText().toLowerCase() === wantChildren.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  isProfilePrivate(privacy) {
    let isNotSelected = true;
    this.radioProfilePrivacy.every((selection) => {
      if (selection.getText().toLowerCase() === privacy.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  ifWantChildren(wantChildren) {
    let isNotSelected = true;
    this.radionWantChildren.every((selection) => {
      if (selection.getText().toLowerCase() === wantChildren.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  keepIncomeSecret(isSecret) {
    if (isSecret.toLowerCase() === 'yes')
      if (!this.checkboxKeepIncomeSecret.isSelected())
        this.checkboxKeepIncomeSecret.click();
    if (isSecret.toLowerCase() === 'no')
      if (this.checkboxKeepIncomeSecret.isSelected())
        this.checkboxKeepIncomeSecret.click();
  }

  acceptAgreement(acceptAgreement) {
    if (acceptAgreement.toLowerCase() === 'yes')
      this.checkboxAcceptAgreement.click();
  }

  receivePrmo(isReceivePromoMail) {
    if (isReceivePromoMail.toLowerCase() === 'yes')
      this.checkboxGetPromotionalEmail.click();
  }

  enterDetails(comment) {
    this.inputOccupationDetails.setValue(comment);
  }

  selecteyeColor(eyeColor) {
    let isNotSelected = true;
    this.radioSelectEyeColor.every((selection) => {
      if (selection.getText().toLowerCase() === eyeColor.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectHairColor(hairColor) {
    let isNotSelected = true;
    this.radioSelectHairColor.every((selection) => {
      if (selection.getText().toLowerCase() === hairColor.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectPhysique(physique) {
    let isNotSelected = true;
    this.radioSelectPhysiques.every((selection) => {
      if (selection.getText().toLowerCase() === physique.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectMemberWeightImportance(weight) {
    let isNotSelected = true;
    this.radioSelectWeightImportance.every((selection) => {
      if (selection.getText().toLowerCase() === weight.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectMemberSizeImportance(size) {
    let isNotSelected = true;
    this.radioSelectHeightImportance.every((selection) => {
      if (selection.getText().toLowerCase() === size.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectMemberAppearanceImportance(appearance) {
    let isNotSelected = true;
    this.radioSelectAppearanceImportance.every((selection) => {
      if (selection.getText().toLowerCase() === appearance.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectDressingStyle(dressing) {
    let isNotSelected = true;
    this.radioDressingStyle.every((selection) => {
      if (selection.getText().toLowerCase() === dressing.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectMemberDressingImportance(dressing) {
    let isNotSelected = true;
    this.radioSelectMemberDressingImportance.every((selection) => {
      if (selection.getText().toLowerCase() === dressing.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectDegree(degree) {
    let isNotSelected = true;
    this.radioDegree.every((selection) => {
      if (selection.getText().toLowerCase() === degree.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectIsSchooling(isSchooling) {
    let isNotSelected = true;
    this.radioSchooling.every((selection) => {
      if (selection.getText().toLowerCase() === isSchooling.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectSchoolingFor(schooling) {
    let isNotSelected = true;
    this.radioCurrentSchool.every((selection) => {
      if (selection.getText().toLowerCase() === schooling.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectMemberDegreeImportance(degree) {
    let isNotSelected = true;
    this.radioSelectDegreeImportance.every((selection) => {
      if (selection.getText().toLowerCase() === degree.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectMemberPreferredDegreeImportance(degree) {
    let isNotSelected = true;
    this.radioSelectPreferredDegreeImportance.every((selection) => {
      if (selection.getText().toLowerCase() === degree.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectIsSmoking(isSmoke) {
    let isNotSelected = true;
    this.radioSelectYourSmoke.every((selection) => {
      if (selection.getText().toLowerCase() === isSmoke.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectIsMemberSmoking(isSmoke) {
    let isNotSelected = true;
    this.radioSelectMemberSmoke.every((selection) => {
      if (selection.getText().toLowerCase() === isSmoke.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectIsDrinking(isDrink) {
    let isNotSelected = true;
    this.radioSelectYouDrinking.every((selection) => {
      if (selection.getText().toLowerCase() === isDrink.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectIsMemberDrinking(isDrink) {
    let isNotSelected = true;
    this.radioSelectMemberDrinking.every((selection) => {
      if (selection.getText().toLowerCase() === isDrink.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectILiveWith(liveWith) {
    let isNotSelected = true;
    this.radioSelectILiveWith.every((selection) => {
      if (selection.getText().toLowerCase() === liveWith.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectHasOwnHouse(ownHouse) {
    let isNotSelected = true;
    this.radioSelectHasOwnHouse.every((selection) => {
      if (selection.getText().toLowerCase() === ownHouse.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectWorkType(workType) {
    let isNotSelected = true;
    this.radioSelectWorkType.every((selection) => {
      if (selection.getText().toLowerCase() === workType.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectWorkPosition(position) {
    let isNotSelected = true;
    this.radioSelectWorkPosition.every((selection) => {
      if (selection.getText().toLowerCase() === position.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectLanguge(language) {
    let isNotSelected = true;
    this.checkboxLanguages.every((selection) => {
      if (selection.getText().toLowerCase() === language.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectAboutMe(aboutMe) {
    let isNotSelected = true;
    this.checkboxDetailsAboutMe.every((selection) => {
      if (selection.getText().toLowerCase() === aboutMe.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectDescribeMe(describeMe) {
    let isNotSelected = true;
    this.checkboxDetailsDescribeMe.every((selection) => {
      if (selection.getText().toLowerCase() === describeMe.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  selectHobby(myHobby) {
    let isNotSelected = true;
    this.checkboxHobbies.every((selection) => {
      if (selection.getText().toLowerCase() === myHobby.toLowerCase()) {
        selection.click();
        isNotSelected = false;
      }
      return isNotSelected;
    });
  }

  /**
   * wait methods for the different element states
   */

  waitUntilElementIsDisplayed(element, timeout = 30000) {
    browser.waitUntil(() => element.isDisplayed() === true, {
      timeout: timeout,
      timeoutMsg: `${element} element is not displayed`,
      interval: 2000,
    });
  }

  waitUntilElementIsClickable(element, timeout = 30000) {
    browser.waitUntil(() => element.isClickable() === true, {
      timeout: timeout,
      timeoutMsg: `${element} element is not clickable`,
      interval: 2000,
    });
  }

  wait(seconds) {
    browser.pause(seconds * 1000);
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open('');
  }
}

module.exports = new SignUpPage();
