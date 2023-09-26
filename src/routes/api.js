const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')
const cartController = require('../controllers/cartController')
const order_itemController = require('../controllers/order_itemController')
const paymentController = require('../controllers/paymentController')
const postController = require('../controllers/postController')
const subAdminController = require('../controllers/subAdminController')
const wishlistController = require('../controllers/wishlistController')
const categoryController = require('../controllers/categoryController')
const customerController = require('../controllers/customerController')
const shipmentController = require('../controllers/shipmentController')
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')





// Route to create a new user
router.post('/users', userController.create);

// Route to read user information
router.get('/users/:userId', userController.read);

// Route to update user information
router.put('/users/:userId', userController.update);

// Route to delete a user
router.delete('/users/:userId', userController.delete);


// Create a new admin
router.post('/admins', adminController.create);

// Read admin information
router.get('/admins/:adminId', adminController.read);

// Update admin information
router.put('/admins/:adminId', adminController.update);

// Delete an admin
router.delete('/admins/:adminId', adminController.delete);



// Create a new cart item
router.post('/carts', cartController.create);

// Read cart items for a user
router.get('/carts/:userId', cartController.read);

// Update a cart item
router.put('/carts/:cartItemId', cartController.update);

// Delete a cart item
router.delete('/carts/:cartItemId', cartController.delete);



// Create a new order item
router.post('/order-items', order_itemController.create);

// Read order item by ID
router.get('/order-items/:orderItemId', order_itemController.read);

// Update an order item
router.put('/order-items/:orderItemId', order_itemController.update);

// Delete an order item
router.delete('/order-items/:orderItemId', order_itemController.delete);


// Create a new payment
router.post('/payments', paymentController.create);

// Read payment details by ID
router.get('/payments/:paymentId', paymentController.read);

// Update payment information
router.put('/payments/:paymentId', paymentController.update);

// Delete a payment record
router.delete('/payments/:paymentId', paymentController.delete);



// Create a new post
router.post('/posts', postController.create);

// Read post by ID
router.get('/posts/:postId', postController.read);

// Update a post
router.put('/posts/:postId', postController.update);

// Delete a post
router.delete('/posts/:postId', postController.delete);


// Create a new sub-admin
router.post('/sub-admins', subAdminController.create);

// Read sub-admin information by ID
router.get('/sub-admins/:subAdminId', subAdminController.read);

// Update sub-admin information
router.put('/sub-admins/:subAdminId', subAdminController.update);

// Delete a sub-admin
router.delete('/sub-admins/:subAdminId', subAdminController.delete);


// Create a new wishlist
router.post('/wishlists', wishlistController.create);

// Read wishlist by ID
router.get('/wishlists/:wishlistId', wishlistController.read);

// Update a wishlist
router.put('/wishlists/:wishlistId', wishlistController.update);

// Delete a wishlist
router.delete('/wishlists/:wishlistId', wishlistController.delete);



// Create a new category
router.post('/categories', categoryController.create);

// Read category by ID
router.get('/categories/:categoryId', categoryController.read);

// Update a category
router.put('/categories/:categoryId', categoryController.update);

// Delete a category
router.delete('/categories/:categoryId', categoryController.delete);



// Create a new customer
router.post('/customers', customerController.create);

// Read customer information by ID
router.get('/customers/:customerId', customerController.read);

// Update customer information
router.put('/customers/:customerId', customerController.update);

// Delete a customer
router.delete('/customers/:customerId', customerController.delete);


// Create a new shipment
router.post('/shipments', shipmentController.create);

// Read shipment information by ID
router.get('/shipments/:shipmentId', shipmentController.read);

// Update shipment information
router.put('/shipments/:shipmentId', shipmentController.update);

// Delete a shipment
router.delete('/shipments/:shipmentId', shipmentController.delete);



// Create a new product
router.post('/products', productController.create);

// Read product information by ID
router.get('/products/:productId', productController.read);

// Update product information
router.put('/products/:productId', productController.update);

// Delete a product
router.delete('/products/:productId', productController.delete);



// Create a new order
router.post('/orders', orderController.create);

// Read order information by ID
router.get('/orders/:orderId', orderController.read);

// Update order information
router.put('/orders/:orderId', orderController.update);

// Delete an order
router.delete('/orders/:orderId', orderController.delete);



module.exports = router;
