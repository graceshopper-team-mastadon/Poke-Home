const router = require("express").Router();
const { OrderProduct, Product, User, Order } = require("../db");

router.get("/order-history", async (req, res, next) => {
  try {
    const UserId = await User.getId(req.cookies.token);
    const orders = await Order.findAll({
      where: { userId: UserId, state: "COMPLETED" },
      include: { model: Product },
    });
    res.send(orders);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
