const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("You have reached the auth router");
});

//REGISTERS A USER
router.post("/register", async (req, res) => {
  try {
    const user = req.body;

    user.password = await bcrypt.hash(user.password, 10);

    const result = await prisma.user.create({
      data: user,
    });

    if (result) {
      const token = jwt.sign({ id: result.id }, process.env.JWT);

      res.status(201).send({ token });
    } else {
      res.send({ message: "Could not add User" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

//Checks if user is valid
router.post("/signIn", async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password); 
          // ⇑ Will return true if password is correct
    if (passwordMatch) {
      const token = jwt.sign({id: user.id}, process.env.JWT) // Uses .env package 
      res.send({ token });
    } else {
      res.send({ message: "Invalid Login" });
    }
  } else {
    res.send({ message: "Invalid Login" });
  }
});

// Route that sends the user according to given token
router.get("/me", async (req, res) => {
  // Check whether aut header is valid
  const auth = req.headers.authorizations;

  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
    // ⇑  "?" means that this will only activate if auth exists.
          //  auth.slice cleans up the result.
        
    try { 
      const { id } = jwt.verify(token, process.env.JWT);
      const user = await prisma.user.findUnique({
        where:{id : id}
      })

      if(user) {
        res.send(user);
      } else {
        res.send({ message: "User Not Found" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
