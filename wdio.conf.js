exports.config = {
  runner: 'local',
  // hostname: process.env.HUB_HOST || 'localhost',
  // port: 4444,
  path: '/wd/hub',
  specs: ['./features/**/*.feature'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      //
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        excludeSwitches: ['enable-automation'],
        mobileEmulation: { deviceName: 'iPhone X' },
        args: ['disable-blink-features=AutomationControlled'],
      },
    },
  ],
  logLevel: 'warn',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  waitforTimeout: 5000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ['./features/step-definitions/steps.js'],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },
  afterStep: function (step, scenario, result) {
    const path = require('path');
    if (result.passed) {
      return;
    }
    const screenshotFileName = encodeURIComponent(
      `${scenario.name.replace(/\s+/g, '-')}`,
    ).replace(/%../, '.');
    const filePath = path.resolve(
      path.join(process.cwd(), 'screenshots'),
      `${screenshotFileName}.png`,
    );

    browser.saveScreenshot(filePath);
  },
};
