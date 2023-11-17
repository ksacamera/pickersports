const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { requireUser } = require("../utils"); 
const { requireAdmin } = require("../utils");

// Initialize Prisma client
const prisma = new PrismaClient();

// Route to fetch texture
router.get("/", async (req, res) => {
  try {
    const texture = await prisma.texture.findMany();
    res.send(texture);
  } catch (error) {
    console.error("Error fetching textures:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching textures." });
  }
});

// Returns ONE Texture with specified ID
router.get("/:id", requireUser, async (req, res) => {
  try {
    const texture = await prisma.texture.findUnique({
      where: {
        TextureID: Number(req.params.id),
      },
    });
    if (!texture) {
      res.send({ error: true, message: "Texture Not Found" });
    } else {
      res.send(texture);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

// Define a route to create a new Texture
router.post("/", requireAdmin, async (req, res) => {
  try {
    // Extract texture data from the request body
    const { TextureName } = req.body;

    // Create a new texture in the database
    const newTexture = await prisma.texture.create({
      data: {
        TextureName,
      },
    });

    res.send(newTexture);
  } catch (error) {
    console.error("Error creating a texture:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating a texture." });
  }
});

//Updates texture with specified id
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const texture = await prisma.texture.update({
      where: {
        TextureID: Number(req.params.id),
      },
      data: req.body,
    });
    if (!texture) {
      res.send({ error: true, message: "Texture Not Found" });
    } else {
      res.send(texture);
    }
  } catch (error) {
    res.send(error);
  }
});

// Route that deletes a Texture
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const deletedTexture = await prisma.texture.delete({
      where: {
        TextureID: Number(req.params.id),
      },
    });
    if (!deletedTexture) {
      res.send({ error: true, message: "Texture Not Found" });
    } else {
      res.send(texture);
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
