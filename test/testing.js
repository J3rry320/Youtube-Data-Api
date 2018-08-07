var queryFunction = require('../features/searchVideo')

var newSerach = new queryFunction(
 {

        part: "snippet",
        maxResults: 4,
        q: "blasterjaxx",
        type: "video",
    },
    callback=(response)=>{
        console.log(response.data.items)
    }

);

newSerach.request()

console.log(newSerach)