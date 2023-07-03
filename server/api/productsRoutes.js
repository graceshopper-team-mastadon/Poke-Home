const router = require("express").Router();
const { Op }= require("sequelize");
// const Product = require("../db/models/Product");
const { Product } = require("../db");
// const OrderProduct = require("../db/models/OrderProduct");

// GET /api/products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});
router.get('/search/:term', async (req, res, next) => {
  try {
  const searchedProducts = await Product.findAll({
    where: {
      name: {
        [Op.substring]: req.params.term
      }
    }
  })
  res.send(searchedProducts)
} catch (err) {
  res.send(false)
}
})

// GET /api/products/:category
// Add where clause
router.get("/category/:id", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: { generation: req.params.id },
    });
    res.send(products);
  } catch (err) {
    next(err);
  }
});

//get singular product by id
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

//this should be an ADMIN function to edit a product
router.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  } catch (err) {
    next(err);
  }
});

// ADMIN add a product
router.post("/:id", async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (err) {
    next(err);
  }
});

// ADMIN delete a product
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const productToDelete = await Product.findByPk(req.params.id);
//     await productToDelete.destroy();
//     res.send(productToDelete);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
