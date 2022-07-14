const express = require('express');
const product = require('../04-store-api/final/models/product');
const app = express();
const {products }=require('./data')

app.use(express.static('./public'))



app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })



    res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
//    console.log(req);
    //    console.log(req.params)
    const { productID } = req.params
    const singleProduct = products.find((product) =>
        product.id == Number(productID))
    if (!singleProduct) {
        return res.status(404).send('product does not exist')
    }
    res.json(singleProduct)

})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {

    console.log(req.params)
    res.send('hello')

})

app.get('/api/v1/query', (req, res) => {
    //  console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
   if (limit) {
       sortedProducts = sortedProducts.slice(0, Number(limit))


   })
    red.status(200).json(sortedProducts)


  //  res.send('hello world')
})


app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


