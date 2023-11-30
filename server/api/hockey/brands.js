const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { requireUser } = require("../utils"); 
const { requireAdmin } = require("../utils");

// Initialize Prisma client
const prisma = new PrismaClient();

// Route to fetch brands
router.get("/", async (req, res) => {
  try {
    const brands = await prisma.brand.findMany();
    res.send(brands);
  } catch (error) {
    console.error("Error fetching brands:", error);
    res.status(500).json({ error: "An error occurred while fetching brands." });
  }
});

// Returns ONE Brand with specified ID
router.get("/:id", requireUser, async (req, res) => {
  try {
    const brand = await prisma.brand.findUnique({
      where: {
        BrandID: Number(req.params.id),
      },
    });
    if (!brand) {
      res.send({ error: true, message: "Brand Not Found" });
    } else {
      res.send(brand);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

// Define a route to create a new brand
router.post("/", requireAdmin, async (req, res) => {
  try {
    // Extract brand data from the request body
    const { BrandName } = req.body;

    // Create a new brand in the database
    const newBrand = await prisma.brand.create({
      data: {
        BrandName,
      },
    });

    res.send(newBrand);
  } catch (error) {
    console.error("Error creating a brand:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating a brand." });
  }
});

//Updates brand with specified id
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const brand = await prisma.brand.update({
      where: {
        BrandID: Number(req.params.id),
      },
      data: req.body,
    });
    if (!brand) {
      res.send({ error: true, message: "Brand Not Found" });
    } else {
      res.send(brand);
    }
  } catch (error) {
    res.send(error);
  }
});

// Route that deletes a Brand
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const deletedBrand = await prisma.brand.delete({
      where: {
        BrandID: Number(req.params.id),
      },
    });
    if (!deletedBrand) {
      res.send({ error: true, message: "Brand Not Found" });
    } else {
      res.send(brand);
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
