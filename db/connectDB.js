const axios = require('axios');
const start = async()=>{
    try {
        return  axios.get('https://t.co/2mxscUsnN8')
    } catch (error) {
        console.error(error)
    }
}
module.exports = start