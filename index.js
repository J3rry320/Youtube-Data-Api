var features = {
    getApiResponse: require('./features/getApiResponse'),
    searchVideo: require('./features/searchVideo'),
    commentThreads: require('./features/commentThreads'),
    searchVideoCategories: require('./features/searchVideoCategories'),
    searchChannel: require('./features/searchChannel')
}

var init = require('./config/init')

const queryFunction = init.prototype = features

module.exports = queryFunction