module.exports = function (params) {
    global.key = params.APIKey;
    global.part = params.part;
    global.type = params.type;
    global.q = params.q;
    global.maxResults = params.maxResults;
    global.id = params.id;
    global.regionCode = params.regionCode;
}