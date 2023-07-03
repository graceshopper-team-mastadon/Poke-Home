const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

// Create or Access cart for logged in user
router.get("/", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOrCreate({
      where: { userId: UserId, state: "CART" },
    });
    const orderProductInfo = await OrderProduct.findAll({
      where: { orderId: cart[0].id },
    });

    res.send(orderProductInfo);
  } catch (err) {
    next(err);
  }
});

//Checkout
router.put("/checkout", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId, state: "CART" },
    });
    const checkedOut = await cart.update({
      state: "COMPLETED",
      date: req.body.date,
      price: req.body.price,
    });
    res.send(checkedOut);
  } catch (err) {
    next(err);
  }
});

// Add item to cart
router.post("/", async (req, res, next) => {
  try {
    const input = req.body.singleProduct;
    const UserId = await User.getId(req.cookies.token);
    const num = input.quantity;
    const cart = await Order.findOne({
      where: { userId: UserId, state: "CART" },
    });
    const productId = input.singleProduct.id;
    const itemExists = await OrderProduct.findOne({
      where: {
        productId: productId,
        orderId: cart.id,
      },
    });
    if (itemExists) {
      const updatedCartItem = await itemExists.increment("count", {
        by: num,
      });
      res.send(updatedCartItem);
    } else {
      const product = await Product.findByPk(productId);
      await cart.addProduct(product);
      const newItem = await OrderProduct.findOne({
        where: {
          productId: productId,
          orderId: cart.id,
        },
      });
      const newCount = num - 1;
      const updatedCart = await newItem.increment("count", {
        by: newCount,
      });
      res.send(updatedCart);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/mergeGuest", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId },
    });
    const productId = req.body.id;
    const itemExists = await OrderProduct.findOne({
      where: {
        productId: productId,
        orderId: cart.id,
      },
    });
    if (itemExists) {
      const updatedCartItem = await itemExists.increment("count", {
        by: 1,
      });
      res.send(updatedCartItem);
    } else {
      const product = await Product.findByPk(productId);
      const newCartItem = cart.addProduct(product);
      res.send(newCartItem);
    }
  } catch (err) {
    next(err);
  }
});
//Quick add
router.post("/quickadd", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId, state: "CART" },
    });
    const productId = req.body.id;
    const itemExists = await OrderProduct.findOne({
      where: {
        productId: productId,
        orderId: cart.id,
      },
    });
    if (itemExists) {
      const updatedCartItem = await itemExists.increment("count", {
        by: 1,
      });
      res.send(updatedCartItem);
    } else {
      const product = await Product.findByPk(productId);
      const newCartItem = cart.addProduct(product);
      res.send(newCartItem);
    }
  } catch (err) {
    next(err);
  }
});

// Delete item from Cart
router.delete("/:id", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId, state: "CART" },
    });
    const deletedCartItem = await OrderProduct.findOne({
      where: {
        productId: req.params.id,
        orderId: cart.id,
      },
    });
    await deletedCartItem.destroy();
    res.send(deletedCartItem);
  } catch (err) {
    next(err);
  }
});

router.put("/increment/:id", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId, state: "CART" },
    });
    const item = await OrderProduct.findOne({
      where: {
        productId: req.params.id,
        orderId: cart.id,
      },
    });
    const updatedCartItem = await item.increment("count", {
      by: 1,
    });

    res.send(updatedCartItem);
  } catch (err) {
    next(err);
  }
});

router.put("/decrement/:id", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const cart = await Order.findOne({
      where: { userId: UserId, state: "CART" },
    });
    const item = await OrderProduct.findOne({
      where: {
        productId: req.params.id,
        orderId: cart.id,
      },
    });
    if (item.count > 0) {
      const updatedCartItem = await item.decrement("count", {
        by: 1,
      });

      res.send(updatedCartItem);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
