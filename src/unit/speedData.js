module.exports = {
  ADMIRALACKBAR: {
    leader: {
      value: 20,
      tags: ["Rebel"],
    },
  },
  ADMIRALPIETT: {
    leader: {
      note: "Applies -15 Speed to all Light Side enemies. Not calculated.",
    },
  },
  ASAJVENTRESS: {
    leader: {
      value: 30,
      tags: ["Nightsister"],
    },
    unique: [
      {
        value: 15,
        tags: ["Self"],
        note: "15 Speed per Enemy with no buffs. It is assumed in calculations that there are 5 Enemies and none start with debuffs.",
      },
    ],
  },
  BOBAFETT: {
    leader: {
      note: "Increases Bounty Hunter allies' Speed for each Debuffed Enemy. Not calculated.",
    },
  },
  BOBAFETTSCION: {
    leader: {
      omicron: {
        value: 30,
        tags: ["Bounty Hunter", "Scoundrel"],
        mode: "Territory Wars",
      },
    },
  },
  BOSSK: {
    leader: {
      note: "All Bounty Hunter allies will gain 50 speed after the contract payout.",
    },
  },
  PHASMA: {
    leader: {
      omicron: {
        value: 100,
        tags: ["Self"],
        mode: "Territory Wars",
      },
    },
  },
  CHIEFCHIRPA: {
    leader: {
      omicron: {
        value: 30,
        tags: ["Ewok"],
        mode: "Grand Arena",
      },
    },
  },
  DARTHREVAN: {
    leader: {
      note: "Increases Sith Empire allies' Speed by 15 per debuff on themselves. Not calculated.",
    },
  },
  DASHRENDAR: {
    leader: {
      value: 10,
      tags: ["Scoundrel & Support", "Scoundrel & Healer"],
    },
  },
  VEERS: {
    leader: {
      value: 20,
      tags: ["Imperial Trooper"],
    },
  },
  GRANDMOFFTARKIN: {
    leader: {
      value: 30,
      tags: ["Empire"],
    },
  },
  HERASYNDULLAS3: {
    leader: {
      omicron: {
        value: 30,
        tags: ["Phoenix"],
        mode: "Territory War",
      },
    },
  },
  IDENVERSIOEMPIRE: {
    leader: {
      value: 35,
      tags: ["Imperial Trooper"],
    },
  },
  JANGOFETT: {
    leader: {
      value: 30,
      tags: ["Scoundrel"],
    },
  },
  JEDIKNIGHTLUKE: {
    leader: {
      note: "Sets all enemies' speed to his base speed at the start of Jedi Knight Luke's first turn. Not calculated.",
    },
  },
  JEDIKNIGHTREVAN: {
    leader: {
      value: 5,
      tags: ["Jedi", "Old Republic"],
      scalesBy: ["Jedi", "Old Republic"],
    },
  },
  JEDIMASTERKENOBI: {
    leader: {
      value: 30,
      tags: ["Light Side"],
    },
  },
  GRANDMASTERLUKE: {
    leader: {
      value: 40,
      tags: ["Jedi"],
    },
  },
  KYLORENUNMASKED: {
    leader: {
      value: 30,
      tags: ["First Order"],
    },
  },
  ADMINISTRATORLANDO: {
    leader: {
      value: 15,
      tags: ["Scoundrel", "Rebel"],
    },
  },
  LOBOT: {
    leader: {
      value: 25,
      tags: ["Droid"],
    },
    unique: [
      {
        value: 0.055,
        tags: ["Self"],
        scalesBy: ["Droid"],
      },
    ],
  },
  LORDVADER: {
    //todo: test
    leader: {
      value: 20,
      tags: ["Dark Side"],
      special: {
        value: 40,
        tags: ["Empire", "Unaligned Force User & Dark Side"],
      },
    },
    unique: [
      {
        //grants speed up
        value: 0.25,
        tags: ["Unaligned Force User & Dark Side"],
        note: "Granted via Speed Up",
      },
    ],
  },
  MOTHERTALZIN: {
    leader: {
      value: 30,
      tags: ["Nightsister"],
    },
  },
  NUTEGUNRAY: {
    leader: {
      note: "Adds 15% Speed to Separatist allies for each Extortion on Enemies. Not Calculated",
    },
  },
  QIRA: {
    leader: {
      value: 20,
      tags: ["Scoundrel & Support", "Scoundrel & Healer"],
    },
  },
  QUIGONJINN: {
    leader: {
      value: 30,
      tags: ["Jedi"],
    },
  },
  HOTHLEIA: {
    leader: {
      omicron: {
        value: 0.35,
        tags: ["Rebel"],
        mode: "Territory Battles",
      },
    },
  },
  GLREY: {
    leader: {
      value: 30,
      tags: ["Light Side"],
    },
  },
  SHAAKTI: {
    leader: {
      value: 35,
      tags: ["Clone Trooper"],
    },
  },
  SITHPALPATINE: {
    leader: {
      value: 20,
      tags: ["Dark Side"],
      special: {
        value: 40,
        tags: ["Sith"],
      },
    },
  },
  SUPREMELEADERKYLOREN: {
    leader: {
      value: 30,
      tags: ["Dark Side"],
    },
  },
  THEMANDALORIAN: {
    leader: {
      value: 20,
      tags: ["Scoundrel"],
    },
  },
  AHSOKATANO: {
    unique: [
      {
        value: 25,
        tags: ["Self"],
        special: {
          value: 50,
          scaledBy: ["ANAKINKNIGHT"],
          tags: ["Self"],
          note: "Granted due to Jedi Knight Anakin being present, thus granting Ahsoka Crit Avoidance and in turn the speed boost.",
        },
      },
    ],
  },
  AMILYNHOLDO: {
    unique: [
      {
        value: 50,
        note: "Granted only while not taunting, which is not present at the start of battle.",
        tags: ["Self"],
      },
    ],
  },
  C3POLEGENDARY: {
    unique: [
      {
        value: 20,
        tags: ["Self"],
      },
    ],
  },
  CT7567: {
    unique: [
      {
        value: 0.04,
        tags: ["501st"],
        scalesBy: ["501st"],
      },
    ],
  },
  DARTHTALON: {
    unique: [
      {
        value: 20,
        tags: ["Sith"],
      },
    ],
  },
  VADER: {
    unique: [
      {
        value: 8,
        tags: ["Self"],
        scalesBy: ["Sith", "Empire", "Enemy: Rebel", "Enemy: Jedi"],
      },
    ],
  },
  DROIDEKA: {
    unique: [
      {
        value: 0.5,
        tags: ["Self"],
        note: "Granted only while damage immunity is not present, which is not at the start of battle.",
      },
    ],
  },
  JAWAENGINEER: {
    unique: [
      {
        value: 10,
        tags: ["Self"],
        scalesBy: ["Droid", "Jawa"],
      },
    ],
  },
  KIADIMUNDI: {
    //todo test this
    unique: [
      {
        value: 30,
        tags: ["Galactic Republic & Jedi"],
        conditions: {
          allAllies: true,
          tags: ["Galactic Republic & Jedi"],
        },
      },
      {
        value: 20,
        note: "Granted due to being in Ataru form at the start of battle.",
        tags: ["Self"],
      },
    ],
  },
  MONMOTHMA: {
    unique: [
      {
        value: 50,
        tags: ["Self"],
      },
    ],
  },
  PAPLOO: {
    unique: [
      {
        value: 0.25,
        tags: ["Self"],
        note: "Granted only while not taunting, which is not present at the start of battle.",
      },
    ],
  },
  BADBATCHTECH: {
    unique: [
      {
        value: 1,
        tags: ["Self"],
        scalesBy: ["Clone Trooper"],
        special: {
          value: 2,
          tags: ["Self"],
          scalesBy: ["Bad Batch"],
        },
      },
    ],
  },
  WEDGEANTILLES: {
    unique: [
      {
        value: 9,
        tags: ["Self", "BIGGSDARKLIGHTER"],
        scalesBy: ["Ally"],
      },
    ],
  },
  ZAMWESELL: {
    unique: [
      {
        omicron: {
          value: 0.05,
          tags: ["Self"],
          mode: "Grand Arena",
          scalesBy: ["Bounty Hunter", "!Self"],
        },
      },
      {
        omicron: {
          value: 0.2,
          tags: ["Bounty Hunter", "!Self"],
          mode: "Grand Arena",
          scalesBy: ["Self"],
          scaleSource: "unique",
        },
      },
    ],
  },
};
