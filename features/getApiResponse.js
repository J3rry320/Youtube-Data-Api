var axios = require("axios");
const rootUrl = "https://www.googleapis.com/youtube/v3/";
const initConfig=require("../config/init");
class getApiResponse {
    //Init the class
    constructor(kind, params, callback) {
        this.kind = kind;
        this.searchParameters = params;
        this.callback = callback;

    }






    //Validate the class
    validate() {
        if (!this.searchParameters) throw new Error("No parameters provided");
        if (!this.searchParameters.key) throw new Error("No Key Provided! Provide an API key");
    }
    setParameters(parameters) {
        var type = {

            part: parameters.part || null,
            type: parameters.type || null
        }


    }
    //request the class for data
    request() {

        let callback = this.callback;
        axios.get(rootUrl + this.kind, {
            params: this.setParameters(),

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

}
module.exports = getApiResponse;