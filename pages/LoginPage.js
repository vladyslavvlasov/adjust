var LoginPage = function () {
    const PAGE_URL = "https://dash-demo-2.adjust.com/#/login";
    var emailField = element(by.model("vm.user.email"));
    var passwordField = element(by.model("vm.user.password"));
    var submitBtn = element(by.css("button[type='submit']"));
    var loadedPage = element(by.css(".main.loaded"));

    this.get = function () {
        browser.get(PAGE_URL);
        browser.wait(EC.presenceOf(loadedPage), 5000, "Page should be loaded within 5 seconds");
    };

    this.login = function (email, pass) {
        emailField.sendKeys(email);
        passwordField.sendKeys(pass);
        submitBtn.click();
    }

};

module.exports = new LoginPage();