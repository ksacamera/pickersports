const router = require("express").Router();
const { requireAdmin } = require("./utils");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all Age Groups
router.get(`/`, async (req, res) => {
  try {
    const allAgeGroups = await prisma.agegroups.findMany({
      include: {
        Age_Groups: {
          select: {
            movie: true,
          },
        },
      },
    });

    res.send(allGenres);
  } catch (error) {
    res.send({ message: `Genre not found`, error });
  }
});

// Get Genre with specified id
router.get(`/:id`, async (req, res) => {
  try {
    const genre = await prisma.genre.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        Movies_Genres: {
          select: {
            movie: true,
          },
        },
      },
    });
    if (!genre) {
      res.send({ error: true, message: "Genre Not Found" });
    } else {
      res.send(genre);
    }
  } catch (error) {
    res.send(error);
  }
});

// Create a new Genre
router.post(`/`, requireAdmin, async (req, res) => {
  try {
    const newGenre = await prisma.genre.create({
      data: req.body,
    });

    res.send({ message: `Genre created`, genre: newGenre });
  } catch (error) {
    res.send({ message: `Error creating Genre`, error });
  }
});

// Updates Genre with specified id
router.put(`/:id`, requireAdmin, async (req, res) => {
  try {
    const updateGenre = await prisma.genre.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.send({ message: `Genre updated`, genre: updateGenre });
  } catch (error) {
    res.send({ message: `Error updating Genre`, error });
  }
});

// Deletes a Genre
router.delete(`/:id`, requireAdmin, async (req, res) => {
  try {
    const deleteGenre = await prisma.genre.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.send({ message: `Genre deleted`, genre: deleteGenre });
  } catch (error) {
    res.send({ message: `Error deleting movie`, error });
  }
});

module.exports = router;
