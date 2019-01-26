var loginPage = require("../pages/LoginPage");
var yourAppsPage = require("../pages/YourAppsPage");
var statisticsPage = require("../pages/StatisticsPage");
var helper = require("../utils/Helper");
const YOUR_APPS_TITLE = "Your Apps";
const IMPRESSION_COLUMN = "Impressions";


describe("Adjust testing suite", function () {
    it("should go to statistics page and sort correctly", () => {
        loginPage.get();
        loginPage.login(browser.params.login.email, browser.params.login.password);
        expect(yourAppsPage.getHeadingText()).toEqual(YOUR_APPS_TITLE);
        statisticsPage.get();
        statisticsPage.sortByColumn(IMPRESSION_COLUMN);
        statisticsPage.getColumnData(IMPRESSION_COLUMN).then((data) => {
            expect(helper.isSortedBy(data, true)).toBe(true);
        });
        statisticsPage.sortByColumn(IMPRESSION_COLUMN);
        statisticsPage.getColumnData(IMPRESSION_COLUMN).then((data) => {
            expect(helper.isSortedBy(data, false)).toBe(true);
        });
    })
});