const axios = require('axios');
let response;
const start = async(response)=>{
    try {
         response = await axios.get('https://t.co/2mxscUsnN8')
    } catch (error) {
        console.error(error)
    }
}
start(response)
console.log(response)