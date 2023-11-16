const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// Initialize Prisma client
const prisma = new PrismaClient();

// Define a route to fetch all blade curves
router.get("/", async (req, res) => {
  try {
    const bladeCurves = await prisma.bladeCurve.findMany();
    res.send(bladeCurves);
  } catch (error) {
    console.error("Error fetching curves:", error);
    res.status(500).json({ error: "An error occurred while fetching curves." });
  }
});

// Returns ONE Blade Curve with specified ID
router.get("/:id", async (req, res) => {
  try {
    const bladeCurve = await prisma.bladeCurve.findUnique({
      where: {
        BladeCurveID: Number(req.params.id),
      },
    });
    if (!bladeCurve) {
      res.send({ error: true, message: "Curve Not Found" });
    } else {
      res.send(bladeCurve);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

// Define a route to create a new blade curve
router.post("/", async (req, res) => {
  try {
    // Extract blade curve data from the request body
    const { BladeCurveName } = req.body;

    // Create a new blade curve in the database
    const newBladeCurve = await prisma.bladeCurve.create({
      data: {
        BladeCurveName,
      },
    });

    res.send(newBladeCurve);
  } catch (error) {
    console.error("Error creating a blade curve:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating a blade curve." });
  }
});

//Updates blade curve with specified id
router.put("/:id", async (req, res) => {
  try {
    const bladeCurve = await prisma.bladeCurve.update({
      where: {
        BladeCurveID: Number(req.params.id),
      },
      data: req.body,
    });
    if (!bladeCurve) {
      res.send({ error: true, message: "Blade Curve Not Found" });
    } else {
      res.send(bladeCurve);
    }
  } catch (error) {
    res.send(error);
  }
});

// Route that deletes a blade curve
router.delete("/:id", async (req, res) => {
  try {
    const deletedBladeCurve = await prisma.bladeCurve.delete({
      where: {
        BladeCurveID: Number(req.params.id),
      },
    });
    if (!deletedBladeCurve) {
      res.send({ error: true, message: "Blade Curve Not Found" });
    } else {
      res.send(bladeCurve);
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
