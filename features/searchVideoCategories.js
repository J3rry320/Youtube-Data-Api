var getApiResponse = require('./getApiResponse')

searchVideoCategories = (params, callback) => {
    global.part = "snippet"
    if (params) {
        global.regionCode = params.regionCode;
    }
    getApiResponse("videoCategories", {
        part: global.part,
        regionCode: global.regionCode,
        key: global.key

    }, callback)
}

module.exports = searchVideoCategories
