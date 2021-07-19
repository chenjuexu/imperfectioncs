import express, { Router } from 'express'
//import asyncHandler from 'express-async-handler'
import products from '../data/products.js'
const router = express.Router()
//import Product from '../models/productModel.js'
import {getProducts,getProductById} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
export default router
