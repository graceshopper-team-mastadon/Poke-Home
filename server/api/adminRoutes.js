const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

// PRODUCTS

// Add product
router.post("/products/add", async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (err) {
    next(err);
  }
});

// Edit product
router.put("/products/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    const editedProduct = await product.update(req.body);
    res.send(editedProduct);
  } catch (err) {
    next(err);
  }
});

// Delete product
router.get("/products/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.delete("/products/:id", async (req, res, next) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.end();
  } catch (err) {
    next(err);
  }
});

// USERS

// Add user
router.post("/users/add", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

// Edit user
router.put("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const editedUser = await user.update(req.body);
    res.send(editedUser);
  } catch (err) {
    next(err);
  }
});

// Delete user
router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/users/:id", async (req, res, next) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.end();
  } catch (err) {
    next(err);
  }
});

// Need to add a deletion of the cookie if that is the person logged in?

module.exports = router;
