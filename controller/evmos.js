const axios = require('axios').default;
// const start = require('../db/connectDB')

const getValue = async (req,res)=>{
    // const walletId = req.params
    try {
        const db = await axios.get('https://airdrop.evmos.domains/airdrop1.json')
        if(!db){
            res.send('empty')
        }
        res.status(200).json({db})

    } catch (error) {
        res.status(404).json({msg : error})
    }
}

module.exports = getValue;