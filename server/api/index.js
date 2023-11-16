const router = require("express").Router();
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
// const express = require('express')

router.get(`/`, (req, res) => {
  res.send(`Welcome to the api router`);
});

// General API Routes
router.use(`/users`, require(`./users`));

// Hockey Specific Routes
// router.use(`/agegroup`, require(`./hockey/agegroup`));
router.use(`/bladecurve`, require(`./hockey/bladecurve`));
router.use(`/brands`, require(`./hockey/brands`));
router.use(`/flex`, require(`./hockey/flex`));
router.use(`/hand`, require(`./hockey/hand`));
router.use(`/kickpoints`, require(`./hockey/kickpoints`));
router.use(`/stickmodels`, require(`./hockey/stickmodels`));
router.use(`/texture`, require(`./hockey/texture`));

module.exports = router;
