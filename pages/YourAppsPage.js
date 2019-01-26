var YourAppsPage = function () {
    var heading = element(by.css("div[ng-if='vm.heading']"))


    this.getHeadingText = function () {
        return heading.getText();
    }
}

module.exports = new YourAppsPage();