const rootUrl = "https://www.googleapis.com/youtube/v3/";
var axios = require("axios");

getApiResponse = (kind, params, callback) => {
    if (!global.key) {
        throw new Error("No Key Provided! Provide an API key to make the function work")
    }
    if (params === undefined) {
        throw new Error("Pass the parameters to the given method")
    }

    axios.get(rootUrl + kind, {
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
}

module.exports = getApiResponse

