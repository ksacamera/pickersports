const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// Initialize Prisma client
const prisma = new PrismaClient();

// Route to fetch Kick Points
router.get("/", async (req, res) => {
  try {
    const kickPoints = await prisma.kickPoint.findMany();
    res.send(kickPoints);
  } catch (error) {
    console.error("Error fetching Kick Points:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching Kick Points." });
  }
});

// Returns ONE Kick Point with specified ID
router.get("/:id", async (req, res) => {
  try {
    const kickPoint = await prisma.kickPoint.findUnique({
      where: {
        KickPointID: Number(req.params.id),
      },
    });
    if (!kickPoint) {
      res.send({ error: true, message: "Kick Point Not Found" });
    } else {
      res.send(kickPoint);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

// Define a route to create a new kick point
router.post("/", async (req, res) => {
  try {
    // Extract kick point data from the request body
    const { KickPointName } = req.body;

    // Create a new kick point in the database
    const newKickPoint = await prisma.kickPoint.create({
      data: {
        KickPointName,
      },
    });

    res.send(newKickPoint);
  } catch (error) {
    console.error("Error creating a kick point:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating a kick point." });
  }
});

//Updates kick point with specified id
router.put("/:id", async (req, res) => {
  try {
    const kickPoint = await prisma.kickPoint.update({
      where: {
        KickPointID: Number(req.params.id),
      },
      data: req.body,
    });
    if (!kickPoint) {
      res.send({ error: true, message: "Kick Point Not Found" });
    } else {
      res.send(kickPoint);
    }
  } catch (error) {
    res.send(error);
  }
});

// Route that deletes a Kick Point
router.delete("/:id", async (req, res) => {
  try {
    const deletedKickPoint = await prisma.kickPoint.delete({
      where: {
        KickPointID: Number(req.params.id),
      },
    });
    if (!deletedKickPoint) {
      res.send({ error: true, message: "Kick Point Not Found" });
    } else {
      res.send(kickPoint);
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
