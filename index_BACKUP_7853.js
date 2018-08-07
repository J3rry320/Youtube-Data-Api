var features = {
    getApiResponse: require('./features/getApiResponse'),
    searchVideo: require('./features/searchVideo'),
    commentThreads: require('./features/commentThreads'),
    searchVideoCategories: require('./features/searchVideoCategories'),
    searchChannel: require('./features/searchChannel')
}

var init = require('./config/init')

const queryFunction = init.prototype = features
init({
    APIKey:"AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
    q:"BlasterJaxx"
})
console.log(init.q)
/*queryFunction.searchVideo("search",{query:"Blasterjaxx",maxResults:10},response=>{
    console.log(response)
})
module.exports = queryFunction*/
