import express from 'express'
import {
  checkout,
  verify,
  userOrder,
  allOrders,
} from "../controllers/paymentController.js";
import { isAdmin,requireSignIn } from "../middlewares/authmiddleware.js";

const router = express.Router();

// checkout
router.post('/checkout',checkout);

// verify-payment & save to db
router.post('/verify-payment',verify)

// user order
router.get("/userorder",requireSignIn, userOrder);

// All order's
router.get("/orders", allOrders);




export default router