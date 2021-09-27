import express, { Router } from 'express'
//import asyncHandler from 'express-async-handler'
import products from '../data/products.js'
const router = express.Router()
//import Product from '../models/productModel.js'
import { getProducts, getProductById,deleteProduct,createProduct,
    updateProduct,createProductReview,getTopProducts, } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
export default router
