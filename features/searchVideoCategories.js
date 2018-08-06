var getApiResponse = require('./getApiResponse')

searchVideoCategories = (params, callback) => {
    this.part = "snippet"
    if (params) {
        this.regionCode = params.regionCode;
    }
    getApiResponse("videoCategories", {
        part: this.part,
        regionCode: this.regionCode,
        key: this.key

    }, callback)
}

module.exports = searchVideoCategories
