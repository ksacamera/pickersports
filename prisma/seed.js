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

  //// AGE GROUP


  //// BRANDS
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

    //// BLADE/CURVE 
  //// Bauer Blade/Curve
  const bauerP29M = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P92M",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium-Long",
      BladeCurveLie: 6.0,
      BrandID: 1,
    },
  });

  const bauerP29 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P92",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium-Long",
      BladeCurveLie: 6.0,
      BrandID: 1,
    },
  });

  const bauerP28 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P28",
      BladeCurveType: "Mid-Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 1,
    },
  });

  const bauerP88 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P88",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 6.0,
      BrandID: 1,
    },
  });

  const bauerP90TM = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P90TM",
      BladeCurveType: "Mid-Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 6.0,
      BrandID: 1,
    },
  });

  //// CCM Blade/Curve
  const ccmP28 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P28",
      BladeCurveType: "Mid-Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 2,
    },
  });

  const ccmP29 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P29",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 6.0,
      BrandID: 2,
    },
  });

  const ccmP88 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P88",
      BladeCurveType: "Mid",
      BladeCurveToe: "Closed",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 6.0,
      BrandID: 2,
    },
  });

  const ccmP90TM = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "P90TM",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 5.0,
      BrandID: 2,
    },
  });

  //// WARRIOR Blade/Curve
  const warriorW01 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W01",
      BladeCurveType: "Mid-Heel",
      BladeCurveToe: "Round",
      BladeCurveFace: "Closed",
      BladeCurveLength: "Short",
      BladeCurveLie: 5.0,
      BrandID: 3,
    },
  });

  const warriorW02 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W02",
      BladeCurveType: "Mid-Heel",
      BladeCurveToe: "Square",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 5.0,
      BrandID: 3,
    },
  });

  const warriorW03 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W03",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 4.0,
      BrandID: 3,
    },
  });

  const warriorW16 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W16",
      BladeCurveType: "Mid-Heel",
      BladeCurveToe: "Square",
      BladeCurveFace: "Slightly Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 3,
    },
  });


  const warriorM03 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "M03",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 4.0,
      BrandID: 3,
    },
  });

  const warriorW05 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W05",
      BladeCurveType: "Heel",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 5.0,
      BrandID: 3,
    },
  });

  const warriorW28 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W28",
      BladeCurveType: "Mid-Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 4.0,
      BrandID: 3,
    },
  });

  const warriorM28 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "M28",
      BladeCurveType: "Mid-Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 4.0,
      BrandID: 3,
    },
  });

  const warriorW71 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W71",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 5.0,
      BrandID: 3,
    },
  });

  const warriorW88 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "W88",
      BladeCurveType: "Mid",
      BladeCurveToe: "Semi-Square",
      BladeCurveFace: "Closed",
      BladeCurveLength: "Medium",
      BladeCurveLie: 4.0,
      BrandID: 3,
    },
  });

  const warriorM88 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "M88",
      BladeCurveType: "Mid",
      BladeCurveToe: "Semi-Square",
      BladeCurveFace: "Closed",
      BladeCurveLength: "Medium",
      BladeCurveLie: 4.0,
      BrandID: 3,
    },
  });

  //// TRUE Blade/Curves
  const trueT27 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "T27",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 4,
    },
  });

  const trueT28 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "T28",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.5,
      BrandID: 4,
    },
  });

  const trueT90T = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "T90T",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.5,
      BrandID: 4,
    },
  });

  const trueT92 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "T92",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 6.0,
      BrandID: 4,
    },
  });

  const trueT92point5 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "T92.5",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.5,
      BrandID: 4,
    },
  });

  const trueT88 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "T88",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Slightly Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 4,
    },
  });

  //// SHERWOOD Blade/Curves
  const sherwoodPP26 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP26",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 6.0,
      BrandID: 5,
    },
  });

  const sherwoodPP26MX = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP26MX",
      BladeCurveType: "Mid-Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 6.0,
      BrandID: 5,
    },
  });

  const sherwoodPP28 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP28",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 5,
    },
  });

  const sherwoodPP28MX = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP28MX",
      BladeCurveType: "Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 5,
    },
  });

  const sherwoodPP77 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP77",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 5.5,
      BrandID: 5,
    },
  });

  const sherwoodPP88 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP26",
      BladeCurveType: "Mid",
      BladeCurveToe: "Round",
      BladeCurveFace: "Slightly Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 6.0,
      BrandID: 5,
    },
  });

  const sherwoodPP90MX = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP90MX",
      BladeCurveType: "Toe",
      BladeCurveToe: "Square",
      BladeCurveFace: "Open",
      BladeCurveLength: "Long",
      BladeCurveLie: 5.5,
      BrandID: 5,
    },
  });

  const sherwoodPP92 = await prisma.bladeCurve.create({
    data: {
      BladeCurveName: "PP92",
      BladeCurveType: "Mid-Toe",
      BladeCurveToe: "Round",
      BladeCurveFace: "Open",
      BladeCurveLength: "Medium",
      BladeCurveLie: 5.0,
      BrandID: 5,
    },
  });

  //// FLEX
  const flex40 = await prisma.flex.create({
    data: {
      FlexValue: 40,
    },
  });

  const flex45 = await prisma.flex.create({
    data: {
      FlexValue: 45,
    },
  });

  const flex50 = await prisma.flex.create({
    data: {
      FlexValue: 50,
    },
  });

  const flex55 = await prisma.flex.create({
    data: {
      FlexValue: 55,
    },
  });

  const flex60 = await prisma.flex.create({
    data: {
      FlexValue: 60,
    },
  });

  const flex63 = await prisma.flex.create({
    data: {
      FlexValue: 63,
    },
  });

  const flex65 = await prisma.flex.create({
    data: {
      FlexValue: 65,
    },
  });

  const flex70 = await prisma.flex.create({
    data: {
      FlexValue: 70,
    },
  });

  const flex75 = await prisma.flex.create({
    data: {
      FlexValue: 75,
    },
  });

  const flex77 = await prisma.flex.create({
    data: {
      FlexValue: 77,
    },
  });

  const flex80 = await prisma.flex.create({
    data: {
      FlexValue: 80,
    },
  });

  const flex82 = await prisma.flex.create({
    data: {
      FlexValue: 82,
    },
  });

  const flex85 = await prisma.flex.create({
    data: {
      FlexValue: 85,
    },
  });

  const flex87 = await prisma.flex.create({
    data: {
      FlexValue: 87,
    },
  });

  const flex90 = await prisma.flex.create({
    data: {
      FlexValue: 90,
    },
  });

  const flex95 = await prisma.flex.create({
    data: {
      FlexValue: 95,
    },
  });

  const flex100 = await prisma.flex.create({
    data: {
      FlexValue: 100,
    },
  });

  const flex102 = await prisma.flex.create({
    data: {
      FlexValue: 102,
    },
  });

  const flex105 = await prisma.flex.create({
    data: {
      FlexValue: 105,
    },
  });

  const flex110 = await prisma.flex.create({
    data: {
      FlexValue: 110,
    },
  });

  const flex112 = await prisma.flex.create({
    data: {
      FlexValue: 112,
    },
  });

  //// HAND
  const leftHand = await prisma.hand.create({
    data: {
      HandName: "Left",
    },
  });

  const rightHand = await prisma.hand.create({
    data: {
      HandName: "Right",
    },
  });

  //// KICK POINTS
  const lowKick = await prisma.kickPoint.create({
    data: {
      KickPointName: "Low Kick",
    },
  });

  const midKick = await prisma.kickPoint.create({
    data: {
      KickPointName: "Mid Kick",
    },
  });

  const hybridKick = await prisma.kickPoint.create({
    data: {
      KickPointName: "Hybrid Kick",
    },
  });

  //// STICK MODELS ////

  /// BAUER MODELS (ID:1)
  const vaporModel = await prisma.model.create({
    data: {
      ModelName: "Vapor",
      Brand: {
        connect: {
          BrandID: 1
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1, // LOW KICK
        },
      },
    }
  });

  const synergyModel = await prisma.model.create({
    data: {
      ModelName: "Synergy",
      Brand: {
        connect: {
          BrandID: 1
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1, // LOW KICK
        },
      },
    }
  });

  const ag5ntModel = await prisma.model.create({
    data: {
      ModelName: "AG5NT",
      Brand: {
        connect: {
          BrandID: 1
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1, // LOW KICK
        },
      },
    }
  });

  const nexusModel = await prisma.model.create({
    data: {
      ModelName: "Nexus",
      Brand: {
        connect: {
          BrandID: 1
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 2,
        },
      },
    }
  });

  const supremeModel = await prisma.model.create({
    data: {
      ModelName: "Supreme",
      Brand: {
        connect: {
          BrandID: 1
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 2,
        },
      },
    }
  });

  const protoRModel = await prisma.model.create({
    data: {
      ModelName: "Proto-R",
      Brand: {
        connect: {
          BrandID: 1
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 2,
        },
      },
    }
  });

  //// CCM MODELS (ID:2)
  const jetSpeedModel = await prisma.model.create({
    data: {
      ModelName: "JetSpeed",
      Brand: {
        connect: {
          BrandID: 2
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 3,
        },
      },
    }
  });

  const ribcorModel = await prisma.model.create({
    data: {
      ModelName: "Ribcor",
      Brand: {
        connect: {
          BrandID: 2
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1,
        },
      },
    }
  });

  const tacksModel = await prisma.model.create({
    data: {
      ModelName: "Tacks",
      Brand: {
        connect: {
          BrandID: 2
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 2,
        },
      },
    }
  });

  const ftGhostModel = await prisma.model.create({
    data: {
      ModelName: "FT Ghost",
      Brand: {
        connect: {
          BrandID: 2
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 3,
        },
      },
    }
  });

  //// WARRIOR MODELS (ID:3)
  const alphaModel = await prisma.model.create({
    data: {
      ModelName: "Alpha",
      Brand: {
        connect: {
          BrandID: 3
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 3,
        },
      },
    }
  });

  const covertModel = await prisma.model.create({
    data: {
      ModelName: "Covert",
      Brand: {
        connect: {
          BrandID: 3
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1,
        },
      },
    }
  });

  const noviumModel = await prisma.model.create({
    data: {
      ModelName: "Novium",
      Brand: {
        connect: {
          BrandID: 3
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 2,
        },
      },
    }
  });

  //// TRUE MODELS (ID:4)
  const catalystModel = await prisma.model.create({
    data: {
      ModelName: "Catalyst",
      Brand: {
        connect: {
          BrandID: 4
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 2,
        },
      },
    }
  });

  const hzrdusModel = await prisma.model.create({
    data: {
      ModelName: "HZRDUS",
      Brand: {
        connect: {
          BrandID: 4
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1,
        },
      },
    }
  });

  const projectXModel = await prisma.model.create({
    data: {
      ModelName: "Project X",
      Brand: {
        connect: {
          BrandID: 4
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1,
        },
      },
    }
  });

  //// SHERWOOD (ID:5)
  const codeModel = await prisma.model.create({
    data: {
      ModelName: "Code",
      Brand: {
        connect: {
          BrandID: 5
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 3,
        },
      },
    }
  });

  const rekkerModel = await prisma.model.create({
    data: {
      ModelName: "Rekker",
      Brand: {
        connect: {
          BrandID: 5
        }
      },
      KickPoint: {
        connect: {
          KickPointID: 1,
        },
      },
    }
  });

  //// TEXTURE
  const textureGrip = await prisma.texture.create({
    data: {
      TextureName: "Grip",
    },
  });

  const textureClear = await prisma.texture.create({
    data: {
      TextureName: "Clear",
    },
  });


};

main();
