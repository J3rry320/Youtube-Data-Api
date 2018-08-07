var init = require('./config/init')
var features = {

    searchVideo: require('./features/searchVideo'),
    commentThreads: require('./features/commentThreads'),
    searchVideoCategories: require('./features/searchVideoCategories'),
    searchChannel: require('./features/searchChannel')
}

init.prototype = features

module.exports = init