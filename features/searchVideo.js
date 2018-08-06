var getApiResponse = require('./getApiResponse')


searchVideo = (params, callback) => {
    global.part = "snippet";
    global.type = "video";
    if (params) {
        global.q = params.query;
        global.maxResults = params.maxResults;
    }
    if (params === undefined) {
        throw new Error("Pass the parameters to the query method");
    }

    getApiResponse("search", {
        part: 'snippet',
        key: global.key,
        q: global.q,
        type: global.type,

        maxResults: global.maxResults
    }, callback)
}

module.exports = searchVideo