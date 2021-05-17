const express = require('express')
const app = express()
const products =require('./data/products')
app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/products', (req, res) => {
    res.json(products)
})
app.listen(5000,console.log('Server running on port 5000'))