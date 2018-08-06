var axios = require("axios");
var searchUrl = "https://www.googleapis.com/youtube/v3/search";
const queryFunction = function (params) {
    this.part = 'snippet';
    this.type = 'video';

    this.key = params.APIKey;

    this.q = " ";
    this.maxResults = 10;

    console.log(this)



}
queryFunction.prototype = {
    search(params, callback) {
        if (!this.key) {
            throw new Error("No Key Provided! Provide an API key to make the function work")
        }
        if (params) {
            this.q = params.query;
            this.maxResults = params.maxResults;
        }
        if (params === undefined) {
            throw new Error("Pass the parameters to the search method")
        }
        axios.get(searchUrl, {
            params: {
                q: this.q,
                key: this.key,
                part: this.part,
                type: this.type,
                maxResults: this.maxResults,

            }
        }).then(
            function (response) {
                if (callback) {
                    callback(response.data.items)
                }
            }
        ).catch(function (error) {
            console.log(error)
        })

    },

    comments() {


    }
}


module.exports = queryFunction


var newSerach = new queryFunction({
    APIKey: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",


});
newSerach.search({
    query: "Nucleya",
    maxResults: 20
}, function (response) {
    console.log(response)

})

//queryFunction.search(respone=>{console.log(respone)})