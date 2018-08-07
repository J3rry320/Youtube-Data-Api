var queryFunction = require('../features/searchChannel')
var init = require("../index");
var newSerach = new queryFunction({
        key: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
        maxResponse: 4,
        query: "blasterjaxx",

    }, response => {
        console.log(response)
    }

);


newSerach.searchResponse()