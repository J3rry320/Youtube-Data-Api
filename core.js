var init = require('./config/init')
var features = {
    getApiResponse: require('./features/getApiResponse'),
    searchVideo: require('./features/searchVideo'),
    commentThreads: require('./features/commentThreads'),
    searchVideoCategories: require('./features/searchVideoCategories'),
    searchChannel: require('./features/searchChannel')
}

init.prototype = features

module.exports = init