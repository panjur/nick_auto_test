const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open();
});

When(/^I login with (.+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should text (.*)$/, (message) => {
    expect(browser.$("body")).toHaveTextContaining(message);
});

Then(/^I reload browser session/, () => {
    browser.reloadSession();
});
