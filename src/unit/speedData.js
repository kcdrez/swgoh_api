module.exports = {
  ADMIRALACKBAR: {
    leader: {
      value: 20,
      tags: ["Rebel"],
      abilityId: 'leaderskill_ADMIRALACKBAR'
    },
  },
  ADMIRALPIETT: {
    leader: {
      note: "Applies -15 Speed to all Light Side enemies. Not calculated.",
      abilityId: "leaderskill_ADMIRALPIETT"
    },
  },
  ASAJVENTRESS: {
    leader: {
      value: 30,
      tags: ["Nightsister"],
      abilityId: "leaderskill_ASAJVENTRESS"
    },
    unique: [
      {
        value: 15,
        tags: ["Self"],
        abilityId: "uniqueskill_ASAJVENTRESS01",
        note: "15 Speed per Enemy with no buffs. It is assumed in calculations that there are 5 Enemies and none start with debuffs.",
      },
    ],
  },
  BOBAFETT: {
    leader: {
      abilityId: 'leaderskill_BOBAFETT',
      note: "Increases Bounty Hunter allies' Speed for each Debuffed Enemy. Not calculated.",
    },
  },
  BOBAFETTSCION: {
    leader: {
      omicron: {
        value: 30,
        tags: ["Bounty Hunter", "Scoundrel"],
        mode: "Territory Wars",
        abilityId: "leaderskill_BOBAFETTSCION"
      },
    },
  },
  BOSSK: {
    leader: {
      note: "All Bounty Hunter allies will gain 50 speed after the contract payout.",
      abilityId: "leaderskill_BOSSK"
    },
  },
  PHASMA: {
    leader: {
      omicron: {
        value: 100,
        tags: ["Self"],
        mode: "Territory Wars",
        abilityId: "leaderskill_PHASMA"
      },
    },
  },
  CHIEFCHIRPA: {
    leader: {
      omicron: {
        value: 30,
        tags: ["Ewok"],
        mode: "Grand Arena",
        abilityId: "leaderskill_CHIEFCHIRPA"
      },
    },
  },
  DARTHREVAN: {
    leader: {
      abilityId: "leaderskill_DARTHREVAN",
      note: "Increases Sith Empire allies' Speed by 15 per debuff on themselves. Not calculated.",
    },
  },
  DASHRENDAR: {
    leader: {
      value: 10,
      tags: ["Scoundrel & Support", "Scoundrel & Healer"],
      abilityId: "leaderskill_DASHRENDAR"
    },
  },
  VEERS: {
    leader: {
      value: 20,
      tags: ["Imperial Trooper"],
      abilityId: "leaderskill_VEERS"
    },
  },
  GRANDMOFFTARKIN: {
    leader: {
      value: 30,
      tags: ["Empire"],
      abilityId: "leaderskill_GRANDMOFFTARKIN"
    },
  },
  HERASYNDULLAS3: {
    leader: {
      omicron: {
        value: 30,
        tags: ["Phoenix"],
        mode: "Territory War",
        abilityId: "leaderskill_HERASYNDULLAS3"
      },
    },
  },
  IDENVERSIOEMPIRE: {
    leader: {
      value: 35,
      tags: ["Imperial Trooper"],
      abilityId: "leaderskill_IDENVERSIOEMPIRE"
    },
  },
  JANGOFETT: {
    leader: {
      value: 30,
      tags: ["Scoundrel"],
      abilityId: "leaderskill_JANGOFETT"
    },
  },
  JEDIKNIGHTLUKE: {
    leader: {
      abilityId: "leaderskill_JEDIKNIGHTLUKE",
      note: "Sets all enemies' speed to his base speed at the start of Jedi Knight Luke's first turn. Not calculated.",
    },
  },
  JEDIKNIGHTREVAN: {
    leader: {
      value: 5,
      tags: ["Jedi", "Old Republic"],
      scalesBy: ["Jedi", "Old Republic"],
      abilityId: "leaderskill_JEDIKNIGHTREVAN"
    },
  },
  JEDIMASTERKENOBI: {
    leader: {
      value: 30,
      tags: ["Light Side"],
      abilityId: "leaderskill_JEDIMASTERKENOBI"
    },
  },
  GRANDMASTERLUKE: {
    leader: {
      value: 40,
      tags: ["Jedi"],
      abilityId: "leaderskill_GRANDMASTERLUKE"
    },
  },
  KYLORENUNMASKED: {
    leader: {
      value: 30,
      tags: ["First Order"],
      abilityId: "leaderskill_KYLORENUNMASKED"
    },
  },
  ADMINISTRATORLANDO: {
    leader: {
      value: 15,
      tags: ["Scoundrel", "Rebel"],
      abilityId: "leaderskill_ADMINISTRATORLANDO"
    },
  },
  LOBOT: {
    leader: {
      value: 25,
      tags: ["Droid"],
      abilityId: "leaderskill_LOBOT"
    },
    unique: [
      {
        value: 0.055,
        tags: ["Self"],
        scalesBy: ["Droid"],
        abilityId: "uniqueskill_LOBOT01"
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
      abilityId: "leaderskill_MOTHERTALZIN"
    },
  },
  NUTEGUNRAY: {
    leader: {
      abilityId: "leaderskill_NUTEGUNRAY",
      note: "Adds 15% Speed to Separatist allies for each Extortion on Enemies. Not Calculated",
    },
  },
  QIRA: {
    leader: {
      value: 20,
      tags: ["Scoundrel & Support", "Scoundrel & Healer"],
      abilityId: "leaderskill_QIRA"
    },
  },
  QUIGONJINN: {
    leader: {
      value: 30,
      tags: ["Jedi"],
      abilityId: "leaderskill_QUIGONJINN"
    },
  },
  HOTHLEIA: {
    leader: {
      omicron: {
        value: 0.35,
        tags: ["Rebel"],
        mode: "Territory Battles",
        abilityId: "leaderskill_HOTHLEIA"
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
      abilityId: "leaderskill_SHAAKTI"
    },
  },
  SITHPALPATINE: {
    leader: {
      value: 20,
      tags: ["Dark Side"],
      abilityId: "leaderskill_SITHPALPATINE",
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
      abilityId: "leaderskill_THEMANDALORIAN"
    },
  },
  AHSOKATANO: {
    unique: [
      {
        value: 25,
        tags: ["Self"],
        abilityId: "uniqueskill_AHSOKATANO01",
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
        abilityId: "uniqueskill_AMILYNHOLDO01"
      },
    ],
  },
  C3POLEGENDARY: {
    unique: [
      {
        value: 20,
        tags: ["Self"],
        abilityId: "uniqueskill_C3POLEGENDARY01"
      },
    ],
  },
  CT7567: {
    unique: [
      {
        value: 0.04,
        tags: ["501st"],
        scalesBy: ["501st"],
        abilityId: "uniqueskill_REX01"
      },
    ],
  },
  DARTHTALON: {
    unique: [
      {
        value: 20,
        tags: ["Sith"],
        abilityId: "uniqueskill_DARTHTALON02"
      },
    ],
  },
  VADER: {
    unique: [
      {
        value: 8,
        tags: ["Self"],
        scalesBy: ["Sith", "Empire", "Enemy: Rebel", "Enemy: Jedi"],
        abilityId: "uniqueskill_VADER01"
      },
    ],
  },
  DROIDEKA: {
    unique: [
      {
        value: 0.5,
        tags: ["Self"],
        abilityId: "uniqueskill_DROIDEKA01",
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
        abilityId: "uniqueskill_JAWAENGINEER01"
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
        abilityId: "uniqueskill_MONMOTHMA01"
      },
    ],
  },
  PAPLOO: {
    unique: [
      {
        value: 0.25,
        tags: ["Self"],
        abilityId: "uniqueskill_PAPLOO01",
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
        abilityId: "uniqueskill_BADBATCHTECH01",
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
        abilityId: "uniqueskill_WEDGEANTILLES01"
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
          abilityId: "uniqueskill_ZAMWESELL01"
        },
      },
      {
        omicron: {
          value: 0.2,
          tags: ["Bounty Hunter", "!Self"],
          mode: "Grand Arena",
          scalesBy: ["Self"],
          scaleSource: "unique",
          abilityId: "uniqueskill_ZAMWESELL01"
        },
      },
    ],
  },
};
