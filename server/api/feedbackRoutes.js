const router = require("express").Router();
const Feedback = require("../db/models/Feedback");

router.post('/', async (req, res, next) => {
    try {
        res.send(await Feedback.create(req.body))
    } catch (err) {
        next(err)
    }
})

module.exports = router