exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/statistics.js'],

    jasmineNodeOpts: {
        showColors: true,
    },
    capabilities: {
        browserName: 'chrome'
    },
    params: {
        login: {
            email: '***',
            password: '***'
        }
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        global.EC = protractor.ExpectedConditions;
    }
};



