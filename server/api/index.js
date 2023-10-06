const router = require("express").Router();

router.get(`/`, (req, res) => {
  res.send(`Welcome to the api router`);
});

// General API Routes
router.use(`/users`, require(`./users`));

// Hockey Specific Routes
router.use(`/hockey/agegroup`, require(`./hockey/agegroup`));
router.use(`/hockey/bladecurve`, require(`./hockey/bladecurve`));
router.use(`/hockey/brands`, require(`./hockey/brands`));
router.use(`/hockey/flex`, require(`./hockey/flex`));
router.use(`/hockey/hand`, require(`./hockey/hand`));
router.use(`/hockey/kickpoints`, require(`./hockey/kickpoints`));
router.use(`/hockey/stickmodels`, require(`./hockey/stickmodels`));
router.use(`/hockey/texture`, require(`./hockey/texture`));

module.exports = router;
