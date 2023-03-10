module.exports = {
  "50RT": {
    leader: [
      {
        value: 40,
        tags: ["Self"],
        conditions: [
          {
            allAllies: true,
            tags: ["Droid"],
          },
        ],
        type: "speed",
      },
      {
        value: 0.35,
        type: "defense",
        tags: ["Droid"],
        abilityId: "leaderskill_50RT",
      },
    ],
  },
  AMILYNHOLDO: {
    unique: [
      {
        value: 50,
        note: "Granted only while not taunting, which is not present at the start of battle.",
        tags: ["Self"],
        abilityId: "uniqueskill_AMILYNHOLDO01",
        type: "speed",
      },
    ],
  },
  ADMIRALACKBAR: {
    leader: [
      {
        value: 20,
        type: "speed",
        tags: ["Rebel"],
        abilityId: "leaderskill_ADMIRALACKBAR",
      },
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  ADMIRALPIETT: {
    leader: [
      {
        note: "Applies -15 Speed to all Light Side enemies. Not calculated.",
        type: "speed",
        abilityId: "leaderskill_ADMIRALPIETT",
      },
    ],
  },
  ADMIRALRADDUS: {
    leader: [
      {
        value: 8,
        tags: ["Rogue One"],
        scalesBy: ["Rogue One"],
        abilityId: "leaderskill_ADMIRALRADDUS",
        type: "speed",
      },
      {
        omicron: {
          value: 30,
          tags: ["Rogue One"],
          mode: "Grand Arena",
          abilityId: "leaderskill_ADMIRALRADDUS",
          sourceId: "sparkOfRebellionBuff",
          type: "speed",
        },
      },
      {
        value: 0.1,
        type: "health",
        tags: ["Rogue One"],
        scaledBy: ["Rogue One"],
        abilityId: "leaderskill_ADMIRALRADDUS",
      },
      {
        omicron: {
          value: 0.4,
          type: "protection",
          tags: ["Rogue One"],
          mode: "Grand Arena",
          abilityId: "leaderskill_ADMIRALRADDUS",
        },
      },
    ],
    unique: [
      {
        value: 0.3,
        type: "defense",
        tags: ["Self"],
        abilityId: "uniqueskill_ADMIRALRADDUS01",
      },
      {
        value: 30,
        tags: ["JYNERSO"],
        abilityId: "uniqueskill_ADMIRALRADDUS01",
        sourceId: "sparkOfRebellionBuff",
        type: "speed",
      },
    ],
  },
  AHSOKATANO: {
    unique: [
      {
        value: 25,
        tags: ["Self"],
        abilityId: "uniqueskill_AHSOKATANO01",
        conditions: [
          {
            tags: ["!ANAKINKNIGHT"],
          },
        ],
        type: "speed",
      },
      {
        value: 50,
        conditions: [
          {
            tags: ["ANAKINKNIGHT"],
          },
        ],
        tags: ["Self"],
        note: "Granted due to Jedi Knight Anakin being present, thus granting Ahsoka Crit Avoidance and in turn the speed boost.",
        type: "speed",
      },
      {
        value: 0.4,
        type: "health",
        tags: ["Self"],
        abilityId: "uniqueskill_AHSOKATANO01",
        conditions: [
          {
            tags: ["!ANAKINKNIGHT"],
          },
        ],
      },
      {
        value: 0.8,
        type: "health",
        tags: ["Self"],
        abilityId: "uniqueskill_AHSOKATANO01",
        conditions: [
          {
            tags: ["ANAKINKNIGHT"],
          },
        ],
      },
    ],
  },
  ASAJVENTRESS: {
    leader: [
      {
        value: 30,
        type: "speed",
        tags: ["Nightsister"],
        abilityId: "leaderskill_ASAJVENTRESS",
      },
    ],
    unique: [
      {
        omicron: {
          value: 0.3,
          type: "health",
          tags: ["Self"],
          abilityId: "uniqueskill_ASAJVENTRESS01",
          mode: "Grand Arena",
        },
      },
      {
        value: 15,
        type: "speed",
        tags: ["Self"],
        abilityId: "uniqueskill_ASAJVENTRESS01",
        note: "15 Speed per Enemy with no buffs. It is assumed in calculations that there are 5 Enemies and none start with debuffs.",
      },
    ],
  },
  BARRISSOFFEE: {
    leader: [
      {
        value: 0.2,
        type: "heatlh",
        tags: ["Jedi"],
        abilityId: "leaderskill_BARRISSOFFEE",
      },
      {
        value: 0.1,
        type: "health",
        tags: ["!Jedi"],
      },
    ],
  },
  BASTILASHAN: {
    leader: [
      {
        value: 200,
        type: "protection up",
        tags: ["Jedi"],
        abilityId: "leaderskill_BASTILASHAN",
      },
    ],
  },
  BASTILASHANDARK: {
    unique: [
      {
        value: 0.5,
        type: "defense",
        tags: ["Self", "Leader Slot"],
        abilityId: "uniqueskill_BASTILASHANDARK02",
      },
      {
        value: 0.7,
        type: "health",
        tags: ["Self", "DARTHREVAN & Leader Slot"],
        abilityId: "uniqueskill_BASTILASHANDARK03",
      },
    ],
  },
  DARTHREVAN: {
    leader: [
      {
        abilityId: "leaderskill_DARTHREVAN",
        note: "Increases Sith Empire allies' Speed by 15 per debuff on themselves. Not calculated.",
        type: "speed",
      },
    ],
  },
  BAZEMALBUS: {
    unique: [
      {
        type: "health",
        tags: ["Self", "CHIRRUTIMWE"],
        abilityId: "uniqueskill_BAZEMALBUS02",
        valueScale: "Max Health",
      },
    ],
  },
  BOBAFETT: {
    leader: [
      {
        value: 0.5,
        valueScale: "Potency (Bounty Hunter)",
        tags: ["Bounty Hunter"],
        abilityId: "leaderskill_BOBAFETT",
      },
      {
        abilityId: "leaderskill_BOBAFETT",
        type: "speed",
        note: "Increases Bounty Hunter allies' Speed for each Debuffed Enemy. Not calculated.",
      },
    ],
  },
  BOBAFETTSCION: {
    leader: [
      {
        omicron: {
          value: 30,
          type: "speed",
          tags: ["Bounty Hunter", "Scoundrel"],
          mode: "Territory Wars",
          abilityId: "leaderskill_BOBAFETTSCION",
        },
      },
      {
        omicron: {
          value: 0.3,
          type: "health",
          mode: "Territory Wars",
          tags: ["Bounty Hunter", "Scoundrel"],
          abilityId: "leaderskill_BOBAFETTSCION",
        },
      },
      {
        omicron: {
          value: 0.3,
          type: "protection",
          mode: "Territory Wars",
          tags: ["Bounty Hunter", "Scoundrel"],
          abilityId: "leaderskill_BOBAFETTSCION",
        },
      },
      {
        omicron: {
          value: 0.3,
          type: "damage mitigation",
          mode: "Territory Wars",
          tags: ["Bounty Hunter", "Scoundrel"],
          abilityId: "leaderskill_BOBAFETTSCION",
        },
      },
      {
        omicron: {
          value: 1,
          type: "health",
          mode: "Territory Wars",
          tags: ["Self"],
          abilityId: "leaderskill_BOBAFETTSCION",
        },
      },
      {
        omicron: {
          value: 1,
          type: "protection",
          mode: "Territory Wars",
          tags: ["Self"],
          abilityId: "leaderskill_BOBAFETTSCION",
        },
      },
    ],
  },
  BOKATAN: {
    unique: [
      {
        value: 0.2,
        type: "protection",
        tags: ["Mandalorian"],
        scaledBy: ["Mandalorian"],
        abilityId: "uniqueskill_BOKATAN01",
        valueScale: "Max Health",
      },
    ],
  },
  BOSSK: {
    leader: [
      {
        note: "All Bounty Hunter allies will gain 50 speed after the contract payout.",
        abilityId: "leaderskill_BOSSK",
        type: "speed",
      },
      {
        value: 0.5,
        type: "protection",
        tags: ["Bounty Hunter"],
        abilityId: "leaderskill_BOSSK",
      },
      {
        value: 1,
        type: "defense",
        tags: ["Bounty Hunter"],
        abilityId: "leaderskill_BOSSK",
      },
    ],
    //unique grants defense and max health while taunting, but hes not a pretaunter
  },
  CARTHONASI: {
    leader: [
      {
        omicron: {
          value: 0.2,
          type: "defense",
          tags: ["Old Republic"],
          scaledBy: ["Old Republic"],
          abilityId: "leaderskill_CARTHONASI",
          mode: "Territory Battle",
        },
      },
      {
        omicron: {
          value: 0.2,
          type: "health",
          tags: ["Old Republic"],
          scaledBy: ["Old Republic"],
          abilityId: "leaderskill_CARTHONASI",
          mode: "Territory Battle",
        },
      },
    ],
  },
  CASSIANANDOR: {
    unique: [
      {
        value: 0.2,
        type: "protection up",
        tags: ["Rebel"],
        abilityId: "uniqueskill_CASSIANANDOR01",
      },
    ],
  },
  CC2224: {
    leader: [
      {
        value: 0.6,
        type: "defense",
        scaledBy: ["Clone Trooper"],
        tags: ["Self"],
        abilityId: "leaderskill_CC2224",
      },
      {
        value: 0.3,
        type: "defense",
        scaledBy: ["Clone Trooper"],
        tags: ["Clone Trooper", "!Self"],
        abilityId: "leaderskill_CC2224",
      },
    ],
  },
  CLONEWARSCHEWBACCA: {
    leader: [
      {
        value: 50,
        flat: true,
        type: "defense",
        tags: ["Allies"],
        abilityId: "uniqueskill_CLONEWARSCHEWBACCA01",
      },
    ],
  },
  COMMANDERAHSOKA: {
    unique: [
      {
        value: 0.5,
        type: "health",
        conditions: [
          {
            tags: [
              "Light Side & Unaligned Force User",
              "Galactic Republic",
              "Scoundrel",
            ],
          },
        ],
        tags: ["Light Side"],
        abilityId: "uniqueskill_COMMANDERAHSOKA01",
      },
      {
        value: 0.5,
        type: "defense",
        conditions: [
          {
            tags: [
              "Light Side & Unaligned Force User",
              "Galactic Republic",
              "Scoundrel",
            ],
          },
        ],
        tags: ["Light Side"],
        abilityId: "uniqueskill_COMMANDERAHSOKA01",
      },
    ],
    //increased with fewer allies. probably cant be calculated
  },
  COMMANDERLUKESKYWALKER: {
    leader: [
      {
        value: 0.5,
        type: "defense",
        tags: ["Rebel"],
        abilityId: "leaderskill_COMMANDERLUKESKYWALKER",
      },
    ],
    unique: [
      {
        value: 0.5,
        type: "defense",
        tags: ["Self"],
        abilityId: "uniqueskill_COMMANDERLUKESKYWALKER01",
        //while not call to action
      },
    ],
  },
  CT5555: {
    leader: [
      {
        value: 0.5,
        type: "defense",
        tags: ["Clone Trooper"],
        abilityId: "leaderskill_CT5555",
      },
      {
        value: 0.25,
        type: "defense",
        tags: ["!Clone Trooper"],
        abilityId: "leaderskill_CT5555",
      },
    ],
  },
  CT7567: {
    leader: [
      {
        value: 0.2,
        type: "health",
        tags: ["Clone Trooper & !501st"],
        abilityId: "leaderskill_CT7567",
      },
      {
        value: 0.4,
        type: "health",
        tags: ["Clone Trooper & 501st"],
        abilityId: "leaderskill_CT7567",
      },
      {
        value: 0.1,
        type: "health",
        tags: ["!Clone Trooper"],
        abilityId: "leaderskill_CT7567",
      },
    ],
    unique: [
      {
        value: 0.04,
        tags: ["501st"],
        scalesBy: ["501st"],
        abilityId: "uniqueskill_REX01",
        type: "speed",
      },
    ],
  },
  DARKTROOPER: {
    unique: [
      {
        setHealth: 0.25,
        tags: ["Self"],
        abilityId: "uniqueskill_DARKTROOPER01",
      },
      {
        setProtection: 0.25,
        tags: ["Self"],
        abilityId: "uniqueskill_DARKTROOPER01",
      },
      {
        immuneHealthIncrease: true,
        tags: ["Self"],
        abilityId: "uniqueskill_DARKTROOPER01",
      },
      {
        immuneProtectionIncrease: true,
        tags: ["Self"],
        abilityId: "uniqueskill_DARKTROOPER01",
      },
      {
        value: 100, //25 per stack of Dark Trooper Squad
        type: "defense",
        flat: true,
        tags: ["Self"],
        abilityId: "uniqueskill_DARKTROOPER01",
      },
    ],
  },
  DARTHMALGUS: {
    leader: [
      {
        value: 10,
        tags: ["Sith Empire"],
        scalesBy: ["Sith Empire"],
        abilityId: "leaderskill_DARTHMALGUS",
        type: "speed",
      },
      {
        omicron: {
          value: 30,
          tags: ["Sith Empire"],
          mode: "Grand Arena",
          abilityId: "leaderskill_DARTHMALGUS",
          type: "speed",
        },
      },
      {
        value: 0.1,
        type: "health",
        tags: ["Sith Empire"],
        scaledBy: ["Sith Empire"],
        abilityId: "leaderskill_DARTHMALGUS",
      },
      {
        omicron: {
          value: 0.15,
          type: "damage mitigation",
          tags: ["Sith Empire"],
          abilityId: "leaderskill_DARTHMALGUS",
          mode: "Grand Arena",
        },
      },
      {
        omicron: {
          value: 0.5,
          type: "health",
          tags: ["Self"],
          conditions: [
            {
              allAllies: true,
              tags: ["Sith"],
            },
          ],
          abilityId: "leaderskill_DARTHMALGUS",
          mode: "Grand Arena",
        },
      },
      {
        omicron: {
          value: 0.5,
          type: "protection",
          tags: ["Self"],
          conditions: [
            {
              allAllies: true,
              tags: ["Sith"],
            },
          ],
          abilityId: "leaderskill_DARTHMALGUS",
          mode: "Grand Arena",
        },
      },
    ],
    unique: [
      {
        value: 0.05,
        type: "health",
        tags: ["Self"],
        scaledBy: ["Sith", "!Self"],
        abilityId: "uniquekill_DARTHMALGUS01",
      },
      {
        value: 0.05,
        type: "protection",
        tags: ["Self"],
        scaledBy: ["Sith", "!Self"],
        abilityId: "uniquekill_DARTHMALGUS01",
      },
      {
        value: 0.1,
        type: "health",
        tags: ["Self"],
        scaledBy: ["Sith Empire", "!Self"],
        abilityId: "uniquekill_DARTHMALGUS01",
      },
      {
        value: 0.1,
        type: "health",
        tags: ["Self"],
        scaledBy: ["Sith Empire", "!Self"],
        abilityId: "uniquekill_DARTHMALGUS01",
      },
      {
        value: 0.1,
        type: "defense",
        tags: ["Self"],
        abilityId: "uniquekill_DARTHMALGUS01",
        conditions: [
          {
            allAllies: true,
            tags: ["Sith"],
          },
        ],
      },
    ],
  },
  DARTHSIDIOUS: {
    unique: [
      {
        omicron: {
          tags: ["Sith", "!Self"],
          type: "health",
          valueScale: "Potency (Self)",
          value: 0.5,
          mode: "Territory Wars",
        },
      },
    ],
  },
  DARTHTALON: {
    unique: [
      {
        value: 20,
        tags: ["Sith"],
        abilityId: "uniqueskill_DARTHTALON02",
        type: "speed",
        omicron: {
          mode: "Grand Arena",
        },
      },
      {
        tags: ["Sith"],
        type: "health",
        value: 0.3,
      },
    ],
  },
  DASHRENDAR: {
    leader: [
      {
        value: 10,
        tags: [
          "Scoundrel & Support & !Light Side",
          "Scoundrel & Healer & !Light Side",
        ],
        abilityId: "leaderskill_DASHRENDAR",
        type: "speed",
      },
      {
        value: 20,
        tags: [
          "Scoundrel & Support & Light Side",
          "Scoundrel & Healer & Light Side",
        ],
        abilityId: "leaderskill_DASHRENDAR",
        type: "speed",
      },
      {
        value: 0.3,
        type: "health",
        tags: ["Scoundrel & Tank & Light Side"],
        abilityId: "leaderskill_DASHRENDAR",
      },
      {
        value: 0.15,
        type: "health",
        tags: ["Scoundrel & Tank & !Light Side"],
        abilityId: "leaderskill_DASHRENDAR",
      },
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
    unique: [
      {
        value: 0.2,
        type: "health",
        tags: ["Scoundrel"],
        abilityId: "uniqueskill_DASHRENDAR01",
      },
    ],
  },
  DIRECTORKRENNIC: {
    unique: [
      {
        omicron: {
          mode: "Grand Arena",
          tags: ["Self", "DEATHTROOPER"],
          value: 0.3,
          type: "health",
        },
      },
    ],
  },
  EETHKOTH: {
    leader: [
      {
        value: 60,
        flat: true,
        tags: ["Jedi"],
        type: "defense",
      },
    ],
  },
  EIGHTHBROTHER: {
    unique: [
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "health",
      },
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "protection",
      },
    ],
    leader: [
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
  },
  EMBO: {
    leader: [
      {
        omicron: {
          value: 0.4,
          tags: ["Bounty Hunter"],
          type: "protection",
          mode: "Territory Wars",
        },
      },
      {
        omicron: {
          value: 0.3,
          tags: ["Bounty Hunter"],
          type: "defense",
          mode: "Territory Wars",
        },
      },
    ],
  },
  EMPERORPALPATINE: {
    leader: [
      {
        value: 0.35,
        tags: ["Empire", "Sith"],
        type: "health",
      },
    ],
    unique: [
      {
        value: 0.5,
        tags: ["Self"],
        type: "protection",
      },
    ],
  },
  ENFYSNEST: {
    unique: [
      {
        value: 100,
        type: "protection up",
      },
    ],
  },
  FENNECSHAND: {
    leader: [
      {
        value: 1,
        type: "protection",
        tags: ["Self"],
        conditions: [
          {
            solo: true,
          },
        ],
      },
      {
        value: 1,
        type: "health",
        tags: ["Self"],
        conditions: [
          {
            solo: true,
          },
        ],
      },
      {
        value: 1,
        type: "defense",
        tags: ["Self"],
        conditions: [
          {
            solo: true,
          },
        ],
      },
    ],
  },
  FIFTHBROTHER: {
    leader: [
      {
        value: 0.05,
        tags: ["Empire"],
        type: "health",
      },
      {
        value: 0.5,
        tags: ["Empire"],
        type: "defense",
      },
      {
        value: 0.3,
        tags: ["Inquisitorious"],
        type: "health",
      },
      {
        value: 0.3,
        tags: ["Inquisitorious"],
        type: "defense",
      },
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
    unique: [
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "health",
      },
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "protection",
      },
    ],
  },
  FINN: {
    leader: [
      {
        value: 0.6,
        tags: ["Resistance"],
        type: "defense",
      },
      {
        value: 0.3,
        tags: ["!Resistance"],
        type: "defense",
      },
      {
        omicron: {
          value: 0.6,
          tags: ["Resistance"],
          type: "protection",
          mode: "Territory Battle",
          conditions: [
            {
              allAllies: true,
              tags: ["!Galactic Legend"],
            },
          ],
        },
      },
      {
        omicron: {
          value: 0.6,
          tags: ["Resistance"],
          type: "health",
          mode: "Territory Battle",
          conditions: [
            {
              allAllies: true,
              tags: ["!Galactic Legend"],
            },
          ],
        },
      },
      {
        omicron: {
          value: 1,
          tags: ["!Resistance"],
          type: "protection up",
          mode: "Territory Battle",
          conditions: [
            {
              allAllies: true,
              tags: ["!Galactic Legend"],
            },
          ],
        },
      },
    ],
  },
  FIRSTORDERTIEPILOT: {
    unique: [
      {
        omicron: {
          tags: ["Light Side", "!Light Side"],
          type: "health",
          mode: "Grand Arena",
          value: 0.5,
        },
      },
    ],
  },
  GARSAXON: {
    leader: [
      {
        tags: ["Empire"],
        type: "defense",
        value: 0.4,
      },
    ],
  },
  ZEBS3: {
    unique: [
      {
        tags: ["Self"],
        type: "protection",
        value: 0.4,
        valueScale: "health",
      },
      {
        tags: ["!Self", "Phoenix"],
        conditions: [
          {
            leader: ["HERASYNDULLAS3"],
          },
        ],
        type: "protection",
        value: 0.4,
        valueScale: "health",
      },
    ],
  },
  GENERALKENOBI: {
    leader: [
      {
        tags: ["Jedi", "Clone Trooper"],
        type: "health",
        value: 0.3,
      },
      {
        tags: ["Jedi", "Clone Trooper"],
        type: "defense",
        value: 0.7,
      },
    ],
  },
  GENERALSKYWALKER: {
    unique: [
      {
        tags: ["Self"],
        type: "defense",
        value: 0.25,
      },
      {
        tags: ["Self"],
        type: "protection",
        value: 0.15,
      },
    ],
  },
  GEONOSIANBROODALPHA: {
    leader: [
      {
        tags: ["Geonosian"],
        type: "protection",
        flat: true,
        value: 150000,
      },
      {
        tags: ["Geonosian"],
        type: "health",
        flat: true,
        value: 150000,
      },
    ],
  },
  GRANDADMIRALTHRAWN: {
    leader: [
      {
        tags: ["Empire"],
        type: "protection",
        value: 0.15,
      },
    ],
  },
  GRANDINQUISITOR: {
    leader: [
      {
        value: 10,
        type: "speed",
        tags: ["Empire"],
      },
      {
        value: 15,
        type: "speed",
        tags: ["Inquisitorious"],
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
      },
      {
        tags: ["Empire"],
        type: "health",
        value: 0.2,
      },
      {
        tags: ["Empire"],
        type: "protection",
        value: 0.2,
      },
      {
        tags: ["Inquisitorious"],
        type: "health",
        value: 0.46,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
      },
      {
        tags: ["Inquisitorious"],
        type: "protection",
        value: 0.46,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
      },
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
    unique: [
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "health",
      },
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "protection",
      },
    ],
  },
  GRANDMOFFTARKIN: {
    leader: [
      {
        value: 30,
        tags: ["Empire"],
        abilityId: "leaderskill_GRANDMOFFTARKIN",
        type: "speed",
      },
    ],
    unique: [
      {
        value: 1,
        valueScale: "Potency (Self)",
        tags: ["Self"],
        type: "defense",
      },
    ],
  },
  GREEFKARGA: {
    leader: [
      {
        value: 0.3,
        tags: ["Bounty Hunter"],
        type: "protection",
      },
    ],
  },
  HERASYNDULLAS3: {
    leader: [
      {
        omicron: {
          value: 30,
          tags: ["Phoenix"],
          mode: "Territory Wars",
          abilityId: "leaderskill_HERASYNDULLAS3",
          type: "speed",
        },
      },
      {
        omicron: {
          value: 0.5,
          type: "health",
          tags: ["Phoenix"],
          mode: "Territory Wars",
          abilityId: "leaderskill_HERASYNDULLAS3",
        },
      },
    ],
  },
  HK47: {
    unique: [
      {
        value: 0.5,
        type: "defense",
        tags: ["Self", "DARTHREVAN & Leader Slot"],
      },
    ],
  },
  BADBATCHHUNTER: {
    leader: [
      {
        value: 0.35,
        type: "protection",
        tags: ["Bad Batch"],
      },
      {
        value: 0.35,
        type: "health",
        tags: ["Bad Batch"],
      },
    ],
  },
  VEERS: {
    leader: [
      {
        value: 20,
        tags: ["Imperial Trooper"],
        abilityId: "leaderskill_VEERS",
        type: "speed",
      },
    ],
  },
  IDENVERSIOEMPIRE: {
    leader: [
      {
        value: 35,
        tags: ["Imperial Trooper"],
        abilityId: "leaderskill_IDENVERSIOEMPIRE",
        type: "speed",
      },
      {
        omicron: {
          value: 0.35,
          type: "health",
          tags: ["Imperial Trooper"],
          conditions: [
            {
              allAllies: true,
              tags: ["!Leader & !Self"],
            },
          ],
          abilityId: "leaderskill_IDENVERSIOEMPIRE",
          mode: "Grand Arena",
        },
      },
      {
        omicron: {
          value: 0.35,
          type: "protection",
          tags: ["Imperial Trooper"],
          conditions: [
            {
              allAllies: true,
              tags: ["!Leader & !Self"],
            },
          ],
          abilityId: "leaderskill_IDENVERSIOEMPIRE",
          mode: "Grand Arena",
        },
      },
    ],
  },
  IG11: {
    unique: [
      {
        value: 0.2,
        type: "protection",
        valueScale: "health",
        tags: ["Self"],
        conditions: [
          {
            tags: ["!KUIIL"],
          },
        ],
      },
      {
        value: 0.4,
        type: "protection",
        valueScale: "health",
        tags: ["Self"],
        conditions: [
          {
            tags: ["KUIIL"],
          },
        ],
      },
    ],
  },
  IMAGUNDI: {
    leader: [
      {
        value: 30,
        flat: true,
        type: "defense",
        tags: ["Light Side", "!Light Side"],
      },
    ],
  },
  IMPERIALPROBEDROID: {
    unique: [
      {
        type: "health",
        value: 0.5,
        tags: ["Self"],
      },
      {
        omicron: {
          mode: "Territory Battle",
        },
      },
    ],
  },
  JANGOFETT: {
    leader: [
      {
        value: 30,
        tags: ["Scoundrel"],
        abilityId: "leaderskill_JANGOFETT",
        type: "speed",
      },
    ],
    unique: [
      {
        value: 0.5,
        type: "health",
        tags: ["Self"],
      },
    ],
  },
  JEDIKNIGHTLUKE: {
    leader: [
      {
        abilityId: "leaderskill_JEDIKNIGHTLUKE",
        note: "Sets all enemies' speed to his base speed at the start of Jedi Knight Luke's first turn. Not calculated.",
        type: "speed",
      },
    ],
  },
  JEDIKNIGHTREVAN: {
    leader: [
      {
        value: 5,
        tags: ["Jedi", "Old Republic"],
        scalesBy: ["Jedi", "Old Republic"],
        abilityId: "leaderskill_JEDIKNIGHTREVAN",
        type: "speed",
      },
    ],
    unique: [
      {
        value: 0.1,
        tags: ["Self"],
        conditions: [
          {
            leader: ["!JEDIKNIGHTREVAN"],
          },
        ],
        type: "protection",
      },
      {
        value: 0.1,
        tags: ["Self"],
        conditions: [
          {
            leader: ["!JEDIKNIGHTREVAN"],
          },
        ],
        type: "health",
      },
      {
        value: 0.1,
        tags: ["Self"],
        conditions: [
          {
            leader: ["!JEDIKNIGHTREVAN"],
          },
        ],
        type: "defense",
      },
      {
        value: 0.05,
        tags: ["!Self", "Light Side"],
        conditions: [
          {
            leader: ["!JEDIKNIGHTREVAN"],
          },
        ],
        type: "protection",
      },
      {
        value: 0.05,
        tags: ["!Self", "Light Side"],
        conditions: [
          {
            leader: ["!JEDIKNIGHTREVAN"],
          },
        ],
        type: "health",
      },
      {
        value: 0.05,
        tags: ["!Self", "Light Side"],
        conditions: [
          {
            leader: ["!JEDIKNIGHTREVAN"],
          },
        ],
        type: "defense",
      },
      {
        value: 0.2,
        tags: ["Self"],
        conditions: [
          {
            leader: ["JEDIKNIGHTREVAN"],
          },
        ],
        type: "protection",
      },
      {
        value: 0.2,
        tags: ["Self"],
        conditions: [
          {
            leader: ["JEDIKNIGHTREVAN"],
          },
        ],
        type: "health",
      },
      {
        value: 0.2,
        tags: ["Self"],
        conditions: [
          {
            leader: ["JEDIKNIGHTREVAN"],
          },
        ],
        type: "defense",
      },
      {
        value: 0.1,
        tags: ["!Self", "Light Side"],
        conditions: [
          {
            leader: ["JEDIKNIGHTREVAN"],
          },
        ],
        type: "protection",
      },
      {
        value: 0.1,
        tags: ["!Self", "Light Side"],
        conditions: [
          {
            leader: ["JEDIKNIGHTREVAN"],
          },
        ],
        type: "health",
      },
      {
        value: 0.1,
        tags: ["!Self", "Light Side"],
        conditions: [
          {
            leader: ["JEDIKNIGHTREVAN"],
          },
        ],
        type: "defense",
      },
    ],
  },
  JEDIMASTERKENOBI: {
    leader: [
      {
        value: 30,
        tags: ["Light Side"],
        abilityId: "leaderskill_JEDIMASTERKENOBI",
        type: "speed",
      },
      {
        value: 0.25,
        type: "health",
        tags: ["Light Side"],
        abilityId: "leaderskill_JEDIMASTERKENOBI",
      },
      {
        value: 0.75,
        type: "protection up",
        tags: ["Galactic Republic"],
        abilityId: "leaderskill_JEDIMASTERKENOBI",
      },
    ],
    unique: [
      {
        value: 0.1,
        type: "protection",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.1,
        type: "health",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.3,
        type: "damage mitigation",
        tags: ["Self"],
      },
    ],
  },
  GRANDMASTERLUKE: {
    leader: [],
  },
  GRANDMASTERLUKE: {
    leader: [
      {
        value: 40,
        tags: ["Jedi"],
        abilityId: "leaderskill_GRANDMASTERLUKE",
        type: "speed",
      },
      {
        value: 0.1,
        type: "health",
        tags: ["Light Side & !Jedi"],
      },
      {
        value: 0.1,
        type: "protection",
        tags: ["Light Side & !Jedi"],
      },
      {
        value: 0.2,
        type: "health",
        tags: ["Jedi"],
      },
      {
        value: 0.2,
        type: "protection",
        tags: ["Jedi"],
      },
    ],
    unique: [
      {
        value: 0.1,
        type: "protection",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.1,
        type: "health",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.3,
        type: "damage mitigation",
        tags: ["Self"],
      },
    ],
  },
  JOLEEBINDO: {
    unique: [
      {
        value: 0.3,
        type: "health",
        tags: ["Self"],
      },
    ],
  },
  JYNERSO: {
    unique: [
      {
        omicron: {
          value: 0.3,
          type: "health",
          tags: ["Rogue One"],
          mode: "Territory Wars",
        },
      },
    ],
  },
  KIADIMUNDI: {
    unique: [
      {
        value: 30,
        tags: ["Galactic Republic & Jedi"],
        conditions: [
          {
            allAllies: true,
            tags: ["Galactic Republic & Jedi"],
          },
        ],
        type: "speed",
      },
      {
        value: 20,
        note: "Granted due to being in Ataru form at the start of battle.",
        tags: ["Self"],
        type: "speed",
      },
      {
        value: 0.4,
        type: "health",
        tags: ["Jedi & Galactic Republic"],
        conditions: [
          {
            allAllies: true,
            tags: ["Jedi & Galactic Republic"],
          },
        ],
      },
    ],
  },
  KITFISTO: {
    leader: [
      {
        value: 45,
        flat: true,
        type: "defense",
        tags: ["Jedi"],
      },
    ],
  },
  KUIIL: {
    unique: [
      {
        value: 0.4,
        type: "health",
        tags: ["Scoundrel", "Droid"],
        valueScale: "health",
      },
      {
        value: 0.4,
        type: "protection",
        tags: ["Scoundrel", "Droid"],
        valueScale: "protection",
      },
    ],
  },
  NUTEGUNRAY: {
    leader: [
      {
        abilityId: "leaderskill_NUTEGUNRAY",
        note: "Adds 15% Speed to Separatist allies for each Extortion on Enemies. Not Calculated",
        type: "speed",
      },
    ],
  },
  KYLORENUNMASKED: {
    leader: [
      {
        value: 30,
        tags: ["First Order"],
        abilityId: "leaderskill_KYLORENUNMASKED",
        type: "speed",
      },
    ],
  },
  QIRA: {
    leader: [
      {
        value: 20,
        tags: ["Scoundrel & Support", "Scoundrel & Healer"],
        abilityId: "leaderskill_QIRA",
        type: "speed",
      },
    ],
  },
  KYLEKATARN: {
    unique: [
      {
        value: 0.5,
        type: "defense",
        tags: ["Rebel Fighter"],
        conditions: [
          {
            enemyLeader: ["Sith"],
          },
        ],
      },
      {
        value: 0.25,
        type: "health",
        tags: ["Rebel Fighter"],
        conditions: [
          {
            enemyLeader: ["Sith"],
          },
        ],
      },
      {
        omicron: {
          value: 0.75,
          type: "protection",
          mode: "Territory Battle",
          tags: ["Rebel Fighter", "Jedi"],
        },
      },
    ],
  },
  L3_37: {
    unique: [
      {
        value: 0.25,
        type: "protection",
        tags: ["Self"],
      },
    ],
  },
  VADER: {
    unique: [
      {
        value: 8,
        tags: ["Self"],
        scalesBy: ["Sith", "Empire", "Enemy: Rebel", "Enemy: Jedi"],
        abilityId: "uniqueskill_VADER01",
        type: "speed",
      },
    ],
  },
  LORDVADER: {
    leader: [
      {
        value: 20,
        tags: ["Dark Side & !Empire & !Unaligned Force User"],
        type: "speed",
      },
      {
        value: 40,
        tags: ["Empire", "Dark Side & Unaligned Force User"],
        type: "speed",
      },
      {
        value: 0.15,
        type: "health",
        tags: ["Dark Side & !Empire & !Unaligned Force User"],
      },
      {
        value: 0.3,
        type: "health",
        tags: ["Empire", "Unaligned Force User"],
      },
    ],
    unique: [
      {
        value: 0.25,
        tags: ["Unaligned Force User & Dark Side"],
        note: "Granted via Speed Up",
        type: "speed",
      },
      {
        value: 0.1,
        type: "protection",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.1,
        type: "health",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.3,
        type: "damage mitigation",
        tags: ["Self"],
      },
    ],
  },
  LUKESKYWALKER: {
    unique: [
      {
        omicron: {
          value: 0.3,
          type: "defense",
          tags: ["Self"],
          mode: "Territory Wars",
        },
      },
      {
        omicron: {
          value: 0.3,
          type: "health",
          tags: ["Self"],
          mode: "Territory Wars",
        },
      },
    ],
  },
  MACEWINDOU: {
    leader: [
      {
        value: 0.2,
        type: "health",
        tags: ["Jedi"],
      },
    ],
    unique: [
      {
        value: 0.3,
        type: "health",
        tags: ["Self"],
      },
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
  },
  MAUL: {
    leader: [
      {
        value: 0.05,
        type: "health",
        tags: ["Mandolorian"],
        scalesBy: ["Mandalorian"],
      },
    ],
    unique: [
      {
        value: 0.2,
        type: "health",
        abilityId: "uniquekill_DARTHMAUL01",
        tags: ["Self"],
      },
    ],
  },
  HUMANTHUG: {
    unique: [
      {
        value: 0.25,
        type: "health",
        tags: ["Self"],
        scalesBy: ["Scoundrel"],
      },
      {
        value: 0.25,
        type: "protection",
        tags: ["Self"],
        scalesBy: ["Bounty Hunter"],
      },
      {
        value: 10,
        type: "speed",
        tags: ["Self"],
        scalesBy: ["Hutt Cartel"],
      },
    ],
  },
  MOFFGIDEONS1: {
    leader: [
      {
        value: 0.3,
        type: "health",
        tags: ["Dark Side"],
      },
      {
        value: 0.3,
        type: "protection",
        tags: ["Dark Side"],
      },
    ],
  },
  ADMINISTRATORLANDO: {
    leader: [
      {
        value: 15,
        tags: ["Scoundrel", "Rebel"],
        abilityId: "leaderskill_ADMINISTRATORLANDO",
        type: "speed",
      },
    ],
  },
  MOTHERTALZIN: {
    leader: [
      {
        value: 30,
        tags: ["Nightsister"],
        abilityId: "leaderskill_MOTHERTALZIN",
        type: "speed",
      },
    ],
  },
  MONMOTHMA: {},
  MONMOTHMA: {
    leader: [
      {
        value: 0.08,
        type: "health",
        tags: ["Revel Fighters", "Self"],
        valueScale: {
          allAllies: true,
          type: "health",
        },
      },
      {
        value: 0.08,
        type: "protection",
        tags: ["Revel Fighters", "Self"],
        valueScale: {
          allAllies: true,
          type: "protection",
        },
      },
      {
        value: 0.08,
        type: "defense",
        tags: ["Revel Fighters", "Self"],
        valueScale: {
          allAllies: true,
          type: "defense",
        },
      },
    ],
    unique: [
      {
        value: 50,
        tags: ["Self"],
        abilityId: "uniqueskill_MONMOTHMA01",
        type: "speed",
      },
    ],
  },
  NINTHSISTER: {
    leader: [
      {
        omicron: {
          value: 0.2,
          type: "defense",
          mode: "Territory Wars",
          tags: ["Empire"],
        },
      },
    ],
    unique: [
      {
        value: 0.05,
        type: "defense",
        tags: ["Self"],
        scaledBy: ["Empire & !Self"],
      },
      {
        value: 0.05,
        type: "health",
        tags: ["Self"],
        scaledBy: ["Empire & !Self"],
      },
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "health",
      },
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "protection",
      },
    ],
  },
  QUIGONJINN: {
    leader: [
      {
        value: 30,
        tags: ["Jedi"],
        abilityId: "leaderskill_QUIGONJINN",
        type: "speed",
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  DAKA: {
    leader: [
      {
        value: 0.5,
        tags: ["Nightsister"],
        type: "health",
      },
      {
        value: 0.5,
        tags: ["Nightsister"],
        type: "defense",
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
        type: "speed",
      },
    ],
  },
  PADMEAMIDALA: {
    leader: [
      {
        value: 0.5,
        type: "health",
        tags: [],
      },
    ],
  },
  JAWAENGINEER: {
    unique: [
      {
        value: 10,
        tags: ["Self"],
        scalesBy: ["Droid", "Jawa"],
        abilityId: "uniqueskill_JAWAENGINEER01",
        type: "speed",
      },
    ],
  },
  ROSETICO: {
    unique: [
      {
        omicron: {
          mode: "Grand Arena",
        },
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
        type: "speed",
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
  },
  BADBATCHTECH: {
    unique: [
      {
        value: 1,
        tags: ["Self"],
        scalesBy: ["Clone Trooper & !Bad Batch"],
        abilityId: "uniqueskill_BADBATCHTECH01",
        type: "speed",
      },
      {
        value: 2,
        tags: ["Self"],
        scalesBy: ["Bad Batch"],
        abilityId: "uniqueskill_BADBATCHTECH01",
        type: "speed",
      },
    ],
  },
  R2D2_LEGENDARY: {
    unique: [
      {
        value: 0.1,
        type: "protection",
        tags: ["Self"],
        scalesBy: ["Droid"],
      },
      {
        value: 0.1,
        type: "health",
        tags: ["Self"],
        scalesBy: ["Rebel"],
      },
      {
        value: 0.1,
        type: "protection",
        tags: ["Droid", "Galactic Republic", "Rebel", "Resistance", "!Self"],
        valueScale: {
          type: "protection",
          source: "Self",
        },
      },
      {
        value: 0.1,
        type: "health",
        tags: ["Droid", "Galactic Republic", "Rebel", "Resistance", "!Self"],
        valueScale: {
          type: "health",
          source: "Self",
        },
      },
    ],
  },
  GLREY: {
    leader: [
      {
        value: 30,
        tags: ["Light Side"],
        type: "speed",
      },
      {
        value: 0.3,
        type: "health",
        tags: ["Light Side"],
      },
    ],
    unique: [
      {
        value: 0.1,
        type: "protection",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.1,
        type: "health",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.3,
        type: "damage mitigation",
        tags: ["Self"],
      },
    ],
  },
  ROYALGUARD: {
    unique: [
      {
        value: 0.05,
        type: "health",
        tags: ["Self"],
        scalesBy: {
          leader: true,
          type: "health",
          tags: ["Empire"],
        },
      },
      {
        value: 2,
        type: "health",
        tags: ["Self"],
      },
    ],
  },
  SAVAGEOPRESS: {
    leader: [
      {
        value: 0.75,
        type: "defense",
        tags: ["Sith"],
      },
      {
        value: 0.75 / 2,
        type: "defense",
        tags: ["!Sith"],
      },
    ],
    unique: [
      {
        omicron: {
          value: 0.5,
          type: "defense",
          mode: "Grand Arena",
          tags: ["Self"],
        },
      },
      {
        omicron: {
          value: 0.5,
          type: "health",
          mode: "Grand Arena",
          tags: ["Self"],
        },
      },
      {
        omicron: {
          value: 30,
          type: "speed",
          mode: "Grand Arena",
          tags: ["Self"],
        },
      },
    ],
  },
  SECONDSISTER: {
    leader: [
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
    unique: [
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "health",
      },
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "protection",
      },
    ],
  },
  SEVENTHSISTER: {
    leader: [
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
    unique: [
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "health",
      },
      {
        value: 0.2,
        conditions: [
          {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        ],
        tags: ["Self"],
        type: "protection",
      },
    ],
  },
  SITHTROOPER: {
    unique: [
      {
        type: "defense",
        value: 1,
        tags: ["Self"],
      },
    ],
  },
  LOBOT: {
    leader: [
      {
        value: 25,
        tags: ["Droid"],
        abilityId: "leaderskill_LOBOT",
        type: "speed",
      },
    ],
    unique: [
      {
        value: 0.055,
        tags: ["Self"],
        scalesBy: ["Droid"],
        abilityId: "uniqueskill_LOBOT01",
        type: "speed",
      },
    ],
  },
  SHAAKTI: {
    leader: [
      {
        value: 35,
        tags: ["Clone Trooper"],
        abilityId: "leaderskill_SHAAKTI",
        type: "speed",
      },
      {
        value: 0.15,
        type: "health",
        tags: ["Galactic Republic"],
        scalesBy: ["Clone Trooper"],
      },
      {
        value: 0.05,
        type: "protection",
        tags: ["Galactic Republic"],
        scalesBy: ["Clone Trooper"],
      },
    ],
  },
  HOTHLEIA: {
    leader: [
      {
        omicron: {
          value: 0.35,
          tags: ["Rebel"],
          mode: "Territory Battle",
          abilityId: "leaderskill_HOTHLEIA",
          type: "speed",
        },
      },
    ],
  },
  PRINCESSLEIA: {
    unique: [
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  SHORETROOPER: {
    uinque: [
      {
        type: "health",
        value: 0.1,
        tags: ["Imperial Trooper"],
      },
    ],
  },
  SITHPALPATINE: {
    leader: [
      {
        value: 20,
        tags: ["Dark Side & !Sith"],
        abilityId: "leaderskill_SITHPALPATINE",
        type: "speed",
      },
      {
        value: 40,
        tags: ["Sith"],
        abilityId: "leaderskill_SITHPALPATINE",
        type: "speed",
      },
    ],
    unique: [
      {
        value: 0.1,
        type: "protection",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.1,
        type: "health",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.3,
        type: "damage mitigation",
        tags: ["Self"],
      },
    ],
  },
  STORMTROOPER: {
    unique: [
      {
        value: 0.4,
        tags: ["Self"],
        type: "defense",
        scalesBy: ["Empire"],
      },
      {
        value: 0.3,
        tags: ["Imperial Trooper"],
        type: "defense",
      },
    ],
  },
  STORMTROOPERHAN: {
    leader: [
      {
        value: 0.4,
        type: "defense",
        tags: ["Light Side", "!Light Side"],
      },
    ],
  },
  SUPREMELEADERKYLOREN: {
    leader: [
      {
        value: 30,
        tags: ["Dark Side"],
        type: "speed",
      },
    ],
    unique: [
      {
        value: 0.1,
        type: "protection",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.1,
        type: "health",
        scalesBy: "Relic",
        tags: ["Self"],
      },
      {
        value: 0.3,
        type: "damage mitigation",
        tags: ["Self"],
      },
    ],
  },
  STARKILLER: {
    unique: [
      {
        value: 0.3,
        tags: ["Self"],
        type: "defense",
      },
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  T3_M4: {
    unique: [
      {
        omicron: {
          mode: "Territory Wars",
          value: 0.3,
          type: "health",
        },
      },
    ],
  },
  ARMORER: {
    leader: [
      {
        type: "protection up",
        value: 2,
        tags: ["Mandalorian"],
      },
    ],
  },
  THEMANDALORIAN: {
    leader: [
      {
        value: 20,
        tags: ["Scoundrel"],
        abilityId: "leaderskill_THEMANDALORIAN",
        type: "speed",
      },
    ],
  },
  THEMANDALORIANBESKARARMOR: {
    leader: [
      {
        value: 0.05,
        type: "health",
        tags: ["Scoundrel"],
        scalesBy: ["Scoundrel"],
      },
      {
        value: 0.05,
        type: "protection",
        tags: ["Scoundrel"],
        scalesBy: ["Scoundrel"],
      },
    ],
  },
  C3POLEGENDARY: {
    unique: [
      {
        value: 20,
        tags: ["Self"],
        abilityId: "uniqueskill_C3POLEGENDARY01",
        type: "speed",
      },
    ],
  },
  C3POCHEWBACCA: {
    unique: [
      {
        value: 0.4,
        type: "protection",
        tags: ["Self"],
        conditions: [
          {
            leader: ["Rebel"],
          },
        ],
        source: "leader",
      },
      {
        value: 0.4,
        type: "health",
        tags: ["Self"],
        conditions: [
          {
            leader: ["Rebel"],
          },
        ],
        source: "leader",
      },
      {
        value: 0.4,
        type: "defense",
        tags: ["Self"],
        conditions: [
          {
            leader: ["Rebel"],
          },
        ],
        source: "leader",
      },
      {
        value: 0.2,
        type: "protection",
        tags: ["!Self", "Rebel"],
        conditions: [
          {
            leader: ["Rebel"],
          },
        ],
        source: "leader",
      },
      {
        value: 0.2,
        type: "health",
        tags: ["!Self", "Rebel"],
        conditions: [
          {
            leader: ["Rebel"],
          },
        ],
        source: "leader",
      },
      {
        value: 0.2,
        type: "defense",
        tags: ["!Self", "Rebel"],
        conditions: [
          {
            leader: ["Rebel"],
          },
        ],
        source: "leader",
      },
    ],
  },
  URORRURRR: {
    leader: [
      {
        value: 55,
        type: "defense",
        flat: true,
        tags: ["Tusken"],
      },
      {
        value: 55 / 2,
        type: "defense",
        flat: true,
        tags: ["!Tusken"],
      },
    ],
  },
  YOUNGCHEWBACCA: {
    unique: [
      {
        value: 0.8,
        type: "health",
        tags: ["Self"],
      },
      {
        setProtection: 0.6,
        tags: ["Self"],
      },
    ],
  },
  WAMPA: {
    unique: [
      {
        omicron: {
          mode: "Grand Arena",
          value: 0.75,
          type: "defense",
          tags: ["Self"],
          conditions: [
            {
              solo: true,
            },
          ],
        },
      },
      {
        omicron: {
          mode: "Grand Arena",
          value: 0.75,
          type: "health",
          tags: ["Self"],
          conditions: [
            {
              solo: true,
            },
          ],
        },
      },
      {
        omicron: {
          mode: "Grand Arena",
          value: 0.75,
          type: "protection",
          tags: ["Self"],
          conditions: [
            {
              solo: true,
            },
          ],
        },
      },
    ],
  },
  WATTAMBOR: {
    unique: [
      {
        tags: ["Separatist", "Dark Side & Droid"],
        value: 0.3,
        valueSource: "health",
        type: "protection",
      },
    ],
  },
  BADBATCHWRECKER: {
    unique: [
      {
        value: 0.2,
        type: "health",
        tags: ["Self"],
        scalesBy: ["Bad Batch", "!Self"],
      },
      {
        value: 0.2,
        type: "protection",
        tags: ["Self"],
        scalesBy: ["Bad Batch & !Self"],
      },
    ],
  },
  WEDGEANTILLES: {
    unique: [
      {
        value: 9,
        tags: ["Self", "BIGGSDARKLIGHTER"],
        scalesBy: ["Light Side & !Light Side"],
        abilityId: "uniqueskill_WEDGEANTILLES01",
        type: "speed",
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
          abilityId: "uniqueskill_ZAMWESELL01",
          type: "speed",
        },
      },
      {
        omicron: {
          value: 0.2,
          tags: ["Bounty Hunter", "!Self"],
          mode: "Grand Arena",
          scalesBy: ["Self"],
          scaleSource: "unique",
          abilityId: "uniqueskill_ZAMWESELL01",
          type: "speed",
        },
      },
      {
        value: 0.2,
        type: "health",
        tags: ["Self"],
        scaledBy: ["Soundrel & Support", "Scoundrel & Healer"],
      },
      {
        value: 0.2,
        type: "protection",
        tags: ["Self"],
        scaledBy: ["Soundrel & Tank"],
      },
      {
        omicron: {
          value: 0.4,
          type: "health",
          tags: ["Self"],
          scaledBy: ["Soundrel & Support", "Scoundrel & Healer"],
          mode: "Grand Arena",
        },
      },
      {
        omicron: {
          value: 0.4,
          type: "protection",
          tags: ["Self"],
          scaledBy: ["Soundrel & Tank"],
          mode: "Grand Arena",
        },
      },
      {
        omicron: {
          value: 0.2,
          type: "protection",
          tags: ["Self"],
          scaledBy: ["Bounty Hunter & !Self"],
          mode: "Grand Arena",
        },
      },
      {
        omicron: {
          value: 0.2,
          type: "health",
          tags: ["Self"],
          scaledBy: ["Bounty Hunter & !Self"],
          mode: "Grand Arena",
        },
      },
    ],
  },
  PHASMA: {
    leader: [
      {
        omicron: {
          value: 100,
          tags: ["Self"],
          mode: "Territory Wars",
          abilityId: "leaderskill_PHASMA",
          type: "speed",
        },
      },
    ],
  },
  CHIEFCHIRPA: {
    leader: [
      {
        omicron: {
          value: 30,
          tags: ["Ewok"],
          mode: "Grand Arena",
          abilityId: "leaderskill_CHIEFCHIRPA",
          type: "speed",
        },
      },
    ],
  },
  FULCRUMAHSOKA: {
    unique: [
      {
        omicron: {
          value: 0.25,
          type: "defense",
          mode: "Territory Wars",
          tags: ["Self"],
        },
      },
      {
        omicron: {
          value: 0.25,
          type: "health",
          mode: "Territory Wars",
          tags: ["Self"],
        },
      },
      {
        omicron: {
          value: 0.25,
          type: "protection",
          mode: "Territory Wars",
          tags: ["Self"],
        },
      },
      {
        omicron: {
          value: 35,
          type: "speed",
          mode: "Territory Wars",
          tags: ["Self"],
        },
      },
      {
        omicron: {
          value: 0.75,
          type: "defense",
          mode: "Territory Wars",
          tags: ["Self"],
          conditions: [
            {
              solo: true,
            },
          ],
        },
      },
      {
        omicron: {
          value: 0.75,
          type: "health",
          mode: "Territory Wars",
          tags: ["Self"],
          conditions: [
            {
              solo: true,
            },
          ],
        },
      },
      {
        omicron: {
          value: 0.75,
          type: "protection",
          mode: "Territory Wars",
          tags: ["Self"],
          conditions: [
            {
              solo: true,
            },
          ],
        },
      },
    ],
  },
  KRRSANTAN: {
    leader: [
      {
        value: 0.3,
        type: "health",
        tags: ["Scoundrel"],
      },
      {
        value: 0.3,
        type: "protection",
        tags: ["Scoundrel"],
      },
    ],
    unique: [
      {
        value: 0.3,
        type: "defense",
        tags: ["Self"],
      },
      {
        value: 0.3,
        type: "health",
        tags: ["Self"],
      },
      {
        omicron: {
          value: 0.4,
          type: "protection",
          tags: ["Self"],
          mode: "Grand Arena",
        },
      },
    ],
  },
  BENSOLO: {
    unique: [
      {
        value: 10,
        type: "speed",
        scalesBy: ["Light Side"],
        conditions: [
          {
            leader: ["REY", "REYJEDITRAINING", "GLREY"],
          },
          {
            allAllies: true,
            tags: ["Light Side"],
          },
        ],
      },
      {
        value: 0.15,
        type: "health",
        scalesBy: ["Light Side"],
        conditions: [
          {
            leader: ["REY", "REYJEDITRAINING", "GLREY"],
          },
          {
            allAllies: true,
            tags: ["Light Side"],
          },
        ],
      },
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  UNDERCOVERLANDO: {
    unique: [
      {
        omicron: {
          tags: ["Self"],
          value: 20,
          type: "speed",
          mode: "Territory Wars",
          conditions: [
            {
              allAllies: true,
              tags: ["Hutt Cartel"],
            },
          ],
        },
      },
    ],
  },
  BOUSHH: {
    unique: [
      {
        tags: ["Self"],
        value: 0.1,
        type: "health",
      },
      {
        tags: ["Self"],
        value: 0.1,
        type: "defense",
      },
      {
        tags: ["Self", "Light Side & Smuggler"],
        value: 10,
        type: "speed",
      },
    ],
    leader: [
      {
        tags: ["Bounty Hunter"],
        value: 0.25,
        type: "health",
      },
      {
        tags: ["Bounty Hunter"],
        value: 0.25,
        type: "protection",
      },
    ],
  },
  GAMORREANGUARD: {
    unique: [
      {
        tags: ["Self"],
        value: 0.1,
        type: "health",
        scalesBy: ["Hutt Cartel"],
      },
      {
        omicron: {
          tags: ["Self"],
          value: 0.5,
          type: "defense",
          mode: "Territory Battle",
        },
      },
      {
        omicron: {
          tags: ["Hutt Cartel & !Self"],
          value: 0.5,
          type: "health",
          mode: "Territory Battle",
        },
      },
      {
        omicron: {
          tags: ["Hutt Cartel & !Self"],
          value: 0.5,
          type: "protection",
          mode: "Territory Battle",
        },
      },
    ],
  },
  CHIEFNEBIT: {
    unique: [
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
  },
  MARAJADE: {
    unique: [
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
  },
  BT1: {
    unique: [
      {
        value: 5,
        type: "speed",
        scalesBy: ["Scoundrel"],
      },
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  TRIPLEZERO: {
    unique: [
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  SANASTARROS: {
    leader: [
      {
        value: 0.3,
        type: "defense",
        tags: ["Rebel & Scoundrel & Tank"],
      },
      {
        value: 0.3,
        type: "health",
        tags: ["Rebel & Scoundrel & Tank"],
      },
      {
        value: 0.3,
        type: "protection",
        tags: ["Rebel & Scoundrel & Tank"],
      },
    ],
  },
  THIRDSISTER: {
    leader: [
      {
        type: "health",
        value: 0.4,
        tags: ["Inquisitorious"],
      },
      {
        type: "speed",
        value: 30,
        tags: ["Inquisitorious"],
      },
    ],
    unique: [
      {
        type: "speed",
        value: 30,
        tags: ["Self"],
      },
      {
        type: "health",
        value: 0.3,
        tags: ["Self"],
      },
      {
        omicron: {
          type: "health",
          value: 0.3,
          tags: ["Self"],
          mode: "Grand Arena",
          conditions: {
            allAllies: true,
            tags: ["Inquisitorious"],
          },
        },
      },
    ],
  },
  DARTHTRAYA: {
    unique: [
      {
        omicron: {
          mode: "Grand Arena",
          type: "health",
          value: ".4",
          tags: ["Sith"],
        },
      },
    ],
  },
  DOCTORAPHRA: {
    unique: [
      {
        type: "speed",
        value: 20,
        tags: ["BT1", "TRIPLEZERO"],
      },
    ],
    leader: [
      {
        type: "health",
        value: 0.3,
        scalesBy: "potency",
        tags: ["Self"],
      },
      {
        type: "protection",
        value: 0.3,
        scalesBy: "potency",
        tags: ["Self"],
      },
      {
        type: "health",
        value: 0.2,
        tags: ["Dark Side & Droid", "DARTHVADER", "KRRSANTAN"],
      },
      {
        omicron: {
          mode: "Grand Arena",
          type: "speed",
          value: 20,
          tags: ["Dark Side & Droid", "Dark Side & Scoundrel"],
        },
      },
    ],
  },
  ZORIIBLISS_V2: {
    unique: [
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
      //   {
      //   type: 'speed',
      //   value: 35,
      //   tags: ["Resistance"],
      //   conditions: [{
      //     alliesCount: //todo
      // Resistance allies have +100% Potency while they have more allies than enemies and have +35 Speed while they have equal or fewer allies than enemies
      //   }]
      // }
    ],
  },
  DOCTORAPHRA: {
    unique: [
      {
        type: "protection",
        value: 0.5,
        tags: ["Self"],
        scaleSource: "health",
      },
      {
        type: "health",
        value: -0.5,
        tags: ["Self"],
      },
    ],
    leader: [
      {
        type: "health",
        value: 0.3,
        tags: ["Separatist"],
      },
      {
        type: "protection",
        value: 0.3,
        tags: ["Separatist"],
      },
      {
        omicron: {
          mode: "Territory Wars",
          type: "health",
          value: 0.75,
          tags: ["!Droid & Separatist"],
        },
      },
      {
        omicron: {
          mode: "Territory Wars",
          type: "protection",
          value: 0.75,
          tags: ["!Droid & Separatist"],
        },
      },
    ],
  },
  TUSKENCHIEFTAIN: {
    leader: [
      {
        omicron: {
          mode: "Grand Arena",
        },
      },
    ],
  },
  TUSKENHUNTRESS: {
    unique: [
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
  },
  CALKESTIS: {
    unique: [
      {
        value: 0.3,
        type: "health",
        tags: ["Unaligned Force User"],
      },
      {
        value: 0.3,
        type: "tenacity",
        tags: ["Unaligned Force User"],
      },
      {
        omicron: {
          mode: "Territory Wars",
        },
      },
    ],
  },
};
