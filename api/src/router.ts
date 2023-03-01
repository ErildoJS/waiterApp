import { Router } from "express";
import { createCategory } from "./app/useCases/Category/createCategory";
import { listCategories } from "./app/useCases/Category/listCategories";
import { listProducts } from "./app/useCases/Product/listProducts";
import multer from 'multer'
import path from 'node:path'
import { createProduct } from "./app/useCases/Product/createProduct";
import { listProductsByCategory } from "./app/useCases/Category/listProductsByCategory";
import { listOrders } from "./app/useCases/Orders/listOrders";
import { createOrdery } from "./app/useCases/Orders/createOrdery";
import { changeOrderStatus } from "./app/useCases/Orders/changeOrderStatus";
import { cancelOrder } from "./app/useCases/Orders/cancelOrder";

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
})
router.get('/categories', listCategories)
router.post('/categories', createCategory)

router.get('/products', listProducts)
router.post('/products', upload.single('image'), createProduct)

//get products by category
router.get('/categories/:categoryId/products', listProductsByCategory)

router.get('/orders', listOrders)
router.post('/orders', createOrdery)

router.patch('/orders/:orderId', changeOrderStatus)
router.delete('/orders/:orderId', cancelOrder)