var getApiResponse = require('./getApiResponse')

commentThreads = (params, callback) => {
    global.part = "snippet,replies"
    getApiResponse("commentThreads", {
        part: global.part,
        videoId: params.videoId,
        key: global.key
    }, callback)
}

module.exports = commentThreads