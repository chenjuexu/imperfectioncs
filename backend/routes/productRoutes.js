import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
import products from '../data/products.js'
const router = express.Router()
import Product from '../models/productModel.js'

router.get('/', asyncHandler (async(req, res) => {
    const products = await Product.find({})
   // res.status(401)
    //throw new Error('Not Authrized')
    res.json(products)
}))
router.get('/:id', asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if (products) {
        res.json(product)
    } else {
        res.status(404).send('Product not found')
    }
    
}))
export default router
