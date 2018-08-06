var getApiResponse = require('./getApiResponse')
var searchVideo = require('./searchVideo')


searchChannel = (params, callback) => {
    global.part = 'snippet';
    //WIll be improved further
    /* if (params) {
        global.id = params.id;

    }
    global.getApiRespone("channels", {
        id: global.id,
        part: global.part,
        key: global.key
     }, callback)*/
    searchVideo({
        params
    }, response => {
        var items = response.data.items;
        items.forEach(element => {
            var channelId = element.snippet.channelId;
            getApiResponse("channels", {
                id: channelId,
                part: global.part,
                key: global.key
            }, response => {
                if (callback) callback(response.data.items)

            })

        });

    });
}

module.exports = searchChannel