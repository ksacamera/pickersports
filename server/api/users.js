const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Returns all the users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({});
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

//Returns a users with specified id
router.get("/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        reviews: {
          include: {
            movie: true,
          },
        },
      },
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

//Deletes a user
router.delete("/:id", async (req, res) => {
  try {
    const deleteReviewTags = prisma.review_Tags.deleteMany({
      where: {
        review: {
          userId: Number(req.params.id),
        },
      },
    });

    const deleteReviews = prisma.review.deleteMany({
      where: {
        userId: Number(req.params.id),
      },
    });

    const deleteUser = prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    const transaction = await prisma.$transaction([
      deleteReviewTags,
      deleteReviews,
      deleteUser,
    ]);

    if (!transaction) {
      res.send({ error: true, message: "User Not Found" });
    } else {
      res.send({ error: false, message: "User Deleted" });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
