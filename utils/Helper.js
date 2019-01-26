var Helper = function () {
    this.isSortedBy = function (data, isDescending) {
        if (data.length <= 0 || !Array.isArray(data)) {
            return false;
        }
        if (isDescending) {
            for (let i = 0; i < data.length - 2; i++) {
                if (data[i] < data[i + 1]) {
                    return false;
                }
            }
        } else {
            for (let i = 0; i < data.length - 2; i++) {
                if (data[i] > data[i + 1]) {
                    return false;
                }
            }
        }
        return true;
    }
};

module.exports = new Helper();