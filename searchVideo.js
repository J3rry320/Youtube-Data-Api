var axios = require("axios");
var searchUrl = "https://www.googleapis.com/youtube/v3/search";
const searchVideos = (options, callback) => {
    if (!options.APIKey) {
        throw new Error("Add Your API Key To Move Forward")
    }
    var params = {
        part: 'snippet',
        key: options.APIKey,
        q: options.query,
        type: 'video',

        maxResults: options.maxResults
    };
    axios.get(searchUrl, {
        params: params
    }).then(
        function (response) {
            if (callback) {
                callback(response.data.items)
            }
        }
    ).catch(function (error) {
        console.log(error)
    })
   
}
module.exports = searchVideos