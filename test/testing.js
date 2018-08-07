var queryFunction = require('../features/searchChannel');
var newQueryFunction=require("../features/searchVideo");
var init = require("../index");
var serach=new newQueryFunction(
    {
        key: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
        maxResponse: 4,
        query: "blasterjaxx",

    }, response => {
        console.log(response)
    }
)
serach.request()
//this Works


//tis Does Not
/*var newSerach = new queryFunction({
        key: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
        maxResponse: 4,
        query: "blasterjaxx",

    }, response => {
        console.log(response)
    }

);


newSerach.searchResponse()*/