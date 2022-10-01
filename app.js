const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const router = require('./route/evmos');
// const {start: db} = require('./db/connectDB')

const port = 3321;

app.use(express.static('./public'));
app.use(express.json())
app.use(urlencoded({extended: false}));

app.use('/evmosname/api/v1',router)

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})