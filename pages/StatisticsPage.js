var StatisticsPage = function () {
    const PAGE_URL = "https://dash-demo-2.adjust.com/#/statistics/overview/default/69nsstype5uv";

    this.get = function () {
        browser.get(PAGE_URL);
    };


    this.sortByColumn = function (columnName) {
        var column = element(by.xpath(`//sort[@column='${columnName.toLowerCase()}']/parent::div`));
        column.click();
    };


    this.getColumnData = function (columnName) {
        return this.getColumnId(columnName).then((columnId) => {
            let locator = `div[table=\"vm.registerRebuild(cb, 'main')\"] div[class='tr tr-body'] .td:nth-child(${columnId})`;
            return element.all(by.css(locator))
                .map((element) => {
                    return element.getText().then((textValue) => {
                        let value = parseInt(textValue.replace(/,/g, ''));
                        return value;
                    });
                }).then((arr) => {
                    return arr
                });
        })
    };

    this.getColumnId = function (columnName) {
        let foundIndex;
        return element.all(by.css("div.th:not(.hide)")).each((element, index) => {
            return element.getAttribute('title').then((title) => {
                if (title === columnName) {
                    foundIndex = index;
                }
            })
        }).then(() => {
            return foundIndex;
        });

    }


};

module.exports = new StatisticsPage();