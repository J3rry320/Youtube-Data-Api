var getApiResponse = require('./getApiResponse');

class searchVideo extends getApiResponse {
    constructor(params, callback) {

        super("search", {
            key: params.key,
            q: params.query,
            maxResults: params.maxResponse

        }, callback);

    }

    setParameters() {

        const type = {
            part: "snippet",
            type: "video"
        }
        return {

            ...this.searchParameters,
            ...type
        }
    }

}


module.exports = searchVideo;