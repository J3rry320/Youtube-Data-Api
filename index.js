var axios = require("axios");
const rootUrl = "https://www.googleapis.com/youtube/v3/";

const queryFunction = function (params) {
    this.part = 'snippet';
    this.type = 'video';

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
            throw new Error("Pass the parameters to the search method")
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
                  return  callback(response)
                }
            }
        ).catch(function (error) {
            console.log(error)
        })

    },
    searchVideo(params) {
        this.getApiRespone("search", params, response => {
            console.log(response.data.items)
        })
    },

    searchChannel() {
this.getApiRespone


    }
}


module.exports = queryFunction


var newSerach = new queryFunction({
    APIKey: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",


});

newSerach.searchVideo({
    query: "Nucleya",
    maxResults: 20
})

//queryFunction.search(respone=>{console.log(respone)})