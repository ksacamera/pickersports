const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// Initialize Prisma client
const prisma = new PrismaClient();

// Define a route to fetch brands
router.get('/', async (req, res) => {
  try {
    // Fetch brands from the database
    const brands = await prisma.brand.findMany();

    // Send the brands as a JSON response
    res.json(brands);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ error: 'An error occurred while fetching brands.' });
  }
});

// Define a route to create a new brand
router.post('/', async (req, res) => {
  try {
    // Extract brand data from the request body
    const { BrandName } = req.body;

    // Create a new brand in the database
    const newBrand = await prisma.brand.create({
      data: {
        BrandName,
      },
    });

    // Send the newly created brand as a JSON response
    res.json(newBrand);
  } catch (error) {
    console.error('Error creating a brand:', error);
    res.status(500).json({ error: 'An error occurred while creating a brand.' });
  }
});

// Don't forget to close the Prisma client when the server stops
process.on('beforeExit', () => {
  prisma.$disconnect();
});

module.exports = router;
