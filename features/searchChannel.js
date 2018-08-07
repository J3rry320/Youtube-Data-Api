var getApiResponse = require('./getApiResponse')
var searchVideo = require('./searchVideo')
class SearchChannel extends getApiResponse {
    constructor(params, callback) {
        super("channels")
        this.kind = "channels";
        this.key = params.key;
        this.q = params.query;
        this.maxResults = params.maxResponse;
        this.searchCallback = () => {
            let search = new searchVideo({

            }, response => {

                response.forEach(element => {
                    var channelId = element.snippet.channelId;

                })
            }).request();
            return search
        }



    }
    searchResponse() {
        console.log(this.searchCallback())

    }
    setParameters() {
        const type = {
            part: "snippet"
        };
        return {
            ...this.searchParameters,
            ...type
        }
    }
    searchChannel(callback) {



        new searchVideo(this.searchParameters, response => {

            response.forEach(element => {
                var channelId = element.snippet.channelId;

                new getApiResponse("channels", {
                    id: channelId,
                    part: global.part,
                    key: global.key
                }, response => {
                    if (callback) callback(response)

                }).request().setParameters()

            });

        });
    }
}


searchChannelDeprecated = (params, callback) => {
    let search = new searchVideo({
        query: this.q,
        key: this.key,
        maxResponse: this.maxResults
    });
    let response = new getApiResponse()

search.request()


    //WIll be improved further
    /* if (params) {
        global.id = params.id;

    }
    global.getApiRespone("channels", {
        id: global.id,
        part: global.part,
        key: global.key
     }, callback)*/

}

module.exports = SearchChannel