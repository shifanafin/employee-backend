
const express = require("express")
const bodyParser = require("body-parser")
// const boxStore = require('./atlas')
const mongoUser=require('./mongoose')
const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')  
    next();
  });

// app.post('/products',boxStore.createProduct);
// app.get('/products',boxStore.getProduct);
app.post('/User',mongoUser.createUser)
app.get('/User',mongoUser.getUser);
app.listen(3005)