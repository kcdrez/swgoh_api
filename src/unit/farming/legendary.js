const beskarMando = {
  id: "THEMANDALORIANBESKARARMOR",
  prerequisites: [
    {
      id: "THEMANDALORIAN",
      recommended: {
        value: 15700,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "GREEFKARGA",
      recommended: {
        value: 15700,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "CARADUNE",
      recommended: {
        value: 15700,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "IG11",
      recommended: {
        value: 15700,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "KUIIL",
      recommended: {
        value: 14000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const jtr = {
  id: "REYJEDITRAINING",
  prerequisites: [
    {
      id: "REY",
      recommended: {
        value: 14000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "FINN",
      recommended: {
        value: 14000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "SMUGGLERCHEWBACCA",
      recommended: {
        value: 14000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "SMUGGLERHAN",
      recommended: {
        value: 11900,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "BB8",
      recommended: {
        value: 11800,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const bb8 = {
  id: "BB8",
  prerequisites: [
    {
      tags: ["First Order", "!is_ship"],
      count: 5,
      recommended: {
        value: 13200,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const raddus = {
  id: "CAPITALRADDUS",
  prerequisites: [
    {
      id: "MILLENNIUMFALCONEP7",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "REY",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "XWINGRESISTANCE",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "RESISTANCEPILOT",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "XWINGBLACKONE",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "POE",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "HOUNDSTOOTH",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "BOSSK",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "EBONHAWK",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "CARTHONASI",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "T3_M4",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "JEDISTARFIGHTERAHSOKATANO",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "AHSOKATANO",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "MILLENNIUMFALCONPRISTINE",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "YOUNGLANDO",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      tags: ["Capital Ship"],
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const finalizer = {
  id: "CAPITALFINALIZER",
  prerequisites: [
    {
      id: "TIEFIGHTERFIRSTORDER",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "TIEFIGHTERPILOT",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "HOUNDSTOOTH",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "BOSSK",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "SLAVE1",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "BOBAFETT",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "TIESILENCER",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "KYLORENUNMASKED",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },

    {
      id: "COMMANDSHUTTLE",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "PHASMA",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "KYLOREN",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "TIEADVANCED",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "VADER",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "XANADUBLOOD",
      requirement: {
        value: 7,
        type: "Stars",
      },
      prerequisites: [
        {
          id: "CADBANE",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
      ],
    },
    {
      tags: ["Capital Ship"],
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const c3p0 = {
  id: "C3POLEGENDARY",
  prerequisites: [
    {
      tags: ["Ewok", "!is_ship"],
      count: 5,
      recommended: {
        value: 16500,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const chewy = {
  id: "CHEWBACCALEGENDARY",
  prerequisites: [
    {
      tags: ["Bounty Hunter", "!is_ship"],
      count: 5,
      recommended: {
        value: 18100,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const r2d2 = {
  id: "R2D2_LEGENDARY",
  prerequisites: [
    {
      tags: ["Empire", "!is_ship"],
      count: 5,
      recommended: {
        value: 13400,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const falcon = {
  id: "MILLENNIUMFALCON",
  prerequisites: [
    {
      id: "HANSOLO",
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      ...chewy,
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      tags: ["Capital Ship"],
      count: 1,
      recommended: {
        value: 46600,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      tags: ["Bounty Hunter", "is_ship"],
      count: 7,
      recommended: {
        value: 46600,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const cls = {
  id: "COMMANDERLUKESKYWALKER",
  prerequisites: [
    {
      ...r2d2,
      recommended: {
        value: 13000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "PRINCESSLEIA",
      recommended: {
        value: 13000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "STORMTROOPERHAN",
      recommended: {
        value: 13000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "LUKESKYWALKER",
      recommended: {
        value: 13000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
    {
      id: "OLDBENKENOBI",
      recommended: {
        value: 12000,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const jkl = {
  id: "JEDIKNIGHTLUKE",
  prerequisites: [
    {
      id: "VADER",
      recommended: {
        value: 33000,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      ...cls,
      recommended: {
        value: 33000,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      ...chewy,
      recommended: {
        value: 25700,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      ...c3p0,
      recommended: {
        value: 25700,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      id: "ADMINISTRATORLANDO",
      recommended: {
        value: 25700,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      id: "HOTHLEIA",
      recommended: {
        value: 25700,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      id: "HERMITYODA",
      recommended: {
        value: 29000,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      id: "HOTHHAN",
      recommended: {
        value: 25400,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      id: "WAMPA",
      recommended: {
        value: 24000,
        type: "Power",
      },
      requirement: {
        value: 3,
        type: "Relic",
      },
    },
    {
      id: "XWINGRED2",
      requirement: {
        value: 7,
        type: "Stars",
      },
      recommended: {
        value: 74500,
        type: "Power",
      },
    },
    {
      ...falcon,
      requirement: {
        value: 7,
        type: "Stars",
      },
      recommended: {
        value: 74500,
        type: "Power",
      },
    },
    {
      tags: ["Capital Ship"],
      count: 1,
      recommended: {
        value: 74500,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const thrawn = {
  id: "GRANDADMIRALTHRAWN",
  prerequisites: [
    {
      tags: ["Phoenix", "!is_ship"],
      count: 5,
      recommended: {
        value: 13900,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const gmy = {
  id: "GRANDMASTERYODA",
  prerequisites: [
    {
      tags: ["Jedi", "!is_ship"],
      count: 5,
      recommended: {
        value: 11700,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const padme = {
  id: "PADMEAMIDALA",
  prerequisites: [
    {
      tags: ["Separatist", "!is_ship"],
      count: 5,
      recommended: {
        value: 16600,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const gas = {
  id: "GENERALSKYWALKER",
  prerequisites: [
    {
      tags: ["Capital Ship", "Galactic Republic"],
      count: 1,
      recommended: {
        value: 40000,
        type: "Power",
      },
      requirement: {
        value: 21500,
        type: "Power",
      },
    },
    {
      id: "JEDISTARFIGHTERANAKIN",
      recommended: {
        value: 52000,
        type: "Power",
      },
      requirement: {
        value: 40000,
        type: "Power",
      },
    },
    {
      tags: ["Galactic Republic", "is_ship", "!Capital Ship"],
      count: 6,
      recommended: {
        value: 52000,
        type: "Power",
      },
      requirement: {
        value: 40000,
        type: "Power",
      },
    },
    {
      ...padme,
      recommended: {
        value: 24500,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "C3POLEGENDARY",
      recommended: {
        value: 24500,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "GENERALKENOBI",
      recommended: {
        value: 24500,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "AHSOKATANO",
      recommended: {
        value: 24500,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "SHAAKTI",
      recommended: {
        value: 24500,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "ASAJVENTRESS",
      recommended: {
        value: 22300,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "B1BATTLEDROIDV2",
      recommended: {
        value: 22300,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "B2SUPERBATTLEDROID",
      recommended: {
        value: 22300,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "DROIDEKA",
      recommended: {
        value: 22300,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
    {
      id: "MAGNAGUARD",
      recommended: {
        value: 22300,
        type: "Power",
      },
      requirement: {
        value: 17700,
        type: "Power",
      },
    },
  ],
};

const palpatine = {
  id: "EMPERORPALPATINE",
  prerequisites: [
    {
      tags: ["REBEL", "!is_ship"],
      count: 5,
      recommended: {
        value: 11800,
        type: "Power",
      },
      requirement: {
        value: 7,
        type: "Stars",
      },
    },
  ],
};

const legendary = {
  id: "legendary",
  table: "Legendary Events",
  characters: [
    palpatine,
    gmy,
    thrawn,
    r2d2,
    bb8,
    padme,
    cls,
    jtr,
    beskarMando,
    {
      id: "CAPITALCHIMAERA",
      prerequisites: [
        {
          id: "GHOST",
          recommended: {
            value: 28000,
            type: "Power",
          },
          requirement: {
            value: 5,
            type: "Stars",
          },
        },
        {
          id: "PHANTOM2",
          recommended: {
            value: 28000,
            type: "Power",
          },
          requirement: {
            value: 5,
            type: "Stars",
          },
        },
        {
          tags: ["Rebel", "is_ship"],
          count: 6,
          recommended: {
            value: 28000,
            type: "Power",
          },
          requirement: {
            value: 5,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "STARKILLER",
      prerequisites: [
        {
          id: "DASHRENDAR",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "KYLEKATARN",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "DARTHTALON",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "MARAJADE",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
      ],
    },
    {
      id: "JEDIKNIGHTREVAN",
      prerequisites: [
        {
          id: "BASTILASHAN",
          recommended: {
            value: 13400,
            type: "Power",
          },
        },
        {
          id: "JOLEEBINDO",
          recommended: {
            value: 13400,
            type: "Power",
          },
        },
        {
          id: "MISSIONVAO",
          recommended: {
            value: 13400,
            type: "Power",
          },
        },
        {
          id: "ZAALBAR",
          recommended: {
            value: 13400,
            type: "Power",
          },
        },
        {
          id: "T3_M4",
          recommended: {
            value: 13400,
            type: "Power",
          },
        },
      ],
    },
    {
      id: "DARTHREVAN",
      prerequisites: [
        {
          id: "BASTILASHANDARK",
          recommended: {
            value: 18800,
            type: "Power",
          },
        },
        {
          id: "CANDEROUSORDO",
          recommended: {
            value: 18800,
            type: "Power",
          },
        },
        {
          id: "HK47",
          recommended: {
            value: 18800,
            type: "Power",
          },
        },
        {
          id: "JUHANI",
          recommended: {
            value: 18000,
            type: "Power",
          },
        },
        {
          id: "CARTHONASI",
          recommended: {
            value: 16200,
            type: "Power",
          },
        },
      ],
    },
    chewy,
    c3p0,
    falcon,
    {
      id: "DARTHMALAK",
      prerequisites: [
        {
          id: "JEDIKNIGHTREVAN",
          recommended: {
            value: 21500,
            type: "Power",
          },
        },
        {
          id: "BASTILASHAN",
          recommended: {
            value: 21500,
            type: "Power",
          },
        },
        {
          id: "JOLEEBINDO",
          recommended: {
            value: 21500,
            type: "Power",
          },
        },
        {
          id: "MISSIONVAO",
          recommended: {
            value: 21500,
            type: "Power",
          },
        },
        {
          id: "ZAALBAR",
          recommended: {
            value: 21500,
            type: "Power",
          },
        },
        {
          id: "T3_M4",
          recommended: {
            value: 21500,
            type: "Power",
          },
        },
        {
          id: "DARTHREVAN",
          recommended: {
            value: 21500,
            type: "Power",
          },
        },
        {
          id: "BASTILASHANDARK",
          recommended: {
            value: 18800,
            type: "Power",
          },
        },
        {
          id: "CANDEROUSORDO",
          recommended: {
            value: 20500,
            type: "Power",
          },
        },
        {
          id: "HK47",
          recommended: {
            value: 20500,
            type: "Power",
          },
        },
        {
          id: "JUHANI",
          recommended: {
            value: 20500,
            type: "Power",
          },
        },
        {
          id: "CARTHONASI",
          recommended: {
            value: 20500,
            type: "Power",
          },
        },
      ],
    },
    gas,
    jkl,
    {
      id: "CAPITALEXECUTOR",
      prerequisites: [
        {
          id: "VADER",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "ADMIRALPIETT",
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "BOBAFETT",
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "DENGAR",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "IG88",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "BOSSK",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "TIEFIGHTERPILOT",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "TIEADVANCED",
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
        {
          id: "TIEBOMBERIMPERIAL",
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
        {
          id: "HOUNDSTOOTH",
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
        {
          id: "SLAVE1",
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
        {
          id: "IG2000",
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
        {
          id: "TIEFIGHTERIMPERIAL",
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
        {
          id: "RAZORCREST",
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
          prerequisites: [
            {
              ...beskarMando,
              requirement: {
                value: 7,
                type: "Stars",
              },
            },
          ],
        },
        {
          tags: ["Capital Ship"],
          count: 1,
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
      ],
    },
    {
      id: "GRANDINQUISITOR",
      prerequisites: [
        {
          id: "SECONDSISTER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "SEVENTHSISTER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "NINTHSISTER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "EIGHTHBROTHER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "FIFTHBROTHER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
      ],
    },
    {
      id: "CAPITALPROFUNDITY",
      prerequisites: [
        {
          id: "ADMIRALRADDUS",
          requirement: {
            value: 9,
            type: "Relic",
          },
        },
        {
          id: "CASSIANANDOR",
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "DASHRENDAR",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "MONMOTHMA",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "BISTAN",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "JYNERSO",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "HERASYNDULLAS3",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "OUTRIDER",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "UWINGROGUEONE",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "UWINGSCARIF",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "XWINGRED2",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "XWINGRED3",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "YWINGREBEL",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "GHOST",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          tags: ["Capital Ship"],
          count: 1,
          requirement: {
            value: 7,
            type: "Stars",
          },
          recommended: {
            value: 67000,
            type: "Power",
          },
        },
      ],
    },
  ],
};

const galacticLegends = {
  id: "galactic_legends",
  table: "Galactic Legends",
  characters: [
    {
      id: "GLREY",
      prerequisites: [
        {
          ...jtr,
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "FINN",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "RESISTANCETROOPER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "REY",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "RESISTANCEPILOT",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "POE",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "EPIXPOE",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "AMILYNHOLDO",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "ROSETICO",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "EPIXFINN",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          ...bb8,
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "SMUGGLERCHEWBACCA",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          ...raddus,
          requirement: {
            value: 5,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "GRANDMASTERLUKE",
      prerequisites: [
        {
          ...jtr,
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "MONMOTHMA",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          ...chewy,
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "OLDBENKENOBI",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          ...c3p0,
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          ...r2d2,
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          ...jkl,
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "YWINGREBEL",
          requirement: {
            value: 6,
            type: "Stars",
          },
        },
        {
          id: "WEDGEANTILLES",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "BIGGSDARKLIGHTER",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "PRINCESSLEIA",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "ADMINISTRATORLANDO",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "HERMITYODA",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
      ],
    },
    {
      id: "SUPREMELEADERKYLOREN",
      prerequisites: [
        {
          id: "KYLORENUNMASKED",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "FIRSTORDERTROOPER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "FIRSTORDEROFFICERMALE",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "KYLOREN",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "PHASMA",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "FIRSTORDEREXECUTIONER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "SMUGGLERHAN",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "FOSITHTROOPER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "FIRSTORDERSPECIALFORCESPILOT",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "GENERALHUX",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "FIRSTORDERTIEPILOT",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          ...palpatine,
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          ...finalizer,
          requirement: {
            value: 5,
            type: "Stars",
          },
        },
      ],
    },
    {
      id: "SITHPALPATINE",
      prerequisites: [
        {
          ...palpatine,
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "VADER",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "ADMIRALPIETT",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "DIRECTORKRENNIC",
          requirement: {
            value: 4,
            type: "Relic",
          },
        },
        {
          id: "DARTHSIDIOUS",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "ROYALGUARD",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "SITHMARAUDER",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "COUNTDOOKU",
          requirement: {
            value: 6,
            type: "Relic",
          },
        },
        {
          id: "MAUL",
          requirement: {
            value: 4,
            type: "Relic",
          },
        },
        {
          id: "TIEBOMBERIMPERIAL",
          requirement: {
            value: 6,
            type: "Stars",
          },
        },
        {
          id: "ANAKINKNIGHT",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          ...thrawn,
          requirement: {
            value: 6,
            type: "Relic",
          },
        },
        {
          id: "GRANDMOFFTARKIN",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "COLONELSTARCK",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "VEERS",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
      ],
    },
    {
      id: "JEDIMASTERKENOBI",
      prerequisites: [
        {
          id: "GENERALKENOBI",
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "CAPITALNEGOTIATOR",
          requirement: {
            value: 6,
            type: "Stars",
          },
        },
        {
          id: "MACEWINDU",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "AAYLASECURA",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "BOKATAN",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "QUIGONJINN",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "MAGNAGUARD",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "CLONESERGEANTPHASEI",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "WATTAMBOR",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "GRIEVOUS",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "CADBANE",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "CC2224",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "JANGOFETT",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "SHAAKTI",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          ...gmy,
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
      ],
    },
    {
      id: "LORDVADER",
      prerequisites: [
        {
          id: "BADBATCHHUNTER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "BADBATCHTECH",
          requirement: {
            value: 5,
            type: "Stars",
          },
        },
        {
          id: "BADBATCHWRECKER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "TUSKENRAIDER",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          ...padme,
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          ...gas,
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "EMBO",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "CT210408",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "BADBATCHECHO",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "COUNTDOOKU",
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "ZAMWESELL",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "YWINGCLONEWARS",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "GRANDMOFFTARKIN",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "ARCTROOPER501ST",
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "NUTEGUNRAY",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
      ],
    },
    {
      id: "JABBATHEHUTT",
      prerequisites: [
        {
          id: "KRRSANTAN",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "HANSOLO",
          requirement: {
            value: 8,
            type: "Stars",
          },
        },
        {
          id: "GAMORREANGUARD",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "GREEDO",
          requirement: {
            value: 6,
            type: "Relic",
          },
        },
        {
          id: "OUTRIDER",
          requirement: {
            value: 7,
            type: "Stars",
          },
        },
        {
          id: "UNDERCOVERLANDO",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "JEDIKNIGHTLUKE",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "JAWA",
          requirement: {
            value: 3,
            type: "Relic",
          },
        },
        {
          id: "URORRURRR",
          requirement: {
            value: 4,
            type: "Relic",
          },
        },
        {
          id: "C3POLEGENDARY",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
      ],
    },
  ],
};

module.exports = [legendary, galacticLegends];
