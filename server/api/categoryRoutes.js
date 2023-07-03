const router = require('express').Router();
const { Product } = require('../db');

//this is /api/category/pokemon-all
router.get('/pokemon-all', async (req, res, next) => {
    try {
        const pokemon = await Product.findAll({ where: { category: "pokemon" } });
        res.send(pokemon)
    } catch (err) {
        next(err)
    }
})

//prob need a post/get/delete route for each of these ugh


router.get('/potions', async (req, res, next) => {
    try {
        const potions = await Product.findAll({ where: { category: "medicine" } });
        res.send(potions)
    }
    catch (err) {
        next(err)
    }
})

router.get('/pokeballs', async (req, res, next) => {
    try {
        const pokeballs = await Product.findAll({ where: { category: "pokeballs" } });
        res.send(pokeballs)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;