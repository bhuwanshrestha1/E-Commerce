import express from 'express'
import { placeOrder,allOrders,updateStatus,placeOrderRazor,placeOrderStripe,userOrders,verifyStripe, verifyRazorpay } from '../controllers/orderController.js'
import adminAuth from "../middleware/adminAuth.js";
import authUser from '../middleware/auth.js';


const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazor)
orderRouter.post('/stripe',authUser,placeOrderStripe)

//User Features
orderRouter.post('/usersorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter
