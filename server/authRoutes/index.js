const router = require("express").Router();
const { User } = require("../db");

router.post("/login", async (req, res, next) => {
  try {
    res.cookie("token", await User.authenticate(req.body));
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
router.delete("/guestCart/:id", async (req, res, next) => {
  const guestCart = req.cookies.guestCart;
  const id = Number(req.params.id);
  const filtered = guestCart.filter((item) => {
    if (item.id === id) {
      if (item.quantity > 1) {
        item.quantity--;
        return item;
      }
    } else {
      return item;
    }
  });
  res.cookie("guestCart", filtered);
  res.end();
});
router.post("/guestCart", async (req, res, next) => {
  const productName = req.body.name;
  const productBody = req.body;
  let active = false;
  if (!req.cookies.guestCart) {
    productBody["quantity"] = 1;
    res.cookie("guestCart", [productBody]);
    res.end();
  } else {
    const guestCart = req.cookies.guestCart;
    for (let i = 0; i < guestCart.length; i++) {
      if (guestCart[i].name === req.body.name) {
        guestCart[i]["quantity"] = guestCart[i]["quantity"] + 1;
        res.cookie("guestCart", guestCart);
        active = true;
        break;
      }
    }
    if (active === false) {
      req.body["quantity"] = 1;
      guestCart.push(req.body);
      res.cookie("guestCart", guestCart);
    }
    res.end();
  }
});
router.get("/guestCart", async (req, res, next) => {
  res.send(req.cookies.guestCart);
});
router.delete("/guestCartCookie", async (req, res, next) => {
  res.clearCookie("guestCart");
  res.end();
});
router.get("/verify", async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      res.send(false);
    } else if (await User.Verify(req.cookies)) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
router.get("/getId", async (req, res, next) => {
  try {
    const id = await User.getId(req.cookies.token);
    res.json(id);
  } catch (err) {
    const errMsg = Error("bad token");
    errMsg.status = 401;
    throw errMsg;
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    await User.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/logout", async (req, res, next) => {
  res.clearCookie("token");
  res.end();
});

module.exports = router;
