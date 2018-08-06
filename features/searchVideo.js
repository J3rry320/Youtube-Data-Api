var getApiResponse = require('./getApiResponse')


searchVideo = (params, callback) => {
    this.part = "snippet";
    this.type = "video";
    if (params) {
        this.q = params.query;
        this.maxResults = params.maxResults;
    }
    if (params === undefined) {
        throw new Error("Pass the parameters to the query method");
    }

    getApiResponse("search", {
        part: 'snippet',
        key: this.key,
        q: this.q,
        type: this.type,

        maxResults: this.maxResults
    }, callback)
}

module.export = searchVideo