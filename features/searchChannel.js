var getApiResponse = require('./getApiResponse')
var searchVideo = require('./searchVideo')


searchChannel = (params, callback) => {
    this.part = 'snippet';
    //WIll be improved further
    /* if (params) {
        this.id = params.id;

    }
    this.getApiRespone("channels", {
        id: this.id,
        part: this.part,
        key: this.key
     }, callback)*/
    searchVideo({
        params
    }, response => {
        var items = response.data.items;
        items.forEach(element => {
            var channelId = element.snippet.channelId;
            getApiResponse("channels", {
                id: channelId,
                part: this.part,
                key: this.key
            }, response => {
                if (callback) callback(response.data.items)

            })

        });

    });
}

module.exports = searchChannel