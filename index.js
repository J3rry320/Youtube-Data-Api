var axios = require("axios");
const rootUrl = "https://www.googleapis.com/youtube/v3/";

const queryFunction = function (params) {
    this.part = '';
    this.type = '';

    this.key = params.APIKey;

    this.q = " ";
    this.maxResults = 10;

    console.log(this)



}
queryFunction.prototype = {
    getApiRespone(kind, params, callback) {
        if (!this.key) {
            throw new Error("No Key Provided! Provide an API key to make the function work")
        }
        if (params) {
            this.q = params.query;
            this.maxResults = params.maxResults;
        }
        if (params === undefined) {
            throw new Error("Pass the parameters to the given method")
        }
        axios.get(rootUrl + kind, {
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
                    return callback(response)
                }
                return response
            }
        ).catch(function (error) {
            console.log(error)
        })
return "Hello"
    },
    searchVideo(params, callback) {
        if (params === undefined) {
            throw new Error("Pass the parameters to the query method");
        }
        this.part = "snippet";
        this.type = "video";
        let value = this.getApiRespone("search", params, callback)
        console.log(value)
    },

    searchChannel() {
        this.part = "snippet";




    }
}





var newSerach = new queryFunction({
    APIKey: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",


});

newSerach.searchVideo({
    query: "Nucleya",
    maxResults: 2
}, response => {
    console.log(response.data.items);

})
module.exports = queryFunction

//queryFunction.search(respone=>{console.log(respone)})