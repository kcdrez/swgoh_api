const territoryBattles = {
  id: "territory_battles",
  table: "Territory Battles",
  characters: [
    { id: "HOTHLEIA" },
    { id: "IMPERIALPROBEDROID" },
    { id: "WATTAMBOR" },
    { id: "KIADIMUNDI" },
  ],
};

const dailyChallenges = [
  {
    id: "challenges_agi",
    table: "Daily Challenges (Sun, Tues, Fri)",
  },
  {
    id: "challenges_tac",
    table: "Daily Challenges (Sun, Wed, Sat)",
  },
  {
    id: "challenges_str",
    table: "Daily Challenges (Sun, Mon, Thurs)",
  },
];

const conquest = {
  id: "conquest",
  table: "Conquest",
  characters: [
    // { id: "RAZORCREST" },
    // { id: "COMMANDERAHSOKA" },
    { id: "MAUL" },
    { id: "BOBAFETTSCION" },
    { id: "TIEINTERCEPTOR" },
    { id: "DARTHMALGUS" },
  ],
};

const raids = [
  {
    id: "the_pit",
    table: "Raids",
    mission: "The Pit (Rancor)",
    characters: [{ id: "HANSOLO" }],
  },
  {
    id: "tank_takedown",
    table: "Raids",
    mission: "The Pit (Rancor)",
    characters: [{ id: "GENERALKENOBI" }],
  },
  {
    id: "sith_triumvirate",
    table: "Raids",
    mission: "Sith Triumvirate (STR)",
    characters: [{ id: "DARTHTRAYA" }],
  },
];

const provingGrounds = {
  id: "proving_grounds",
  table: "Proving Grounds",
  characters: [
    {
      id: "COMMANDERAHSOKA",
      shardCount: 20,
    },
    {
      id: "RAZORCREST",
      shardCount: 20,
    },
  ],
};

const galacticBounties = [
  {
    id: "galactic_bounties_1",
    table: "Galactic Bounties I",
    characters: [
      {
        id: "Paploo",
        shardCount: 20,
      },
      {
        id: "HANSOLO",
        shardCount: 20,
      },
      {
        id: "HOTHLEIA",
        shardCount: 20,
      },
      {
        id: "IMPERIALPROBEDROID",
        shardCount: 20,
      },
    ],
  },
  {
    id: "galactic_bounties_2",
    table: "Galactic Bounties II",
    characters: [
      {
        id: "VISASMARR",
        shardCount: 20,
      },
      {
        id: "AMILYNHOLDO",
        shardCount: 20,
      },
      {
        id: "FULCRUMAHSOKA",
        shardCount: 20,
      },
      {
        id: "ENFYSNEST",
        shardCount: 20,
      },
    ],
  },
];

const assaultBattles = [
  {
    id: "forest_moon_ab",
    table: "Assault Battles",
    characters: [
      {
        id: "TEEBO",
        dropRate: (1 / 6) * 3,
        shardCount: (8 + 10 + 10) / 3,
      },
      {
        id: "PAPLOO",
        dropRate: (1 / 6) * 3,
        shardCount: (8 + 10 + 10) / 3,
      },
      {
        id: "LOGRAY",
        dropRate: (1 / 6) * 3,
        shardCount: (8 + 10 + 10) / 3,
      },
      {
        id: "EWOKSCOUT",
        dropRate: (1 / 6) * 3,
        shardCount: (8 + 10 + 10) / 3,
      },
      {
        id: "EWOKELDER",
        dropRate: (1 / 6) * 3,
        shardCount: (8 + 10 + 10) / 3,
      },
      {
        id: "CHIEFCHIRPA",
        dropRate: (1 / 6) * 3,
        shardCount: (8 + 10 + 10) / 3,
      },
    ],
  },
  {
    id: "ground_war_ab",
    table: "Assault Battles",
    characters: [
      {
        id: "GEONOSIANSTARFIGHTER3",
        dropRate: 1,
        shardCount: 4,
      },
      {
        id: "GEONOSIANSTARFIGHTER2",
        dropRate: 1,
        shardCount: 4,
      },
      {
        id: "GEONOSIANSTARFIGHTER1",
        dropRate: 1,
        shardCount: 4,
      },
      {
        id: "SUNFAC",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "POGGLETHELESSER",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "NUTEGUNRAY",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "GRIEVOUS",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 5,
      },
      {
        id: "GEONOSIANSPY",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "GEONOSIANSOLDIER",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "COUNTDOOKU",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 10,
      },
    ],
  },
  {
    id: "military_might_ab",
    table: "Assault Battles",
    characters: [
      {
        id: "TIEREAPER",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "TIEADVANCED",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "GAUNTLETSTARFIGHTER",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "TIEFIGHTERIMPERIAL",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "SUNFAC",
        dropRate: (1 / 7) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "VEERS",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 8,
      },
      {
        id: "VADER",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 5,
      },
      {
        id: "TIEFIGHTERPILOT",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "STORMTROOPER",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 8,
      },
      {
        id: "SNOWTROOPER",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 8,
      },
      {
        id: "SHORETROOPER",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "MAGMATROOPER",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 8,
      },
      {
        id: "IMPERIALSUPERCOMMANDO",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 8,
      },
      {
        id: "GARSAXON",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 10,
      },
      {
        id: "DIRECTORKRENNIC",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 8,
      },
      {
        id: "DEATHTROOPER",
        dropRate: (1 / 11) * 2 * 3,
        shardCount: 8,
      },
    ],
  },
  {
    id: "places_of_power_ab",
    table: "Assault Battles",
    characters: [
      {
        id: "UMBARANSTARFIGHTER",
        dropRate: (1 / 6) * 3,
        shardCount: 4,
      },
      {
        id: "JEDISTARFIGHTERCONSULAR",
        dropRate: (1 / 6) * 3,
        shardCount: 4,
      },
      {
        id: "JEDISTARFIGHTERAHSOKATANO",
        dropRate: (1 / 6) * 3,
        shardCount: 4,
      },
      {
        id: "BLADEOFDORIN",
        dropRate: (1 / 6) * 3,
        shardCount: 4,
      },
      {
        id: "ARC170REX",
        dropRate: (1 / 6) * 3,
        shardCount: 4,
      },
      {
        id: "ARC170CLONESERGEANT",
        dropRate: (1 / 6) * 3,
        shardCount: 4,
      },
      {
        id: "JEDIKNIGHTCONSULAR",
        dropRate: (1 / 6) * 3,
        shardCount: 10,
      },
      {
        id: "CT7567",
        dropRate: (1 / 6) * 3,
        shardCount: 10,
      },
      {
        id: "PLOKOON",
        dropRate: (1 / 6) * 3,
        shardCount: 10,
      },
      {
        id: "CT5555",
        dropRate: (1 / 6) * 3,
        shardCount: 10,
      },
      {
        id: "CLONESERGEANTPHASEI",
        dropRate: (1 / 6) * 3,
        shardCount: 10,
      },
      {
        id: "AHSOKATANO",
        dropRate: (1 / 6) * 3,
        shardCount: 10,
      },
    ],
  },
  {
    id: "rebel_roundup_ab",
    table: "Assault Battles",
    characters: [
      {
        id: "UWINGSCARIF",
        dropRate: 2 / 4 + 2 / 4 + 2 / 6,
        shardCount: 5,
      },
      {
        id: "UWINGROGUEONE",
        dropRate: 2 / 4 + 2 / 4 + 2 / 6,
        shardCount: 5,
      },
      {
        id: "GHOST",
        dropRate: 2 / 4 + 2 / 6,
        shardCount: 5,
      },
      {
        id: "PHANTOM2",
        dropRate: 2 / 4 + 2 / 6,
        shardCount: 5,
      },
      {
        id: "XWINGRED3",
        dropRate: 2 / 4 + 2 / 6,
        shardCount: 5,
      },
      {
        id: "XWINGRED2",
        dropRate: 2 / 4 + 2 / 6,
        shardCount: 5,
      },
      {
        id: "ZEBS3",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "SCARIFREBEL",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "SABINEWRENS3",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "KANANJARRUSS3",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "K2SO",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "JYNERSO",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "HERASYNDULLAS3",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "EZRABRIDGERS3",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "CHOPPERS3",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "CHIRRUTIMWE",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "CASSIANANDOR",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "BAZEMALBUS",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "WEDGEANTILLES",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "STORMTROOPERHAN",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "PRINCESSLEIA",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "OLDBENKENOBI",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "LUKESKYWALKER",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "LOBOT",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "HOTHREBELSCOUT",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "HOTHREBELSOLDIER",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "HOTHHAN",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "BIGGSDARKLIGHTER",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "ADMIRALACKBAR",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
      {
        id: "ADMINISTRATORLANDO",
        dropRate: 2 / 12 + 2 / 24,
        shardCount: 10,
      },
    ],
  },
  {
    id: "secrets_shadows_ab",
    table: "Assault Battles",
    characters: [
      {
        id: "SITHINFILTRATOR",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "COMMANDSHUTTLE",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "TIEFIGHTERFIRSTORDER",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "TIEADVANCED",
        dropRate: (1 / 4) * 3,
        shardCount: 4,
      },
      {
        id: "SITHTROOPER",
        dropRate: (1 / 4) * 3,
        shardCount: 10,
      },
      {
        id: "SITHASSASSIN",
        dropRate: (1 / 4) * 3,
        shardCount: 10,
      },
      {
        id: "DARTHSIDIOUS",
        dropRate: (1 / 4) * 3,
        shardCount: 10,
      },
      {
        id: "DARTHNIHILUS",
        dropRate: (1 / 4) * 3,
        shardCount: 10,
      },
    ],
  },
];

module.exports = [
  ...raids,
  conquest,
  territoryBattles,
  ...dailyChallenges,
  provingGrounds,
  ...galacticBounties,
];
