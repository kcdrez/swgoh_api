module.exports = {
  "50RT": {
    leader: [{
      value: .35,
      type: 'defense',
      tags: ["Droid"],
      abilityId: "leaderskill_50RT",
    }],
  },
  ADMIRALRADDUS: {
    leader: [{
      value: .1,
      type: 'health',
      tags: ["Rogue One"],
      scaledBy: ['Rogue One'],
      abilityId: "leaderskill_ADMIRALRADDUS",
    }, {
      omicron: {
        value: .4,
        type: 'protection',
        tags: ["Rogue One"],
        mode: 'Grand Arena',
        abilityId: "leaderskill_ADMIRALRADDUS",
      }
    }],
    unique: [{
      value: .30,
      type: 'defense',
      tags: ["Self"],
      abilityId: "uniqueskill_ADMIRALRADDUS01",
    }]
  },
  AHSOKATANO: {
    unique: [
      {
        value: 0.4,
        type: 'health',
        tags: ["Self"],
        abilityId: "uniqueskill_AHSOKATANO01",
        special: {
          value: .8,
          type: 'health',
          scaledBy: ["ANAKINKNIGHT"],
          tags: ["Self"],
          note: "Granted due to Jedi Knight Anakin being present, thus granting Ahsoka Crit Avoidance and in turn the speed boost.",
        },
      },
    ],
  },
  ASAJVENTRESS: {
    unique: [
      {
        omicron: {
          value: .3,
          type: 'health',
          tags: ["Self"],
          abilityId: "uniqueskill_ASAJVENTRESS01",
          mode: "Grand Arena",
        }
      },
    ],
  },
  BARRISSOFFEE: {
    leader: [{
      value: .2,
      type: 'heatlh',
      tags: ["Jedi"],
      abilityId: "leaderskill_BARRISSOFFEE",
      special: {
        value: .1,
        type: "health",
        tags: ['!Jedi']
      },
    }],
  },
  BASTILASHAN: {
    leader: [{
      value: 200,
      type: 'protection up',
      tags: ["Jedi"],
      abilityId: "leaderskill_BASTILASHAN",
    }],
  },
  BASTILASHANDARK: {
    unique: [
      {
        value: 0.5,
        type: 'defense',
        tags: ["Self", "Leader Slot"],
        abilityId: "uniqueskill_BASTILASHANDARK02",
      },
      {
        value: 0.7,
        type: 'health',
        tags: ["Self", "DARTHREVAN & Leader Slot"],
        abilityId: "uniqueskill_BASTILASHANDARK03",
      },
    ],
  },
  BAZEMALBUS: {
    unique: [
      {
        type: 'health',
        tags: ["Self", "CHIRRUTIMWE"],
        abilityId: "uniqueskill_BAZEMALBUS02",
        valueScale: 'Max Health'
      }
    ],
  },
  BOBAFETT: {
    leader: [{
      value: .5,
      valueScale: 'Potency (Bounty Hunter)',
      tags: ["Bounty Hunter"],
      abilityId: "leaderskill_BOBAFETT",
    }],
  },
  BOBAFETTSCION: {
    leader: [{
      omicron: {
        value: .3,
        type: 'health',
        mode: 'Territory War',
        tags: ["Bounty Hunter", "Scoundrel"],
        abilityId: "leaderskill_BOBAFETTSCION",
      }
    },
    {
      omicron: {
        value: .3,
        type: 'protection',
        mode: 'Territory War',
        tags: ["Bounty Hunter", "Scoundrel"],
        abilityId: "leaderskill_BOBAFETTSCION",
      }
    },
    {
      omicron: {
        value: .3,
        type: 'damage mitigation',
        mode: 'Territory War',
        tags: ["Bounty Hunter", "Scoundrel"],
        abilityId: "leaderskill_BOBAFETTSCION",
      }
    },
    {
      omicron: {
        value: 1,
        type: 'health',
        mode: 'Territory War',
        tags: ["Self"],
        abilityId: "leaderskill_BOBAFETTSCION",
      }
    },
    {
      omicron: {
        value: 1,
        type: 'protection',
        mode: 'Territory War',
        tags: ["Self"],
        abilityId: "leaderskill_BOBAFETTSCION",
      }
    }],
  },
  BOKATAN: {
    unique: [
      {
        value: .2,
        type: 'protection',
        tags: ["Mandalorian"],
        scaledBy: ['Mandalorian'],
        abilityId: "uniqueskill_BOKATAN01",
        valueScale: 'Max Health'
      }
    ],
  },
  BOSSK: {
    leader:
      [{
        value: .5,
        type: 'protection',
        tags: ["Bounty Hunter"],
        abilityId: "leaderskill_BOSSK",
      },
      {
        value: 1,
        type: 'defense',
        tags: ["Bounty Hunter"],
        abilityId: "leaderskill_BOSSK",
      }]
    //unique grants defense and max health while taunting, but hes not a pretaunter
  },
  CARTHONASI: {
    leader: [{
      omicron: {
        value: .2,
        type: 'defense',
        tags: ["Old Republic"],
        scaledBy: ["Old Republic"],
        abilityId: "leaderskill_CARTHONASI",
        mode: "Territory Battle"
      }
    }, {
      omicron: {
        value: .2,
        type: 'health',
        tags: ["Old Republic"],
        scaledBy: ["Old Republic"],
        abilityId: "leaderskill_CARTHONASI",
        mode: "Territory Battle"
      }
    }],
  },
  CASSIANANDOR: {
    unique: [{
      value: .2,
      type: 'protection up',
      tags: ["Rebel"],
      abilityId: "uniqueskill_CASSIANANDOR01",
    }]
  },
  CC2224: {
    leader:
      [{
        value: .60,
        type: 'defense',
        scaledBy: ['Clone Trooper'],
        tags: ["Self"],
        abilityId: "leaderskill_CC2224",
      },
      {
        value: .30,
        type: 'defense',
        scaledBy: ['Clone Trooper'],
        tags: ["Clone Trooper", "!Self"],
        abilityId: "leaderskill_CC2224",
      }]
  },
  CLONEWARSCHEWBACCA: {
    leader: [{
      value: 50,
      flat: true,
      type: 'defense',
      tags: ["Allies"],
      abilityId: "uniqueskill_CLONEWARSCHEWBACCA01",
    }]
  },
  COMMANDERAHSOKA: {
    unique: [{
      value: .5,
      type: 'health',
      conditions: {
        tags: ["Light Side & Unaligned Force User", "Galactic Republic", "Scoundrel"]
      },
      tags: ["Light Side"],
      abilityId: "uniqueskill_COMMANDERAHSOKA01",
    },
    {
      value: .50,
      type: 'defense',
      conditions: {
        tags: ["Light Side & Unaligned Force User", "Galactic Republic", "Scoundrel"]
      },
      tags: ["Light Side"],
      abilityId: "uniqueskill_COMMANDERAHSOKA01",
    }]
    //increased with fewer allies. probably cant be calculated
  },
  COMMANDERLUKESKYWALKER: {
    leader: [{
      value: .50,
      type: 'defense',
      tags: ["Rebel"],
      abilityId: "leaderskill_COMMANDERLUKESKYWALKER",
    }],
    unique: [{
      value: .50,
      type: 'defense',
      tags: ["Self"],
      abilityId: "uniqueskill_COMMANDERLUKESKYWALKER01",
      //while not call to action
    }]
  },
  CT5555: {
    leader: [{
      value: .50,
      type: 'defense',
      tags: ["Clone Trooper"],
      abilityId: "leaderskill_CT5555",
    },
    {
      value: .25,
      type: 'defense',
      tags: ["!Clone Trooper"],
      abilityId: "leaderskill_CT5555",
    }],
  },
  CT7567: {
    leader: [{
      value: .2,
      type: 'health',
      tags: ["Clone Trooper & !501st"],
      abilityId: "leaderskill_CT7567",
    },
    {
      value: .4,
      type: 'health',
      tags: ["Clone Trooper & 501st"],
      abilityId: "leaderskill_CT7567",
    },
    {
      value: .1,
      type: 'health',
      tags: ["!Clone Trooper"],
      abilityId: "leaderskill_CT7567",
    }],
  },
  DARKTROOPER: {
    unique: [{
      setHealth: .25,
      tags: ["Self"],
      abilityId: "uniqueskill_DARKTROOPER01",
    },
    {
      setProtection: .25,
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
      type: 'defense',
      flat: true,
      tags: ["Self"],
      abilityId: "uniqueskill_DARKTROOPER01",
    }]
  },
  DARTHMALGUS: {
    leader: [{
      value: .1,
      type: 'health',
      tags: ["Sith Empire"],
      scaledBy: ["Sith Empire"],
      abilityId: "leaderskill_DARTHMALGUS",
    }, {
      omicron: {
        value: .15,
        type: 'damage mitigation',
        tags: ["Sith Empire"],
        abilityId: "leaderskill_DARTHMALGUS",
        mode: 'Grand Arena'
      }
    },
    {
      omicron: {
        value: .5,
        type: 'health',
        tags: ["Self"],
        conditions: {
          allAllies: true,
          tags: ["Sith"],
        },
        abilityId: "leaderskill_DARTHMALGUS",
        mode: 'Grand Arena'
      }
    },
    {
      omicron: {
        value: .5,
        type: 'protection',
        tags: ["Self"],
        conditions: {
          allAllies: true,
          tags: ["Sith"],
        },
        abilityId: "leaderskill_DARTHMALGUS",
        mode: 'Grand Arena'
      }
    }],
    unique: [{
      value: .05,
      type: 'health',
      tags: ["Self"],
      scaledBy: ["Sith", "!Self"],
      abilityId: "uniquekill_DARTHMALGUS01",
    },
    {
      value: .05,
      type: 'protection',
      tags: ["Self"],
      scaledBy: ["Sith", "!Self"],
      abilityId: "uniquekill_DARTHMALGUS01",
    },
    {
      value: .1,
      type: 'health',
      tags: ["Self"],
      scaledBy: ["Sith Empire", "!Self"],
      abilityId: "uniquekill_DARTHMALGUS01",
    },
    {
      value: .1,
      type: 'health',
      tags: ["Self"],
      scaledBy: ["Sith Empire", "!Self"],
      abilityId: "uniquekill_DARTHMALGUS01",
    },
    {
      value: .10,
      type: 'defense',
      tags: ["Self"],
      abilityId: "uniquekill_DARTHMALGUS01",
      conditions: {
        allAllies: true,
        tags: ["Sith"]
      }
    }
    ]
  },
  DARTHMAUL: {
    unique: [{
      value: .2,
      type: 'health',
      abilityId: "uniquekill_DARTHMAUL01",
      tags: ["Self"]
    }]
  },
  DARTHSIDEOUS: {
    unique: [{
      omicron: {
        tags: ["Sith", "!Self"],
        type: "health",
        valueScale: 'Potency (Self)',
        value: .5,
        mode: 'Territory War'
      }
    }]
  },
  DARTHTALON: {
    unique: [{
      tags: ["Sith"],
      type: "health",
      value: .3,
    }]
  },
  DASHRENDAR: {
    leader: [{
      value: .3,
      type: "health",
      tags: ["Scoundrel & Tank & Light Side"],
      abilityId: "leaderskill_DASHRENDAR",
    },
    {
      value: .15,
      type: "health",
      tags: ["Scoundrel & Tank & !Light Side"],
      abilityId: "leaderskill_DASHRENDAR",
    }],
    unique: [{
      value: .2,
      type: "health",
      tags: ["Scoundrel"],
      abilityId: "uniqueskill_DASHRENDAR01",
    }],
  },
  DIRECTORKRENNIC: {
    unique: [{
      omicron: {
        mode: 'Grand Arena',
        tags: ["Self", "DEATHTROOPER"],
        value: .3,
        type: 'health'
      }
    }]
  },
  EETHKOTH: {
    leader: [{
      value: 60,
      flat: true,
      tags: ["Jedi"],
      type: "defense"
    }]
  },
  EIGHTHBROTHER: {
    unique: [{
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "health"
    }, {
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "protection"
    }]
  },
  EMBO: {
    leader: [{
      omicron: {
        value: .4,
        tags: ["Bounty Hunter"],
        type: "protection",
        mode: 'Territory War'
      }
    }, {
      omicron: {
        value: .30,
        tags: ["Bounty Hunter"],
        type: "defense",
        mode: 'Territory War'
      }
    }]
  },
  EMPERORPALPATINE: {
    leader: [{
      value: .35,
      tags: ["Empire", "Sith"],
      type: "health",
    }],
    unique: [{
      value: .5,
      tags: ["Self"],
      type: "protection",
    }]
  },
  ENFYSNEST: {
    unique: [{
      value: 100,
      type: 'protection up'
    }]
  },
  FENNECSHAND: {
    leader: [{
      value: 1,
      type: 'protection',
      tags: ['Self'],
      conditions: {
        solo: true
      }
    },
    {
      value: 1,
      type: 'health',
      tags: ['Self'],
      conditions: {
        solo: true
      },
    }, {
      value: 1,
      type: 'defense',
      tags: ['Self'],
      conditions: {
        solo: true
      },
    },
    ]
  },
  FIFTHBROTHER: {
    leader: [{
      value: .05,
      tags: ["Empire"],
      type: "health"
    },
    {
      value: .5,
      tags: ["Empire"],
      type: "defense"
    },
    {
      value: .30,
      tags: ["Inquisitorious"],
      type: "health"
    },
    {
      value: .30,
      tags: ["Inquisitorious"],
      type: "defense"
    }],
    unique: [{
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "health"
    }, {
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "protection"
    }]
  },
  FINN: {
    leader: [{
      value: .6,
      tags: ["Resistance"],
      type: "defense"
    }, {
      value: .3,
      tags: ["!Resistance"],
      type: "defense"
    },
    {
      omicron: {
        value: .6,
        tags: ["Resistance"],
        type: "protection",
        mode: 'Territory Battle',
        conditions: {
          allAllies: true,
          tags: ["!Galactic Legend"]
        }
      }
    },
    {
      omicron: {
        value: .6,
        tags: ["Resistance"],
        type: "health",
        mode: 'Territory Battle',
        conditions: {
          allAllies: true,
          tags: ["!Galactic Legend"]
        }
      }
    }, {
      omicron: {
        value: 1,
        tags: ["!Resistance"],
        type: "protection up",
        mode: 'Territory Battle',
        conditions: {
          allAllies: true,
          tags: ["!Galactic Legend"]
        }
      }
    }]
  },
  FIRSTORDERTIEPILOT: {
    unique: [{
      omicron: {
        tags: ["Light Side", "!Light Side"],
        type: "health",
        mode: 'Territory War',
        value: .5
      }
    }]
  },
  GARSAXON: {
    leader: [{
      tags: ["Empire"],
      type: "defense",
      value: .4
    }]
  },
  ZEBS3: {
    unique: [{
      tags: ["Self"],
      type: "protection",
      value: .4,
      valueScale: 'health'
    }, {
      tags: ["!Self", "Phoenix"],
      conditions: {
        leader: 'HERASYNDULLAS3'
      },
      type: "protection",
      value: .4,
      valueScale: 'health'
    }]
  },
  GENERALKENOBI: {
    leader: [{
      tags: ["Jedi", "Clone Trooper"],
      type: "health",
      value: .3,
    },
    {
      tags: ["Jedi", "Clone Trooper"],
      type: "defense",
      value: .7,
    }]
  },
  GENERALSKYWALKER: {
    unique: [{
      tags: ["Self"],
      type: "defense",
      value: .25,
    },
    {
      tags: ["Self"],
      type: "protection",
      value: .15,
    }]
  },
  GEONOSIANBROODALPHA: {
    leader: [{
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
    }]
  },
  GRANDADMIRALTHRAWN: {
    leader: [{
      tags: ["Empire"],
      type: "protection",
      value: .15,
    }]
  },
  GRANDINQUISITOR: { //check id is right
    leader: [{
      tags: ["Empire"],
      type: "health",
      value: .2,
    },
    {
      tags: ["Empire"],
      type: "protection",
      value: .2,
    }, {
      tags: ["Inquisitorious"],
      type: "health",
      value: .46,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      }
    },
    {
      tags: ["Inquisitorious"],
      type: "protection",
      value: .46,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      }
    }],
    unique: [{
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "health"
    }, {
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "protection"
    }]
  },
  GRANDMOFFTARKIN: {
    unique: [{
      value: 1,
      valueScale: 'Potency (Self)',
      tags: ["Self"],
      type: 'defense'
    }],
  },
  GREEFKARGA: {
    leader: [{
      value: .3,
      tags: ["Bounty Hunter"],
      type: 'protection'
    }]
  },
  HERASYNDULLAS3: {
    leader: {
      omicron: {
        value: .5,
        type: 'health',
        tags: ["Phoenix"],
        mode: "Territory War",
        abilityId: "leaderskill_HERASYNDULLAS3",
      },
    },
  },
  HK47: {
    unique: [{
      value: .5,
      type: 'defense',
      tags: ["Self", "DARTHREVAN & Leader Slot"],
    }]
  },
  BADBATCHHUNTER: {
    leader: [{
      value: .35,
      type: 'protection',
      tags: ["Bad Batch"],
    }, {
      value: .35,
      type: 'health',
      tags: ["Bad Batch"],
    }]
  },
  IDENVERSIOEMPIRE: {
    leader: [{
      omicron: {
        value: .35,
        type: 'health',
        tags: ["Imperial Trooper"],
        conditions: {
          allAllies: true,
          tags: ["!Leader & !Self"],
        },
        abilityId: "leaderskill_IDENVERSIOEMPIRE",
        mode: 'Grand Arena'
      }
    }, {
      omicron: {
        value: .35,
        type: 'protection',
        tags: ["Imperial Trooper"],
        conditions: {
          allAllies: true,
          tags: ["!Leader & !Self"],
        },
        abilityId: "leaderskill_IDENVERSIOEMPIRE",
        mode: 'Grand Arena'
      }
    }],
  },
  IG11: {
    unique: [{
      value: .2,
      type: 'protection',
      valueScale: 'health',
      tags: ["Self"],
      conditions: {
        tags: ["!KUIIL"]
      }
    }, {
      value: .4,
      type: 'protection',
      valueScale: 'health',
      tags: ["Self"],
      conditions: {
        tags: ["KUIIL"]
      }
    }]
  },
  IMAGUNDI: {
    leader: [{
      value: 30,
      flat: true,
      type: 'defense',
      tags: ["Light Side", "!Light Side"]
    }]
  },
  IMPERIALPROBEDROID: {
    unique: [{
      type: 'health',
      value: .5,
      tags: ['Self']
    }]
  },
  JANGOFETT: {
    unique: [{
      value: .5,
      type: 'health',
      tags: ["Self"],
    }],
  },
  JEDIKNIGHTREVAN: {
    unique: [{
      value: .1,
      tags: ["Self"],
      conditions: {
        isLeader: false
      },
      type: 'protection'
    },
    {
      value: .1,
      tags: ["Self"],
      conditions: {
        isLeader: false
      },
      type: 'health',
    },
    {
      value: .1,
      tags: ["Self"],
      conditions: {
        isLeader: false
      },
      type: 'defense'
    },
    {
      value: .05,
      tags: ["!Self", "Light Side"],
      conditions: {
        isLeader: false
      },
      type: 'protection'
    },
    {
      value: .05,
      tags: ["!Self", "Light Side"],
      conditions: {
        isLeader: false
      },
      type: 'health',
    },
    {
      value: .05,
      tags: ["!Self", "Light Side"],
      conditions: {
        isLeader: false
      },
      type: 'defense'
    }, {
      value: .2,
      tags: ["Self"],
      conditions: {
        isLeader: true
      },
      type: 'protection'
    },
    {
      value: .2,
      tags: ["Self"],
      conditions: {
        isLeader: true
      },
      type: 'health',
    },
    {
      value: .2,
      tags: ["Self"],
      conditions: {
        isLeader: true
      },
      type: 'defense'
    }, {
      value: .1,
      tags: ["!Self", "Light Side"],
      conditions: {
        isLeader: true
      },
      type: 'protection'
    },
    {
      value: .1,
      tags: ["!Self", "Light Side"],
      conditions: {
        isLeader: true
      },
      type: 'health',
    },
    {
      value: .1,
      tags: ["!Self", "Light Side"],
      conditions: {
        isLeader: true
      },
      type: 'defense'
    }],
  },
  JEDIMASTERKENOBI: {
    leader: [{
      value: .25,
      type: 'health',
      tags: ["Light Side"],
      abilityId: "leaderskill_JEDIMASTERKENOBI",
    }, {
      value: .75,
      type: 'protection up',
      tags: ["Galactic Republic"],
      abilityId: "leaderskill_JEDIMASTERKENOBI",
    }],
    unique: [{
      value: .1,
      type: 'protection',
      scalesBy: 'Relic',
      tags: ['Self']
    }, {
      value: .1,
      type: 'health',
      scalesBy: 'Relic',
      tags: ['Self']
    },
    {
      value: .3,
      type: 'damage mitigation',
      tags: ['Self']
    }]
  },
  GRANDMASTERLUKE: {
    leader: [{
      value: .1,
      type: 'health',
      tags: ["Light Side & !Jedi"],
    }, {
      value: .1,
      type: 'protection',
      tags: ["Light Side & !Jedi"],
    }, {
      value: .2,
      type: 'health',
      tags: ["Jedi"],
    }, {
      value: .2,
      type: 'protection',
      tags: ["Jedi"],
    }],
    unique: [{
      value: .1,
      type: 'protection',
      scalesBy: 'Relic',
      tags: ['Self']
    }, {
      value: .1,
      type: 'health',
      scalesBy: 'Relic',
      tags: ['Self']
    },
    {
      value: .3,
      type: 'damage mitigation',
      tags: ['Self']
    }]
  },
  JOLEEBINDO: {
    unique: [{
      value: .3,
      type: 'health',
      tags: ["Self"]
    }]
  },
  JYNERSO: {
    unique: [{
      omicron: {
        value: .3,
        type: 'health',
        tags: ["Rogue One"],
        mode: 'Territory War'
      }
    }]
  },
  KIADIMUNDI: {
    unique: [{
      value: .4,
      type: 'health',
      tags: ["Jedi & Galactic Republic"],
      conditions: {
        allAllies: true,
        tags: ["Jedi & Galactic Republic"],
      }
    }]
  },
  KITFISTO: {
    leader: [{
      value: 45,
      flat: true,
      type: 'defense',
      tags: ['Jedi']
    }]
  },
  KUIIL: {
    unique: [{
      value: .4,
      type: 'health',
      tags: ["Scoundrel", "Droid"],
      valueScale: "health"
    },
    {
      value: .4,
      type: 'protection',
      tags: ["Scoundrel", "Droid"],
      valueScale: "protection"
    }]
  },
  KYLEKATARN: {
    unique: [{
      value: .5,
      type: 'defense',
      tags: ["Rebel Fighter"],
      conditions: {
        enemyLeader: ["Sith"]
      }
    }, {
      value: .25,
      type: 'health',
      tags: ["Rebel Fighter"],
      conditions: {
        enemyLeader: ["Sith"]
      }
    },
    {
      omicron: {
        value: .75,
        type: 'protection',
        mode: 'Territory Battle',
        tags: ["Rebel Fighter", "Jedi"],
      }
    }]
  },
  L3_37: {
    unique: [{
      value: .25,
      type: 'protection',
      tags: ["Self"]
    }]
  },
  LORDVADER: {
    leader: [{
      value: .15,
      type: 'health',
      tags: ["Dark Side & !Empire & !Unaligned Force User"],
    }, {
      value: .3,
      type: 'health',
      tags: ["Empire", "Unaligned Force User"],
    }],
    unique: [{
      value: .1,
      type: 'protection',
      scalesBy: 'Relic',
      tags: ['Self']
    }, {
      value: .1,
      type: 'health',
      scalesBy: 'Relic',
      tags: ['Self']
    },
    {
      value: .3,
      type: 'damage mitigation',
      tags: ['Self']
    }]
  },
  LUKESKYWALKER: {
    unique: [{
      omicron: {
        value: .3,
        type: 'defense',
        tags: ["Self"],
        mode: 'Territory War'
      }
    }, {
      omicron: {
        value: .3,
        type: 'health',
        tags: ["Self"],
        mode: 'Territory War'
      }
    }]
  },
  MACEWINDOU: {
    leader: [{
      value: .2,
      type: 'health',
      tags: ["Jedi"],
    }],
    unique: [{
      value: .3,
      type: 'health',
      tags: ["Self"],
    }],
  },
  MAUL: {
    leader: [{
      value: .05,
      type: 'health',
      tags: ["Mandolorian"],
      scalesBy: ["Mandalorian"]
    }],
  },
  HUMANTHUG: {
    unique: [{
      value: .15,
      type: 'health',
      tags: ["Self"],
      scalesBy: ["Scoundrel"]
    }],
  },
  MOFFGIDEONS1: {
    leader: [{
      value: .3,
      type: 'health',
      tags: ["Dark Side"],
    },
    {
      value: .3,
      type: 'protection',
      tags: ["Dark Side"],
    }],
  },
  MONMOTHMA: {
    leader: [{
      value: .08,
      type: 'health',
      tags: ["Revel Fighters", "Self"],
      valueScale: {
        allAllies: true,
        type: 'health'
      }
    },
    {
      value: .08,
      type: 'protection',
      tags: ["Revel Fighters", "Self"],
      valueScale: {
        allAllies: true,
        type: 'protection'
      }
    }, {
      value: .08,
      type: 'defense',
      tags: ["Revel Fighters", "Self"],
      valueScale: {
        allAllies: true,
        type: 'defense'
      }
    }],
  },
  NINTHSISTER: {
    leader: [{
      omicron: {
        value: .20,
        type: 'defense',
        mode: 'Territory War',
        tags: ["Empire"],
      }
    }],
    unique: [{
      value: .05,
      type: 'defense',
      tags: ["Self"],
      scaledBy: ["Empire & !Self"]
    }, {
      value: .05,
      type: 'health',
      tags: ["Self"],
      scaledBy: ["Empire & !Self"]
    }, {
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "health"
    }, {
      value: .2,
      conditions: {
        allAllies: true,
        tags: ["Inquisitorious"]
      },
      tags: ["Self"],
      type: "protection"
    }],
  },
  DAKA: {
    leader: [{
      value: .5,
      tags: ["Nightsister"],
      type: 'health'
    }, {
      value: .5,
      tags: ["Nightsister"],
      type: 'defense'
    }]
  },
  PADMEAMIDALA: {
    leader: [{
      value: .5,
      type: 'health',
      tags: []
    }],
  },
  R2D2_LEGENDARY: {
    unique: [{
      value: .1,
      type: 'protection',
      tags: ["Self"],
      scalesBy: ["Droid"]
    }, {
      value: .1,
      type: 'health',
      tags: ["Self"],
      scalesBy: ["Rebel"]
    }, {
      value: .1,
      type: 'protection',
      tags: ["Droid", "Galactic Republic", "Rebel", "Resistance", "!Self"],
      valueScale: {
        type: 'protection',
        source: "Self"
      }
    }, {
      value: .1,
      type: 'health',
      tags: ["Droid", "Galactic Republic", "Rebel", "Resistance", "!Self"],
      valueScale: {
        type: 'health',
        source: "Self"
      }
    }],
  },
  GLREY: {
    leader: [{
      value: .30,
      type: 'health',
      tags: ["Light Side"],
    }],
    unique: [{
      value: .1,
      type: 'protection',
      scalesBy: 'Relic',
      tags: ['Self']
    }, {
      value: .1,
      type: 'health',
      scalesBy: 'Relic',
      tags: ['Self']
    },
    {
      value: .3,
      type: 'damage mitigation',
      tags: ['Self']
    }]
  }, ROYALGUARD: {
    unique: [{
      value: .05,
      type: 'health',
      tags: ['Self'],
      scalesBy: {
        leader: true,
        type: 'health',
        tags: ["Empire"]
      }
    }, {
      value: 2,
      type: 'health',
      tags: ['Self'],
    }],
  },
  SHAAKTI: {
    leader: {
      value: 35,
      tags: ["Clone Trooper"],
      abilityId: "leaderskill_SHAAKTI",
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
      abilityId: "leaderskill_THEMANDALORIAN",
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
        abilityId: "uniqueskill_AMILYNHOLDO01",
      },
    ],
  },
  C3POLEGENDARY: {
    unique: [
      {
        value: 20,
        tags: ["Self"],
        abilityId: "uniqueskill_C3POLEGENDARY01",
      },
    ],
  },
  CT7567: {
    unique: [
      {
        value: 0.04,
        tags: ["501st"],
        scalesBy: ["501st"],
        abilityId: "uniqueskill_REX01",
      },
    ],
  },
  DARTHTALON: {
    unique: [
      {
        value: 20,
        tags: ["Sith"],
        abilityId: "uniqueskill_DARTHTALON02",
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
        abilityId: "uniqueskill_JAWAENGINEER01",
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
        abilityId: "uniqueskill_MONMOTHMA01",
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
        abilityId: "uniqueskill_WEDGEANTILLES01",
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
        },
      },
    ],
  },
  "50RT": {
    leader: [
      {
        value: 40,
        tags: ["Self"],
        conditions: {
          allAllies: true,
          tags: ["Droid"],
        },
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
      },
      {
        omicron: {
          value: 30,
          tags: ["Sith Empire"],
          mode: "Grand Arena",
          abilityId: "leaderskill_DARTHMALGUS",
        },
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
      },
      {
        omicron: {
          value: 30,
          tags: ["Rogue One"],
          mode: "Grand Arena",
          abilityId: "leaderskill_ADMIRALRADDUS",
          sourceId: "sparkOfRebellionBuff",
        },
      },
    ],
    unique: [
      {
        value: 30,
        tags: ["JYNERSO"],
        abilityId: "uniqueskill_ADMIRALRADDUS01",
        sourceId: "sparkOfRebellionBuff",
      },
    ],
  },
};
