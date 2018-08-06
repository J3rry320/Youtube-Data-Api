var queryFunction = require('../index')

var newSerach = new queryFunction({
    APIKey: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
});


newSerach.searchChannel({
    query: "BlasterJaxx",
    maxResults: 10
}, response => {
    console.log(response)
})