var axios = require("axios");
const rootUrl = "https://www.googleapis.com/youtube/v3/";

const queryFunction = function (params) {

    this.key = params.APIKey;
    this.part = null;
    this.type = null;
    this.q = null;
    this.maxResults = null;
    this.id = null;
    this.regionCode = null;
}
queryFunction.prototype = {
    getApiRespone(kind, params, callback) {
        if (!this.key) {
            throw new Error("No Key Provided! Provide an API key to make the function work")
        }
        if (params === undefined) {
            throw new Error("Pass the parameters to the given method")
        }
        if (params) {
            console.log(params)
        }

        return axios.get(rootUrl + kind, {
            params: params
        }).then(
            function (response) {
                if (callback) {
                    callback(response)
                }
            }
        ).catch(function (error) {
            console.log(error)
        })

    },
    searchVideo(params, callback) {
        this.part = "snippet";
        this.type = "video";
        if (params) {
            this.q = params.query;
            this.maxResults = params.maxResults;
        }
        if (params === undefined) {
            throw new Error("Pass the parameters to the query method");
        }

        this.getApiRespone("search", {
            part: 'snippet',
            key: this.key,
            q: this.q,
            type: this.type,

            maxResults: this.maxResults
        }, callback)
    },
    commentThreads(){
        this.getApiRespone("commentThreads",{
            part: 'snippet,replies',
                 videoId: 'GBUCmMxmup0',
                 key:this.key
        },response=>{
            console.log(response.data.items)
        })
    },
    searchVideoCategories(params, callback) {
        this.part = "snippet"
        if (params) {
            this.regionCode = params.regionCode;
        }
        this.getApiRespone("videoCategories", {
            part: this.part,
            regionCode: this.regionCode,
            key:this.key

        }, callback)
    },

    searchChannel(params, callback) {
        this.part = 'snippet';

        if (params) {
            this.id = params.id;

        }
        this.getApiRespone("channels", {
            id: this.id,
            part: this.part,
            key:this.key
        }, callback)
        /* this.searchVideo(
                params, response => {
                    var items = response.data.items;
                    items.forEach(element => {
                        var channelId = element.snippet.channelId;
                        // this.getApiRespone("channels",{id:[channelId]},callback)

                    });

                });*/
    }
}





var newSerach = new queryFunction({
    APIKey: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
});


newSerach.searchChannel({
    id:"UCZyXa4H06Ws3Pwom9cYEdDA"

}, response => {
    console.log(response.data.items)
})

/*newSerach.searchVideo({
    query: "BassJackers",
    maxResults: 1
}, response => {
    console.log(response.data.items);

})
newSerach.searchVideoCategories({regionCode:"IN"},response=>{
    console.log(response.data.items);
})
newSerach.commentThreads()*/
module.exports = queryFunction

//queryFunction.search(respone=>{console.log(respone)})