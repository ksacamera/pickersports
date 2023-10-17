const router = require("express").Router();
// const { requireAdmin } = require("../utils");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/specific-route', (req, res) => {
  // Route handler logic here
});


// Close the Prisma Client when your application is shutting down
process.on('beforeExit', () => {
  prisma.$disconnect();
});

module.exports = router;
