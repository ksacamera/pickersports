const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// Initialize Prisma client
const prisma = new PrismaClient();

// Route to fetch all flexes
router.get("/", async (req, res) => {
  try {
    const flexes = await prisma.flex.findMany();
    res.send(flexes);
  } catch (error) {
    console.error("Error fetching flexes:", error);
    res.status(500).json({ error: "An error occurred while fetching flexes." });
  }
});

// Returns ONE Flex with specified ID
router.get("/:id", async (req, res) => {
  try {
    const flex = await prisma.flex.findUnique({
      where: {
        FlexID: Number(req.params.id),
      },
    });
    if (!flex) {
      res.send({ error: true, message: "Flex Not Found" });
    } else {
      res.send(flex);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

// Define a route to create a new flex
router.post("/", async (req, res) => {
  try {
    // Extract flex data from the request body
    const { FlexValue } = req.body;

    // Create a new flex in the database
    const newFlex = await prisma.flex.create({
      data: {
        FlexValue,
      },
    });

    res.send(newFlex);
  } catch (error) {
    console.error("Error creating flex:", error);
    res.status(500).json({ error: "An error occurred while creating flex." });
  }
});

//Updates flex with specified id
router.put("/:id", async (req, res) => {
  try {
    const flex = await prisma.flex.update({
      where: {
        FlexID: Number(req.params.id),
      },
      data: req.body,
    });
    if (!flex) {
      res.send({ error: true, message: "Flex Not Found" });
    } else {
      res.send(flex);
    }
  } catch (error) {
    res.send(error);
  }
});

// Route that deletes a Flex
router.delete("/:id", async (req, res) => {
  try {
    const deletedFlex = await prisma.flex.delete({
      where: {
        FlexID: Number(req.params.id),
      },
    });
    if (!deletedFlex) {
      res.send({ error: true, message: "Flex Not Found" });
    } else {
      res.send(flex);
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
