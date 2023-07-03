const router = require("express").Router();
const { User } = require("../db");

// should be an admin only function
// router.get('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.send(user)
//   }
//   catch (err) {
//     next(err)
//   }
// })

router.get("/user", async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      res.send(null);
    } else {
      const userId = await User.getId(req.cookies.token);
      const user = await User.findByPk(userId);
      res.send(user);
    }
  } catch (err) {
    const errMsg = Error("bad token");
    errMsg.status = 401;
    throw errMsg;
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.get("/checkadmin", async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      res.send(false);
    } else {
      const adminStatus = await User.isAdmin(req.cookies.token);
      res.send(adminStatus);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
