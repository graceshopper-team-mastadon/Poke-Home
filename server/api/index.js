const express = require("express");
const router = express.Router();
const morgan = require("morgan");

// router.use("/dashboard", require("./api/adminRoutes"));

router.use("/products", require("./productsRoutes"));
router.use('/cart', require('./cartRoutes'))
router.use('/order', require('./orderRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/category', require('./categoryRoutes'))


module.exports = router;
