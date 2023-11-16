const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// Initialize Prisma client
const prisma = new PrismaClient();

// Route to fetch users
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});

// Returns ONE User with specified ID
router.get("/:id", async (req, res) => {
  try{
  const user = await prisma.user.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });
  if (!user) {
    res.send({ error: true, message: "User Not Found" });
  } else {
  res.send(user);
}
} catch(error){
  res.send({error: true, message: "Something went wrong"});
}
});

// Define a route to create a new user
router.post('/', async (req, res) => {
  try {
    // Extract user data from the request body
    const { username } = req.body;

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
      },
    });

    res.send(newUser);
  } catch (error) {
    console.error('Error creating a user:', error);
    res.status(500).json({ error: 'An error occurred while creating a user.' });
  }
});

//Updates user with specified id
router.put("/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!user) {
      res.send({ error: true, message: "User Not Found" });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.send(error);
  }
});

// Route that deletes a User
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(req.params.id)
      },
    });
    if (!deletedUser) {
      res.send({ error: true, message: "User Not Found" });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.send(error);
  }
});

// Don't forget to close the Prisma client when the server stops
process.on('beforeExit', () => {
  prisma.$disconnect();
});

module.exports = router;
