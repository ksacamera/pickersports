const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const main = async () => {
  //// USERS
  const user1 = await prisma.user.create({
    data: {
      firstName: "Kevin",
      lastName: "Anderson",
      username: "SlapperKev",
      email: "ksacamera@gmail.com",
      isAdmin: true,
      password: await bcrypt.hash("123", 10),
      avatar:
        "https://people.com/thmb/J5i96dLkdqMYBK9koINtQNH8nEk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/hulk-hogan-01-800-0cfd24984e1e45ea9c4c3a0b0e4745b4.jpg",
    },
  });
  //// BRAND
  const brandBauer = await prisma.brand.create({
    data: {
      BrandName: "Bauer",
      avatar:
        "https://img.inlinewarehouse.com/graphics-resizer/logos/BAUER.svg",
    },
  });

  const brandCCM = await prisma.brand.create({
    data: {
      BrandName: "CCM",
      avatar: "https://img.inlinewarehouse.com/graphics-resizer/logos/CCM.svg",
    },
  });

  const brandWarrior = await prisma.brand.create({
    data: {
      BrandName: "Warrior",
      avatar:
        "https://img.inlinewarehouse.com/graphics-resizer/logos/WARRIOR.svg",
    },
  });

  const brandTrue = await prisma.brand.create({
    data: {
      BrandName: "True",
      avatar:
        "https://img.inlinewarehouse.com/graphics-resizer/logos/TRUEHOCKEY.svg",
    },
  });

  const brandSherwood = await prisma.brand.create({
    data: {
      BrandName: "Sherwood",
      avatar:
        "https://img.inlinewarehouse.com/graphics-resizer/logos/SHERWOOD.svg",
    },
  });

  //// TEXTURE

  //// HAND
};

main();
