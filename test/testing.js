var queryFunction = require('../features/searchVideo')
var init=require("../index");
var newSerach = new queryFunction({
        key: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
        maxResponse: 4,
        query: "blasterjaxx",

    },
    callback = (response) => {
        console.log(response.data.items)
    }

);


newSerach.request()

