const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// Initialize Prisma client
const prisma = new PrismaClient();

// Route to fetch hands
router.get("/", async (req, res) => {
  try {
    const hands = await prisma.hand.findMany();
    res.send(hands);
  } catch (error) {
    console.error("Error fetching hands:", error);
    res.status(500).json({ error: "An error occurred while fetching hands." });
  }
});

// Returns ONE hand with specified ID
router.get("/:id", async (req, res) => {
  try {
    const hand = await prisma.hand.findUnique({
      where: {
        HandID: Number(req.params.id),
      },
    });
    if (!hand) {
      res.send({ error: true, message: "Hand Not Found" });
    } else {
      res.send(hand);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

// Define a route to create a new hand
router.post("/", async (req, res) => {
  try {
    // Extract hand data from the request body
    const { HandName } = req.body;

    // Create a new hand in the database
    const newHand = await prisma.hand.create({
      data: {
        HandName,
      },
    });

    res.send(newHand);
  } catch (error) {
    console.error("Error creating a hand:", error);
    res.status(500).json({ error: "An error occurred while creating a hand." });
  }
});

//Updates hand with specified id
router.put("/:id", async (req, res) => {
  try {
    const hand = await prisma.hand.update({
      where: {
        HandID: Number(req.params.id),
      },
      data: req.body,
    });
    if (!hand) {
      res.send({ error: true, message: "Hand Not Found" });
    } else {
      res.send(hand);
    }
  } catch (error) {
    res.send(error);
  }
});

// Route that deletes a Hand
router.delete("/:id", async (req, res) => {
  try {
    const deletedHand = await prisma.hand.delete({
      where: {
        HandID: Number(req.params.id),
      },
    });
    if (!deletedHand) {
      res.send({ error: true, message: "Hand Not Found" });
    } else {
      res.send(hand);
    }
  } catch (error) {
    res.send(error);
  }
});

// Don't forget to close the Prisma client when the server stops
process.on("beforeExit", () => {
  prisma.$disconnect();
});

module.exports = router;
