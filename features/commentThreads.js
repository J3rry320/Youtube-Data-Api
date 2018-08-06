var getApiResponse = require('./getApiResponse')

commentThreads = (params, callback) => {
    this.part = "snippet,replies"
    getApiResponse("commentThreads", {
        part: this.part,
        videoId: params.videoId,
        key: this.key
    }, callback)
}

module.exports = commentThreads