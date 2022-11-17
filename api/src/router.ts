import path from 'node:path';
import { Request, Response, Router } from 'express';
import { createCategory } from './services/Categories/createCategory';
import { listCategories } from './services/Categories/listCategory';
import { createProducts } from './services/Products/createProducts';
import { listProducts } from './services/Products/listProducts';
import multer from 'multer';
import { listProductsByCategory } from './services/Products/listProductsByCategory';
import { listOrders } from './services/Orders/listOrders';
import { createOrder } from './services/Orders/createOrder';
import { changeOrderStatus } from './services/Orders/changeOrderStatus';
import { cancelOrders } from './services/Orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

router.get('/', (req: Request, res: Response) => {
  return res.json({ msg: 'Welcome OPJS' });
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProducts);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);
// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order.
router.delete('/orders/:orderId', cancelOrders);
