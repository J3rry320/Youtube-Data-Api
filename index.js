var axios = require("axios");
var searchUrl = "https://www.googleapis.com/youtube/v3/search";
const queryFunction = function (params) {
     const part= 'snippet';
    const type= 'video'
    
    this.key = params.APIKey;

    this.q = params.query;
    this.maxResults = params.maxResults;
    var params=new Object;
    params[q]=
    console.log("Hello")


}
queryFunction.prototype = {
    search: function (params, callback) {

        axios.get(searchUrl, {
            params: {
                
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

    comments() {}
}


module.exports = queryFunction


var newSerach = new queryFunction({
    APIKey: "AIzaSyASsTAnJAqiFiRTdC-TxjWQu6sjG0dwcZw",
    query: 'Nucleya',
    maxResults: 20
});
newSerach.search({
 
  
}, function (response) {
    console.log(response)
})
//queryFunction.search(respone=>{console.log(respone)})