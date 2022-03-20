const Light = "Light Side";
const light = Light.toLowerCase().replace(" ", "");
const Dark = "Dark Side";
const dark = Dark.toLowerCase().replace(" ", "");
const Fleet = "Fleet";
const fleet = Fleet.toLowerCase().replace(" ", "");
const Cantina = "Cantina";
const cantina = Cantina.toLowerCase().replace(" ", "");

const Normal = "Normal";
const normal = Normal.toLowerCase();
const Hard = "Hard";
const hard = Hard.toLowerCase();

const nodeList = [
  {
    id: `${light}_${hard}_1a`,
    table: Light,
    difficulty: Hard,
    map: 1,
    mission: "A",
    energy: 12,
    characters: ["REY"],
    gear: [
      {
        id: "002",
        dropRate: 1,
      },
      {
        id: "004",
        dropRate: 1,
      },
      {
        id: "005",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_1b`,
    table: Light,
    difficulty: Hard,
    map: 1,
    mission: "B",
    energy: 12,
    characters: ["AHSOKATANO"],
    gear: [
      {
        id: "002",
        dropRate: 1,
      },
      {
        id: "007",
        dropRate: 1,
      },
      {
        id: "011",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_1c`,
    table: Light,
    difficulty: Hard,
    map: 1,
    mission: "C",
    energy: 12,
    characters: ["DARKTROOPER"],
    gear: [
      {
        id: "012",
        dropRate: 1,
      },
      {
        id: "009",
        dropRate: 1,
      },
      {
        id: "001",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_1d`,
    table: Light,
    difficulty: Hard,
    map: 1,
    mission: "D",
    energy: 12,
    characters: ["KYLORENUNMASKED"],
    gear: [
      {
        id: "002",
        dropRate: 1,
      },
      {
        id: "003",
        dropRate: 1,
      },
      {
        id: "008",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_2a`,
    table: Light,
    difficulty: Hard,
    map: 2,
    mission: "A",
    energy: 12,
    characters: ["EWOKSCOUT"],
    gear: [
      {
        id: "006",
        dropRate: 1,
      },
      {
        id: "014Prototype",
        dropRate: 1,
      },
      {
        id: "010",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_2b`,
    table: Light,
    difficulty: Hard,
    map: 2,
    mission: "B",
    energy: 12,
    characters: ["FIRSTORDERTROOPER"],
    gear: [
      {
        id: "019",
        dropRate: 1,
      },
      {
        id: "002",
        dropRate: 1,
      },
      {
        id: "017Prototype",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_2c`,
    table: Light,
    difficulty: Hard,
    map: 2,
    mission: "C",
    characters: ["EWOKELDER"],
    gear: [
      {
        id: "007",
        dropRate: 1,
      },
      {
        id: "008",
        dropRate: 1,
      },
      {
        id: "001",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_2d`,
    table: Light,
    difficulty: Hard,
    map: 2,
    mission: "D",
    characters: ["MOFFGIDEONS1"],
    gear: [
      {
        id: "033",
        dropRate: 1,
      },
      {
        id: "004",
        dropRate: 1,
      },
      {
        id: "021",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_2e`,
    table: Light,
    difficulty: Hard,
    map: 2,
    mission: "E",
    characters: ["MACEWINDU"],
    gear: [
      {
        id: "020",
        dropRate: 1,
      },
      {
        id: "009",
        dropRate: 1,
      },
      {
        id: "001",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_2f`,
    table: Light,
    difficulty: Hard,
    map: 2,
    mission: "F",
    characters: ["TALIA"],
    gear: [
      {
        id: "035",
        dropRate: 1,
      },
      {
        id: "003",
        dropRate: 1,
      },
      {
        id: "015Prototype",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_3a`,
    table: Light,
    difficulty: Hard,
    map: 3,
    mission: "A",
    characters: ["RESISTANCETROOPER"],
    gear: [
      {
        id: "050Salvage",
        dropRate: 1,
      },
      {
        id: "016",
        dropRate: 1,
      },
      {
        id: "001",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_3b`,
    table: Light,
    difficulty: Hard,
    map: 3,
    mission: "B",
    characters: ["IG11"],
    gear: [
      {
        id: "034",
        dropRate: 1,
      },
      {
        id: "030",
        dropRate: 1,
      },
      {
        id: "006",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_3c`,
    table: Light,
    difficulty: Hard,
    map: 3,
    mission: "C",
    characters: ["STORMTROOPER"],
    gear: [
      {
        id: "025",
        dropRate: 1,
      },
      {
        id: "004",
        dropRate: 1,
      },
      {
        id: "013",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_3d`,
    table: Light,
    difficulty: Hard,
    map: 3,
    mission: "D",
    characters: ["LUMINARAUNDULI"],
    gear: [
      {
        id: "036",
        dropRate: 1,
      },
      {
        id: "031Prototype",
        dropRate: 1,
      },
      {
        id: "013",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_3e`,
    table: Light,
    difficulty: Hard,
    map: 3,
    mission: "E",
    characters: ["GREEFKARGA"],
    gear: [
      {
        id: "057Salvage",
        dropRate: 1,
      },
      {
        id: "015",
        dropRate: 1,
      },
      {
        id: "009",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_3f`,
    table: Light,
    difficulty: Hard,
    map: 3,
    mission: "F",
    characters: ["DATHCHA"],
    gear: [
      {
        id: "028Prototype",
        dropRate: 1,
      },
      {
        id: "012",
        dropRate: 1,
      },
      {
        id: "005",
        dropRate: 1,
      },
      {
        id: "010",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_4a`,
    table: Light,
    difficulty: Hard,
    map: 4,
    mission: "A",
    characters: ["TEEBO"],
    gear: [
      {
        id: "078Prototype",
        dropRate: 1,
      },
      {
        id: "069Prototype",
        dropRate: 1,
      },
      {
        id: "015Prototype",
        dropRate: 1,
      },
      {
        id: "010",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_4b`,
    table: Light,
    difficulty: Hard,
    map: 4,
    mission: "B",
    characters: ["LOBOT"],
    gear: [
      {
        id: "055Prototype",
        dropRate: 1,
      },
      {
        id: "052Salvage",
        dropRate: 1,
      },
      {
        id: "007",
        dropRate: 1,
      },
      {
        id: "017Prototype",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_4c`,
    table: Light,
    difficulty: Hard,
    map: 4,
    mission: "C",
    characters: ["VEERS"],
    gear: [
      {
        id: "055PrototypeSalvage",
        dropRate: 1,
      },
      {
        id: "040Prototype",
        dropRate: 1,
      },
      {
        id: "013",
        dropRate: 1,
      },
      {
        id: "007",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_4d`,
    table: Light,
    difficulty: Hard,
    map: 4,
    mission: "D",
    characters: ["IDENVERSIOEMPIRE", "VULTUREDROID"],
    gear: [
      {
        id: "051Salvage",
        dropRate: 1,
      },
      {
        id: "044Prototype",
        dropRate: 1,
      },
      {
        id: "009",
        dropRate: 1,
      },
      {
        id: "021Prototype",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_4e`,
    table: Light,
    difficulty: Hard,
    map: 4,
    mission: "E",
    characters: ["POGGLETHELESSER"],
    gear: [
      {
        id: "062Salvage",
        dropRate: 1,
      },
      {
        id: "049Prototype",
        dropRate: 1,
      },
      {
        id: "003",
        dropRate: 1,
      },
      {
        id: "008",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_4f`,
    table: Light,
    difficulty: Hard,
    map: 4,
    mission: "F",
    characters: ["ROSETICO"],
    gear: [
      {
        id: "053Salvage",
        dropRate: 1,
      },
      {
        id: "035",
        dropRate: 1,
      },
      {
        id: "036",
        dropRate: 1,
      },
      {
        id: "001",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${light}_${hard}_5a`,
    table: Light,
    difficulty: Hard,
    map: 5,
    mission: "A",
    characters: ["URORRURRR"],
    gear: [],
  },
  {
    id: `${light}_${hard}_5b`,
    table: Light,
    difficulty: Hard,
    map: 5,
    mission: "B",
    characters: ["BADBATCHHUNTER"],
    gear: [],
  },
  {
    id: `${light}_${hard}_5c`,
    table: Light,
    difficulty: Hard,
    map: 5,
    mission: "C",
    characters: ["CLONESERGEANTPHASEI"],
    gear: [],
  },
  {
    id: `${light}_${hard}_5d`,
    table: Light,
    difficulty: Hard,
    map: 5,
    mission: "D",
    characters: ["ZAALBAR"],
    gear: [],
  },
  {
    id: `${light}_${hard}_5e`,
    table: Light,
    difficulty: Hard,
    map: 5,
    mission: "E",
    characters: ["MONMOTHMA"],
    gear: [],
  },
  {
    id: `${light}_${hard}_5f`,
    table: Light,
    difficulty: Hard,
    map: 5,
    mission: "F",
    characters: ["BADBATCHTECH"],
    gear: [],
  },
  {
    id: `${light}_${hard}_6a`,
    table: Light,
    difficulty: Hard,
    map: 6,
    mission: "A",
    characters: ["JUHANI"],
    gear: [],
  },
  {
    id: `${light}_${hard}_6b`,
    table: Light,
    difficulty: Hard,
    map: 6,
    mission: "B",
    characters: ["ADMIRALPIETT", "EPIXPOE"],
    gear: [],
  },
  {
    id: `${light}_${hard}_6c`,
    table: Light,
    difficulty: Hard,
    map: 6,
    mission: "C",
    characters: ["FENNECSHAND", "SITHBOMBER"],
    gear: [],
  },
  {
    id: `${light}_${hard}_6d`,
    table: Light,
    difficulty: Hard,
    map: 6,
    mission: "D",
    characters: ["MARAJADE"],
    gear: [],
  },
  {
    id: `${light}_${hard}_6e`,
    table: Light,
    difficulty: Hard,
    map: 6,
    mission: "E",
    characters: ["POGGLETHELESSER", "IG2000"],
    gear: [],
  },
  {
    id: `${light}_${hard}_7a`,
    table: Light,
    difficulty: Hard,
    map: 7,
    mission: "A",
    characters: ["C3POCHEWBACCA"],
    gear: [],
  },
  {
    id: `${light}_${hard}_7b`,
    table: Light,
    difficulty: Hard,
    map: 7,
    mission: "B",
    characters: ["POE"],
    gear: [],
  },
  {
    id: `${light}_${hard}_7c`,
    table: Light,
    difficulty: Hard,
    map: 7,
    mission: "C",
    characters: ["BADBATCHWRECKER", "YWINGCLONEWARS"],
    gear: [],
  },
  {
    id: `${light}_${hard}_7d`,
    table: Light,
    difficulty: Hard,
    map: 7,
    mission: "D",
    characters: ["BADBATCHECHO", "LUKESKYWALKER"],
    gear: [],
  },
  {
    id: `${light}_${hard}_8a`,
    table: Light,
    difficulty: Hard,
    map: 8,
    mission: "A",
    characters: ["MOTHERTALZIN"],
    gear: [],
  },
  {
    id: `${light}_${hard}_8b`,
    table: Light,
    difficulty: Hard,
    map: 8,
    mission: "B",
    characters: ["DROIDEKA", "XANADUBLOOD"],
    gear: [],
  },
  {
    id: `${light}_${hard}_8c`,
    table: Light,
    difficulty: Hard,
    map: 8,
    mission: "C",
    characters: ["EPIXFINN", "SNOWTROOPER"],
    gear: [],
  },
  {
    id: `${light}_${hard}_8d`,
    table: Light,
    difficulty: Hard,
    map: 8,
    mission: "D",
    characters: ["JANGOFETT", "HOUNDSTOOTH"],
    gear: [],
  },
  {
    id: `${light}_${hard}_9a`,
    table: Light,
    difficulty: Hard,
    map: 9,
    mission: "A",
    characters: ["DARTHSION", "COMMANDSHUTTLE"],
    gear: [],
  },
  {
    id: `${light}_${hard}_9a`,
    table: Light,
    difficulty: Hard,
    map: 9,
    mission: "A",
    characters: ["SHORETROOPER", "TIEREAPER"],
    gear: [],
  },
  {
    id: `${light}_${hard}_9c`,
    table: Light,
    difficulty: Hard,
    map: 9,
    mission: "C",
    characters: ["ARMORER", "BAZEMALBUS"],
    gear: [],
  },
  {
    id: `${light}_${hard}_9d`,
    table: Light,
    difficulty: Hard,
    map: 9,
    mission: "D",
    characters: ["DIRECTORKRENNIC", "GEONOSIANSTARFIGHTER2"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_1a`,
    table: Dark,
    difficulty: Hard,
    map: 1,
    mission: "A",
    characters: ["SABINEWRENS3"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_1b`,
    table: Dark,
    difficulty: Hard,
    map: 1,
    mission: "B",
    characters: ["ANAKINKNIGHT"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_1c`,
    table: Dark,
    difficulty: Hard,
    map: 1,
    mission: "C",
    characters: ["COUNTDOOKU"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_1d`,
    table: Dark,
    difficulty: Hard,
    map: 1,
    mission: "D",
    characters: ["JEDIKNIGHTCONSULAR"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_2a`,
    table: Dark,
    difficulty: Hard,
    map: 2,
    mission: "A",
    characters: ["FIRSTORDERTROOPER"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_2b`,
    table: Dark,
    difficulty: Hard,
    map: 2,
    mission: "B",
    characters: ["BOBAFETT"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_2c`,
    table: Dark,
    difficulty: Hard,
    map: 2,
    mission: "C",
    characters: ["OLDBENKENOBI"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_2d`,
    table: Dark,
    difficulty: Hard,
    map: 2,
    mission: "D",
    energy: 12,
    characters: ["CT5555"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_2e`,
    table: Dark,
    difficulty: Hard,
    map: 2,
    mission: "E",
    energy: 12,
    characters: ["LUMINARAUNDULI"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_2f`,
    table: Dark,
    difficulty: Hard,
    map: 2,
    mission: "F",
    energy: 12,
    characters: ["IG86SENTINELDROID"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_3a`,
    table: Dark,
    difficulty: Hard,
    map: 3,
    mission: "A",
    energy: 12,
    characters: ["RANGETROOPER"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_3b`,
    table: Dark,
    difficulty: Hard,
    map: 3,
    mission: "B",
    energy: 12,
    characters: ["HOTHREBELSCOUT"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_3c`,
    table: Dark,
    difficulty: Hard,
    map: 3,
    mission: "C",
    energy: 12,
    characters: ["THEMANDALORIAN"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_3d`,
    table: Dark,
    difficulty: Hard,
    map: 3,
    mission: "D",
    energy: 12,
    characters: ["TEEBO"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_3e`,
    table: Dark,
    difficulty: Hard,
    map: 3,
    mission: "E",
    energy: 12,
    characters: ["ANAKINKNIGHT"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_3f`,
    table: Dark,
    difficulty: Hard,
    map: 3,
    mission: "F",
    energy: 12,
    characters: ["JEDIKNIGHTGUARDIAN"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_4a`,
    table: Dark,
    difficulty: Hard,
    map: 4,
    mission: "A",
    energy: 12,
    characters: ["BIGGSDARKLIGHTER"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_4b`,
    table: Dark,
    difficulty: Hard,
    map: 4,
    mission: "B",
    energy: 12,
    characters: ["DAKA"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_4c`,
    table: Dark,
    difficulty: Hard,
    map: 4,
    mission: "C",
    energy: 12,
    characters: ["JEDIKNIGHTCONSULAR"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_4d`,
    table: Dark,
    difficulty: Hard,
    map: 4,
    mission: "D",
    energy: 12,
    characters: ["YOUNGCHEWBACCA"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_4e`,
    table: Dark,
    difficulty: Hard,
    map: 4,
    mission: "E",
    energy: 12,
    characters: ["BOBAFETT"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_4f`,
    table: Dark,
    difficulty: Hard,
    map: 4,
    mission: "F",
    energy: 12,
    characters: ["JAWA"],
    gear: [
      {
        id: "006",
        dropRate: 1,
      },
    ],
  },
  {
    id: `${dark}_${hard}_5a`,
    table: Dark,
    difficulty: Hard,
    map: 5,
    mission: "A",
    energy: 16,
    characters: ["KUIIL", "TIEBOMBERIMPERIAL"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_5b`,
    table: Dark,
    difficulty: Hard,
    map: 5,
    mission: "B",
    energy: 16,
    characters: ["BASTILASHAN"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_5c`,
    table: Dark,
    difficulty: Hard,
    map: 5,
    mission: "C",
    energy: 16,
    characters: ["BARRISSOFFEE", "IMAGUNDI"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_5d`,
    table: Dark,
    difficulty: Hard,
    map: 5,
    mission: "D",
    energy: 16,
    characters: ["REY", "MILLENNIUMFALCONEP7"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_5e`,
    table: Dark,
    difficulty: Hard,
    map: 5,
    mission: "E",
    energy: 16,
    characters: ["CARADUNE"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_5f`,
    table: Dark,
    difficulty: Hard,
    map: 5,
    mission: "F",
    energy: 16,
    characters: ["ROYALGUARD"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_6a`,
    table: Dark,
    difficulty: Hard,
    map: 6,
    mission: "A",
    energy: 16,
    characters: ["GENERALHUX", "HOTHREBELSCOUT"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_6b`,
    table: Dark,
    difficulty: Hard,
    map: 6,
    mission: "B",
    energy: 16,
    characters: ["FIRSTORDERTIEPILOT"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_6c`,
    table: Dark,
    difficulty: Hard,
    map: 6,
    mission: "C",
    energy: 16,
    characters: ["FOSITHTROOPER", "TUSKENRAIDER"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_6d`,
    table: Dark,
    difficulty: Hard,
    map: 6,
    mission: "D",
    energy: 16,
    characters: ["BOKATAN", "JOLEEBINDO"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_6e`,
    table: Dark,
    difficulty: Hard,
    map: 6,
    mission: "E",
    energy: 16,
    characters: ["MAGNAGUARD"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_7a`,
    table: Dark,
    difficulty: Hard,
    map: 7,
    mission: "A",
    energy: 20,
    characters: ["BASTILASHANDARK"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_7b`,
    table: Dark,
    difficulty: Hard,
    map: 7,
    mission: "B",
    energy: 20,
    characters: ["VISASMARR"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_7c`,
    table: Dark,
    difficulty: Hard,
    map: 7,
    mission: "C",
    energy: 20,
    characters: ["AMILYNHOLDO"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_7d`,
    table: Dark,
    difficulty: Hard,
    map: 7,
    mission: "D",
    energy: 20,
    characters: ["EMPERORSSHUTTLE"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_8a`,
    table: Dark,
    difficulty: Hard,
    map: 8,
    mission: "A",
    energy: 20,
    characters: ["WICKET"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_8b`,
    table: Dark,
    difficulty: Hard,
    map: 8,
    mission: "B",
    energy: 20,
    characters: ["HYENABOMBER", "JEDISTARFIGHTERCONSULAR"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_8c`,
    table: Dark,
    difficulty: Hard,
    map: 8,
    mission: "C",
    energy: 20,
    characters: ["EMBO"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_8d`,
    table: Dark,
    difficulty: Hard,
    map: 8,
    mission: "D",
    energy: 20,
    characters: ["NIGHTSISTERZOMBIE"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_9a`,
    table: Dark,
    difficulty: Hard,
    map: 9,
    mission: "A",
    energy: 20,
    characters: ["DARTHNIHILUS"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_9b`,
    table: Dark,
    difficulty: Hard,
    map: 9,
    mission: "B",
    energy: 20,
    characters: ["BOSSK"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_9c`,
    table: Dark,
    difficulty: Hard,
    map: 9,
    mission: "C",
    energy: 20,
    characters: ["GHOST"],
    gear: [],
  },
  {
    id: `${dark}_${hard}_9d`,
    table: Dark,
    difficulty: Hard,
    map: 9,
    mission: "D",
    energy: 20,
    characters: ["PHANTOM2"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_1a`,
    table: Fleet,
    difficulty: Hard,
    map: 1,
    mission: "A",
    energy: 16,
    characters: ["ARC170CLONESERGEANT"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_1b`,
    table: Fleet,
    difficulty: Hard,
    map: 1,
    mission: "B",
    energy: 16,
    characters: ["JEDISTARFIGHTERANAKIN"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_1c`,
    table: Fleet,
    difficulty: Hard,
    map: 1,
    mission: "C",
    energy: 16,
    characters: ["TIEFIGHTERIMPERIAL"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_1d`,
    table: Fleet,
    difficulty: Hard,
    map: 1,
    mission: "D",
    energy: 16,
    characters: ["YOUNGLANDO", "MILLENNIUMFALCONPRISTINE"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_1d`,
    table: Fleet,
    difficulty: Hard,
    map: 1,
    mission: "D",
    energy: 16,
    characters: ["XWINGRESISTANCE"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_2a`,
    table: Fleet,
    difficulty: Hard,
    map: 2,
    mission: "A",
    energy: 20,
    characters: ["GEONOSIANSTARFIGHTER1"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_2b`,
    table: Fleet,
    difficulty: Hard,
    map: 2,
    mission: "B",
    energy: 20,
    characters: ["SLAVE1"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_2c`,
    table: Fleet,
    difficulty: Hard,
    map: 2,
    mission: "C",
    energy: 20,
    characters: ["UWINGSCARIF"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_2d`,
    table: Fleet,
    difficulty: Hard,
    map: 2,
    mission: "D",
    energy: 20,
    characters: ["BASTILASHAN"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_2e`,
    table: Fleet,
    difficulty: Hard,
    map: 2,
    mission: "E",
    energy: 20,
    characters: ["CARTHONASI"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_3a`,
    table: Fleet,
    difficulty: Hard,
    map: 3,
    mission: "A",
    energy: 20,
    characters: ["XWINGBLACKONE"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_3b`,
    table: Fleet,
    difficulty: Hard,
    map: 3,
    mission: "B",
    energy: 20,
    characters: ["UMBARANSTARFIGHTER"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_3c`,
    table: Fleet,
    difficulty: Hard,
    map: 3,
    mission: "C",
    energy: 20,
    characters: ["ZAALBAR"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_3d`,
    table: Fleet,
    difficulty: Hard,
    map: 3,
    mission: "D",
    energy: 20,
    characters: ["SITHINFILTRATOR"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_3e`,
    table: Fleet,
    difficulty: Hard,
    map: 3,
    mission: "E",
    energy: 20,
    characters: ["SITHFIGHTER"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_4a`,
    table: Fleet,
    difficulty: Hard,
    map: 4,
    mission: "A",
    energy: 20,
    characters: ["GAUNTLETSTARFIGHTER"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_4b`,
    table: Fleet,
    difficulty: Hard,
    map: 4,
    mission: "B",
    energy: 20,
    characters: ["TIEADVANCED"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_4c`,
    table: Fleet,
    difficulty: Hard,
    map: 4,
    mission: "C",
    energy: 20,
    characters: ["GREEFKARGA", "YWINGREBEL"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_4e`,
    table: Fleet,
    difficulty: Hard,
    map: 4,
    mission: "D",
    energy: 20,
    characters: ["BADBATCHOMEGA"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_4e`,
    table: Fleet,
    difficulty: Hard,
    map: 4,
    mission: "E",
    energy: 20,
    characters: ["JOLEEBINDO"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_5a`,
    table: Fleet,
    difficulty: Hard,
    map: 5,
    mission: "A",
    energy: 20,
    characters: ["SHAAKTI"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_5b`,
    table: Fleet,
    difficulty: Hard,
    map: 5,
    mission: "B",
    energy: 20,
    characters: ["B1BATTLEDROIDV2"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_5c`,
    table: Fleet,
    difficulty: Hard,
    map: 5,
    mission: "C",
    energy: 20,
    characters: [],
    gear: [],
  },

  {
    id: `${fleet}_${hard}_5d`,
    table: Fleet,
    difficulty: Hard,
    map: 5,
    mission: "D",
    energy: 20,
    characters: ["ENFYSNEST"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_5e`,
    table: Fleet,
    difficulty: Hard,
    map: 5,
    mission: "E",
    energy: 20,
    characters: ["THEMANDALORIAN"],
    gear: [],
  },
  {
    id: `${fleet}_${hard}_5f`,
    table: Fleet,
    difficulty: Hard,
    map: 5,
    mission: "F",
    energy: 20,
    characters: [],
    gear: [],
  },
  {
    id: `${cantina}_1a`,
    table: Cantina,
    difficulty: "",
    map: 1,
    mission: "A",
    energy: 8,
    characters: ["GEONOSIANSOLDIER"],
    gear: [],
  },
  {
    id: `${cantina}_1b`,
    table: Cantina,
    difficulty: "",
    map: 1,
    mission: "B",
    energy: 8,
    characters: ["LUKESKYWALKER"],
    gear: [],
  },
  {
    id: `${cantina}_1c`,
    table: Cantina,
    difficulty: "",
    map: 1,
    mission: "C",
    energy: 8,
    characters: ["OLDBENKENOBI"],
    gear: [],
  },
  {
    id: `${cantina}_1d`,
    table: Cantina,
    difficulty: "",
    map: 1,
    mission: "D",
    energy: 8,
    characters: ["SCARIFREBEL"],
    gear: [],
  },
  {
    id: `${cantina}_1e`,
    table: Cantina,
    difficulty: "",
    map: 1,
    mission: "E",
    energy: 8,
    characters: ["ADMINISTRATORLANDO"],
    gear: [],
  },
  {
    id: `${cantina}_1f`,
    table: Cantina,
    difficulty: "",
    map: 1,
    mission: "F",
    energy: 8,
    characters: ["HERASYNDULLAS3"],
    gear: [],
  },
  {
    id: `${cantina}_1g`,
    table: Cantina,
    difficulty: "",
    map: 1,
    mission: "G",
    energy: 8,
    characters: ["TALIA"],
    gear: [],
  },
  {
    id: `${cantina}_2a`,
    table: Cantina,
    difficulty: "",
    map: 2,
    mission: "A",
    energy: 8,
    characters: ["NIGHTSISTERACOLYTE"],
    gear: [],
  },
  {
    id: `${cantina}_2b`,
    table: Cantina,
    difficulty: "",
    map: 2,
    mission: "B",
    energy: 8,
    characters: ["EZRABRIDGERS3"],
    gear: [],
  },
  {
    id: `${cantina}_2c`,
    table: Cantina,
    difficulty: "",
    map: 2,
    mission: "C",
    energy: 8,
    characters: ["IMPERIALSUPERCOMMANDO"],
    gear: [],
  },
  {
    id: `${cantina}_2d`,
    table: Cantina,
    difficulty: "",
    map: 2,
    mission: "D",
    energy: 8,
    characters: ["JAWA"],
    gear: [],
  },
  {
    id: `${cantina}_2e`,
    table: Cantina,
    difficulty: "",
    map: 2,
    mission: "E",
    energy: 8,
    characters: ["GARSAXON"],
    gear: [],
  },
  {
    id: `${cantina}_2f`,
    table: Cantina,
    difficulty: "",
    map: 2,
    mission: "F",
    energy: 8,
    characters: ["CLONEWARSCHEWBACCA"],
    gear: [],
  },
  {
    id: `${cantina}_2g`,
    table: Cantina,
    difficulty: "",
    map: 2,
    mission: "G",
    energy: 8,
    characters: ["FIRSTORDEREXECUTIONER"],
    gear: [],
  },
  {
    id: `${cantina}_3a`,
    table: Cantina,
    difficulty: "",
    map: 3,
    mission: "A",
    energy: 10,
    characters: ["JEDIKNIGHTCONSULAR"],
    gear: [],
  },
  {
    id: `${cantina}_3b`,
    table: Cantina,
    difficulty: "",
    map: 3,
    mission: "B",
    energy: 10,
    characters: ["QIRA"],
    gear: [],
  },
  {
    id: `${cantina}_3c`,
    table: Cantina,
    difficulty: "",
    map: 3,
    mission: "C",
    energy: 10,
    characters: ["MAGNAGUARD"],
    gear: [],
  },
  {
    id: `${cantina}_3d`,
    table: Cantina,
    difficulty: "",
    map: 3,
    mission: "D",
    energy: 10,
    characters: ["PAPLOO"],
    gear: [],
  },
  {
    id: `${cantina}_3e`,
    table: Cantina,
    difficulty: "",
    map: 3,
    mission: "E",
    energy: 10,
    characters: ["FINN"],
    gear: [],
  },
  {
    id: `${cantina}_3f`,
    table: Cantina,
    difficulty: "",
    map: 3,
    mission: "F",
    energy: 10,
    characters: ["KYLORENUNMASKED", "TIESILENCER"],
    gear: [],
  },
  {
    id: `${cantina}_3g`,
    table: Cantina,
    difficulty: "",
    map: 3,
    mission: "G",
    energy: 10,
    characters: ["BIGGSDARKLIGHTER"],
    gear: [],
  },
  {
    id: `${cantina}_4a`,
    table: Cantina,
    difficulty: "",
    map: 4,
    mission: "A",
    energy: 10,
    characters: ["MACEWINDU"],
    gear: [],
  },
  {
    id: `${cantina}_4b`,
    table: Cantina,
    difficulty: "",
    map: 4,
    mission: "B",
    energy: 10,
    characters: ["TIEFIGHTERPILOT"],
    gear: [],
  },
  {
    id: `${cantina}_4c`,
    table: Cantina,
    difficulty: "",
    map: 4,
    mission: "C",
    energy: 10,
    characters: ["KYLOREN"],
    gear: [],
  },
  {
    id: `${cantina}_4d`,
    table: Cantina,
    difficulty: "",
    map: 4,
    mission: "D",
    energy: 10,
    characters: ["GEONOSIANSPY"],
    gear: [],
  },
  {
    id: `${cantina}_4e`,
    table: Cantina,
    difficulty: "",
    map: 4,
    mission: "E",
    energy: 10,
    characters: ["MOFFGIDEONS1"],
    gear: [],
  },
  {
    id: `${cantina}_4f`,
    table: Cantina,
    difficulty: "",
    map: 4,
    mission: "F",
    energy: 10,
    characters: ["KITFISTO"],
    gear: [],
  },
  {
    id: `${cantina}_4g`,
    table: Cantina,
    difficulty: "",
    map: 4,
    mission: "G",
    energy: 10,
    characters: ["PLOKOON"],
    gear: [],
  },
  {
    id: `${cantina}_5a`,
    table: Cantina,
    difficulty: "",
    map: 5,
    mission: "A",
    energy: 12,
    characters: ["L3_37"],
    gear: [],
  },
  {
    id: `${cantina}_5b`,
    table: Cantina,
    difficulty: "",
    map: 5,
    mission: "B",
    energy: 12,
    characters: ["AAYLASECURA"],
    gear: [],
  },
  {
    id: `${cantina}_5c`,
    table: Cantina,
    difficulty: "",
    map: 5,
    mission: "C",
    energy: 12,
    characters: ["CANDEROUSORDO"],
    gear: [],
  },
  {
    id: `${cantina}_5d`,
    table: Cantina,
    difficulty: "",
    map: 5,
    mission: "D",
    energy: 12,
    characters: ["CHIEFCHIRPA"],
    gear: [],
  },
  {
    id: `${cantina}_5e`,
    table: Cantina,
    difficulty: "",
    map: 5,
    mission: "E",
    energy: 12,
    characters: ["SMUGGLERHAN"],
    gear: [],
  },
  {
    id: `${cantina}_5f`,
    table: Cantina,
    difficulty: "",
    map: 5,
    mission: "F",
    energy: 12,
    characters: ["SMUGGLERCHEWBACCA"],
    gear: [],
  },
  {
    id: `${cantina}_5g`,
    table: Cantina,
    difficulty: "",
    map: 5,
    mission: "G",
    energy: 12,
    characters: ["ARCTROOPER501ST"],
    gear: [],
  },
  {
    id: `${cantina}_6a`,
    table: Cantina,
    difficulty: "",
    map: 6,
    mission: "A",
    energy: 12,
    characters: ["KYLEKATARN"],
    gear: [],
  },
  {
    id: `${cantina}_6b`,
    table: Cantina,
    difficulty: "",
    map: 6,
    mission: "B",
    energy: 12,
    characters: ["T3_M4"],
    gear: [],
  },
  {
    id: `${cantina}_6c`,
    table: Cantina,
    difficulty: "",
    map: 6,
    mission: "C",
    energy: 12,
    characters: ["SITHASSASSIN"],
    gear: [],
  },
  {
    id: `${cantina}_6d`,
    table: Cantina,
    difficulty: "",
    map: 6,
    mission: "D",
    energy: 12,
    characters: ["B2SUPERBATTLEDROID"],
    gear: [],
  },
  {
    id: `${cantina}_6e`,
    table: Cantina,
    difficulty: "",
    map: 6,
    mission: "E",
    energy: 12,
    characters: ["SITHMARAUDER"],
    gear: [],
  },
  {
    id: `${cantina}_6f`,
    table: Cantina,
    difficulty: "",
    map: 6,
    mission: "F",
    energy: 12,
    characters: ["WEDGEANTILLES"],
    gear: [],
  },
  {
    id: `${cantina}_6g`,
    table: Cantina,
    difficulty: "",
    map: 6,
    mission: "G",
    energy: 12,
    characters: ["COUNTDOOKU"],
    gear: [],
  },
  {
    id: `${cantina}_7a`,
    table: Cantina,
    difficulty: "",
    map: 7,
    mission: "A",
    energy: 16,
    characters: ["MISSIONVAO"],
    gear: [],
  },
  {
    id: `${cantina}_7b`,
    table: Cantina,
    difficulty: "",
    map: 7,
    mission: "B",
    energy: 16,
    characters: ["SNOWTROOPER"],
    gear: [],
  },
  {
    id: `${cantina}_7c`,
    table: Cantina,
    difficulty: "",
    map: 7,
    mission: "C",
    energy: 16,
    characters: ["AURRA_SING"],
    gear: [],
  },
  {
    id: `${cantina}_7d`,
    table: Cantina,
    difficulty: "",
    map: 7,
    mission: "D",
    energy: 16,
    characters: ["HOTHHAN"],
    gear: [],
  },
  {
    id: `${cantina}_7e`,
    table: Cantina,
    difficulty: "",
    map: 7,
    mission: "E",
    energy: 16,
    characters: ["DASHRENDAR"],
    gear: [],
  },
  {
    id: `${cantina}_7f`,
    table: Cantina,
    difficulty: "",
    map: 7,
    mission: "F",
    energy: 16,
    characters: ["NIGHTSISTERSPIRIT", "BLADEOFDORIN"],
    gear: [],
  },
  {
    id: `${cantina}_7g`,
    table: Cantina,
    difficulty: "",
    map: 7,
    mission: "G",
    energy: 16,
    characters: ["DARTHTALON"],
    gear: [],
  },
  {
    id: `${cantina}_8a`,
    table: Cantina,
    difficulty: "",
    map: 8,
    mission: "A",
    energy: 16,
    characters: ["DEATHTROOPER"],
    gear: [],
  },
  {
    id: `${cantina}_8b`,
    table: Cantina,
    difficulty: "",
    map: 8,
    mission: "B",
    energy: 16,
    characters: ["SITHTROOPER"],
    gear: [],
  },
  {
    id: `${cantina}_8c`,
    table: Cantina,
    difficulty: "",
    map: 8,
    mission: "C",
    energy: 16,
    characters: [],
    gear: [],
  },
  {
    id: `${cantina}_8d`,
    table: Cantina,
    difficulty: "",
    map: 8,
    mission: "D",
    energy: 16,
    characters: ["GEONOSIANBROODALPHA"],
    gear: [],
  },
  {
    id: `${cantina}_8e`,
    table: Cantina,
    difficulty: "",
    map: 8,
    mission: "E",
    energy: 16,
    characters: ["EBONHAWK"],
    gear: [],
  },
  {
    id: `${cantina}_8f`,
    table: Cantina,
    difficulty: "",
    map: 8,
    mission: "F",
    energy: 16,
    characters: [],
    gear: [],
  },
  {
    id: `${cantina}_8g`,
    table: Cantina,
    difficulty: "",
    map: 8,
    mission: "G",
    energy: 16,
    characters: [],
    gear: [],
  },
];

const conquest = {
  id: "conquest",
  table: "Conquest",
  characters: [
    { id: "COMMANDERAHSOKA" },
    { id: "BOBAFETTSCION" },
    { id: "TIEINTERCEPTOR" },
  ],
};

const legendary = {
  id: "legendary",
  table: "Legendary Events",
  characters: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      id: "COMMANDERLUKESKYWALKER",
      prerequisites: [
        {
          id: "R2D2_LEGENDARY",
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
    },
    {
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
    },
    {
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
    },
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
    {
      id: "CHEWBACCALEGENDARY",
      prerequisites: [
        {
          tags: ["Bounty Hunter", "!is_ship"],
          count: 5,
          recommended: {
            value: 18100,
            type: "Power",
          },
        },
      ],
    },
    {
      id: "C3POLEGENDARY",
      prerequisites: [
        {
          tags: ["Ewok", "!is_ship"],
          count: 5,
          recommended: {
            value: 16500,
            type: "Power",
          },
        },
      ],
    },
    {
      id: "MILLENNIUMFALCON",
      prerequisites: [
        {
          tags: ["Capital Ship"],
          count: 1,
          recommended: {
            value: 46600,
            type: "Power",
          },
        },
        {
          tags: ["Bounty Hunter", "is_ship"],
          count: 7,
          recommended: {
            value: 46600,
            type: "Power",
          },
        },
      ],
    },
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
    {
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
          id: "PADMEAMIDALA",
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
    },
    {
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
          id: "COMMANDERLUKESKYWALKER",
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
          id: "CHEWBACCALEGENDARY",
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
          id: "C3POLEGENDARY",
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
          recommended: {
            value: 74500,
            type: "Power",
          },
        },
        {
          id: "MILLENNIUMFALCON",
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
        },
      ],
    },
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
          id: "REYJEDITRAINING",
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
          id: "BB8",
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
          id: "CAPITALRADDUS",
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
          id: "REYJEDITRAINING",
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
          id: "C3POCHEWBACCA",
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
          id: "C3POLEGENDARY",
          requirement: {
            value: 5,
            type: "Relic",
          },
        },
        {
          id: "R2D2_LEGENDARY",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "JEDIKNIGHTLUKE",
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
          id: "TIEFIGHTERFOSF",
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
          id: "EMPERORPALPATINE",
          requirement: {
            value: 7,
            type: "Relic",
          },
        },
        {
          id: "CAPITALFINALIZER",
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
          id: "EMPERORPALPATINE",
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
          id: "GRANDADMIRALTHRAWN",
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
          id: "GRANDMASTERYODA",
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
          id: "PADMEAMIDALA",
          requirement: {
            value: 8,
            type: "Relic",
          },
        },
        {
          id: "GENERALSKYWALKER",
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

const stores = [
  {
    id: "cantina_battles_store",
    table: "Cantina Battles Store",
    characters: [
      { id: "UWINGROGUEONE", dropRate: 1, shardCount: 5, cost: 400 },
      { id: "STORMTROOPERHAN", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "CHOPPERS3", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "PAO", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "BISTAN", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "JAWASCAVENGER", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "AHSOKATANO", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "JEDIKNIGHTGUARDIAN", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "CT5555", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "HOTHREBELSCOUT", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "BOBAFETT", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "HUMANTHUG", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "STORMTROOPER", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "DAKA", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "FIRSTORDEROFFICERMALE", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "QUIGONJINN", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "POE", dropRate: 1, shardCount: 10, cost: 400 },
    ],
  },
  {
    id: "guild_store",
    table: "Guild Store",
    characters: [
      { id: "YOUNGHAN", dropRate: 1, shardCount: 10, cost: 450 },
      { id: "COLONELSTARCK", dropRate: 1, shardCount: 10, cost: 450 },
      {
        id: "FIRSTORDERSPECIALFORCESPILOT",
        dropRate: 0.5,
        shardCount: 10,
        cost: 450,
      },
      { id: "TIEFIGHTERFOSF", dropRate: 0.5, shardCount: 4, cost: 450 },
      { id: "JAWAENGINEER", dropRate: 0.33, shardCount: 10, cost: 450 },
      { id: "GAMORREANGUARD", dropRate: 0.33, shardCount: 10, cost: 450 },
      { id: "DENGAR", dropRate: 0.33, shardCount: 10, cost: 450 },
      { id: "REY", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "SNOWTROOPER", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "RESISTANCETROOPER", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "PAPLOO", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "EWOKELDER", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "LUKESKYWALKER", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "NIGHTSISTERACOLYTE", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "MAUL", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "TUSKENSHAMAN", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "SUNFAC", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "ZAMWESELL", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "LOGRAY", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "OLDBENKENOBI", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "CC2224", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "CT210408", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "CT7567", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "KYLOREN", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "AAYLASECURA", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "BARRISSOFFEE", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "FINN", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "JYNERSO", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "KITFISTO", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "TALIA", dropRate: 0.1667, shardCount: 10, cost: 450 },
      { id: "B2SUPERBATTLEDROID", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "IMAGUNDI", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "SITHASSASSIN", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "MAGNAGUARD", dropRate: 0.2, shardCount: 10, cost: 450 },
      { id: "CLONESERGEANTPHASEI", dropRate: 0.2, shardCount: 10, cost: 450 },
    ],
  },
  {
    id: "squad_arena_store",
    table: "Squad Arena Store",
    characters: [
      { id: "KANANJARRUSS3", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "CASSIANANDOR", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "MACEWINDU", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "CHIEFNEBIT", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "PRINCESSLEIA", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "GRANDMOFFTARKIN", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "UGNAUGHT", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "GREEDO", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "ASAJVENTRESS", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "SAVAGEOPRESS", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "HK47", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "ADMIRALACKBAR", dropRate: 1, shardCount: 10, cost: 400 },
      {
        id: "CORUSCANTUNDERWORLDPOLICE",
        dropRate: 1,
        shardCount: 10,
        cost: 400,
      },
      { id: "IG88", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "EETHKOTH", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "DARTHSIDIOUS", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "NUTEGUNRAY", dropRate: 1, shardCount: 10, cost: 400 },
    ],
  },
  {
    id: "galactic_war_store",
    table: "Galactic War Store",
    characters: [
      {
        id: "JEDISTARFIGHTERAHSOKATANO",
        dropRate: 0.4307, //two slots, .2 and .2307
        shardCount: 4,
        cost: 400,
      },
      {
        id: "JEDISTARFIGHTERCONSULAR",
        dropRate: 0.4307, //two slots, .2 and .2307
        shardCount: 4,
        cost: 400,
      },
      {
        id: "GEONOSIANSTARFIGHTER2",
        dropRate: 0.3538, //two slots, .2 and .1538
        shardCount: 4,
        cost: 400,
      },
      {
        id: "GEONOSIANSTARFIGHTER3",
        dropRate: 0.3538, //two slots, .2 and .1538
        shardCount: 4,
        cost: 400,
      },
      { id: "ARC170CLONESERGEANT", dropRate: 0.0769, shardCount: 4, cost: 400 },
      { id: "TIEFIGHTERIMPERIAL", dropRate: 0.0769, shardCount: 4, cost: 400 },
      { id: "XWINGRESISTANCE", dropRate: 0.0769, shardCount: 4, cost: 400 },
      { id: "GEONOSIANSTARFIGHTER1", dropRate: 0.2, shardCount: 4, cost: 400 },
      { id: "XWINGRED3", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "XWINGRED2", dropRate: 0.25, shardCount: 4, cost: 400 },
      {
        id: "TIEFIGHTERFIRSTORDER",
        dropRate: 0.1667,
        shardCount: 4,
        cost: 400,
      },
      { id: "BLADEOFDORIN", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "UMBARANSTARFIGHTER", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "ZEBS3", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "BODHIROOK", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "K2SO", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "CADBANE", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "LUMINARAUNDULI", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "NIGHTSISTERINITIATE", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "TEEBO", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "BIGGSDARKLIGHTER", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "DATHCHA", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "POGGLETHELESSER", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "IG86SENTINELDROID", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "TUSKENRAIDER", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "RESISTANCEPILOT", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "PHASMA", dropRate: 1, shardCount: 10, cost: 400 },
      { id: "MAGMATROOPER", dropRate: 1, shardCount: 10, cost: 400 },
    ],
  },
  {
    id: "galactic_war_table",
    table: "Galactic War Table",
    characters: [],
  },
  {
    id: "fleet_arena_store",
    table: "Fleet Arena Store",
    characters: [
      { id: "UWINGSCARIF", dropRate: 0.2, shardCount: 4, cost: 400 },
      { id: "XWINGBLACKONE", dropRate: 0.2, shardCount: 4, cost: 400 },
      { id: "XWINGRESISTANCE", dropRate: 0.6, shardCount: 4, cost: 400 },
      { id: "TIEFIGHTERIMPERIAL", dropRate: 0.4286, shardCount: 4, cost: 400 },
      { id: "SITHINFILTRATOR", dropRate: 0.2857, shardCount: 4, cost: 400 },
      { id: "SLAVE1", dropRate: 0.1429, shardCount: 4, cost: 400 },
      { id: "TIEADVANCED", dropRate: 0.1429, shardCount: 4, cost: 400 },
      { id: "ARC170CLONESERGEANT", dropRate: 0.75, shardCount: 4, cost: 400 },
      { id: "ARC170REX", dropRate: 0.25, shardCount: 4, cost: 400 },
      {
        id: "JEDISTARFIGHTERCONSULAR",
        dropRate: 0.333,
        shardCount: 4,
        cost: 400,
      },
      {
        id: "JEDISTARFIGHTERAHSOKATANO",
        dropRate: 0.333,
        shardCount: 4,
        cost: 400,
      },
      { id: "GHOST", dropRate: 0.333, shardCount: 4, cost: 400 },
      { id: "GEONOSIANSTARFIGHTER3", dropRate: 0.4, shardCount: 4, cost: 400 },
      { id: "GAUNTLETSTARFIGHTER", dropRate: 0.2, shardCount: 4, cost: 400 },
      { id: "XWINGRED3", dropRate: 0.333, shardCount: 4, cost: 400 },
      { id: "XWINGRED2", dropRate: 0.333, shardCount: 4, cost: 400 },
      { id: "PHANTOM2", dropRate: 0.333, shardCount: 4, cost: 400 },
      { id: "BLADEOFDORIN", dropRate: 0.75, shardCount: 4, cost: 400 },
      { id: "UMBARANSTARFIGHTER", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "TIEFIGHTERFIRSTORDER", dropRate: 0.75, shardCount: 4, cost: 400 },
      { id: "GEONOSIANSTARFIGHTER1", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "CC2224", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "CHIRRUTIMWE", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "CT210408", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "ZAMWESELL", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "TUSKENSHAMAN", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "ADMIRALACKBAR", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "VADER", dropRate: 0.2, shardCount: 5, cost: 400 },
      { id: "GRIEVOUS", dropRate: 0.2, shardCount: 5, cost: 400 },
      { id: "GRANDMOFFTARKIN", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "MACEWINDU", dropRate: 0.2, shardCount: 10, cost: 400 },
      { id: "BISTAN", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "CT7567", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "EZRABRIDGERS3", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "SCARIFREBEL", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "BOBAFETT", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "MAUL", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "POE", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "SUNFAC", dropRate: 0.583, shardCount: 10, cost: 400 }, //two slots, .25 and .333
      { id: "WEDGEANTILLES", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "BIGGSDARKLIGHTER", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "FULCRUMAHSOKA", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "RESISTANCEPILOT", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "AHSOKATANO", dropRate: 0.333, shardCount: 10, cost: 400 },
      { id: "PLOKOON", dropRate: 0.333, shardCount: 10, cost: 400 },
      { id: "JEDIKNIGHTCONSULAR", dropRate: 0.333, shardCount: 10, cost: 400 },
      { id: "GEONOSIANSOLDIER", dropRate: 0.333, shardCount: 10, cost: 400 },
      { id: "GEONOSIANSPY", dropRate: 0.333, shardCount: 10, cost: 400 },
      { id: "CLONESERGEANTPHASEI", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "CT5555", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "FIRSTORDERTIEPILOT", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "TIEFIGHTERPILOT", dropRate: 0.25, shardCount: 10, cost: 400 },
      { id: "RAZORCREST", dropRate: 0.05, shardCount: 4, cost: 400 },
    ],
  },
  {
    id: "guild_events_store1",
    table: "Guild Events Store (Mk 1)",
    characters: [
      { id: "GENERALSKYWALKER", dropRate: 0.333, shardCount: 5, cost: 1900 },
      { id: "GENERALSKYWALKER", dropRate: 0.333, shardCount: 10, cost: 3800 },
      { id: "GENERALSKYWALKER", dropRate: 0.333, shardCount: 15, cost: 5700 },
      { id: "DARTHMALAK", dropRate: 0.333, shardCount: 5, cost: 1900 },
      { id: "DARTHMALAK", dropRate: 0.333, shardCount: 10, cost: 3800 },
      { id: "DARTHMALAK", dropRate: 0.333, shardCount: 15, cost: 5700 },
      { id: "HERMITYODA", dropRate: 0.333, shardCount: 5, cost: 1350 },
      { id: "HERMITYODA", dropRate: 0.333, shardCount: 10, cost: 2700 },
      { id: "HERMITYODA", dropRate: 0.333, shardCount: 15, cost: 4050 },
      { id: "WAMPA", dropRate: 0.333, shardCount: 5, cost: 1350 },
      { id: "WAMPA", dropRate: 0.333, shardCount: 10, cost: 2700 },
      { id: "WAMPA", dropRate: 0.333, shardCount: 15, cost: 4050 },
      { id: "HOTHREBELSCOUT", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "HOTHREBELSOLDIER", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "ADMIRALACKBAR", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "CASSIANANDOR", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "ADMINISTRATORLANDO", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "PRINCESSLEIA", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "K2SO", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "BISTAN", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "SCARIFREBEL", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "LUKESKYWALKER", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "BIGGSDARKLIGHTER", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "STORMTROOPERHAN", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "CHOPPERS3", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "ZEBS3", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "STORMTROOPER", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "EZRABRIDGERS3", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "HERASYNDULLAS3", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "KANANJARRUSS3", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "SNOWTROOPER", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "ROYALGUARD", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "TIEFIGHTERPILOT", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "GRANDMOFFTARKIN", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "VEERS", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "DIRECTORKRENNIC", dropRate: 0.1667, shardCount: 10, cost: 400 },
      {
        id: "IMPERIALSUPERCOMMANDO",
        dropRate: 0.1667,
        shardCount: 10,
        cost: 400,
      },
      {
        id: "IMPERIALSUPERCOMMANDO",
        dropRate: 0.1667,
        shardCount: 10,
        cost: 400,
      },
      { id: "MAGMATROOPER", dropRate: 0.1667, shardCount: 10, cost: 400 },
      { id: "UMBARANSTARFIGHTER", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "XWINGRED2", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "XWINGRESISTANCE", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "UWINGSCARIF", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "ARC170CLONESERGEANT", dropRate: 0.1667, shardCount: 4, cost: 400 },
      {
        id: "JEDISTARFIGHTERAHSOKATANO",
        dropRate: 0.1667,
        shardCount: 4,
        cost: 400,
      },
      { id: "BLADEOFDORIN", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "XWINGBLACKONE", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "ARC170REX", dropRate: 0.1667, shardCount: 4, cost: 400 },
      { id: "GHOST", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "PHANTOM2", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "UWINGROGUEONE", dropRate: 0.25, shardCount: 4, cost: 400 },
      {
        id: "JEDISTARFIGHTERCONSULAR",
        dropRate: 0.25,
        shardCount: 4,
        cost: 400,
      },
      {
        id: "GEONOSIANSTARFIGHTER2",
        dropRate: 0.333,
        shardCount: 4,
        cost: 400,
      },
      {
        id: "GEONOSIANSTARFIGHTER3",
        dropRate: 0.333,
        shardCount: 4,
        cost: 400,
      },
      {
        id: "GEONOSIANSTARFIGHTER1",
        dropRate: 0.333,
        shardCount: 4,
        cost: 400,
      },
      { id: "SITHINFILTRATOR", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "TIEFIGHTERFIRSTORDER", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "TIEFIGHTERIMPERIAL", dropRate: 0.25, shardCount: 4, cost: 400 },
      { id: "GAUNTLETSTARFIGHTER", dropRate: 0.25, shardCount: 4, cost: 400 },
    ],
  },
  {
    id: "guild_events_store2",
    table: "Guild Events Store (Mk 2)",
    characters: [
      { id: "CAPITALMALEVOLENCE", dropRate: 1, shardCount: 10, cost: 2700 },
      { id: "CAPITALNEGOTIATOR", dropRate: 1, shardCount: 10, cost: 2700 },
      { id: "HOTHLEIA", dropRate: 0.5, shardCount: 7.5, cost: 1350 },
      { id: "IMPERIALPROBEDROID", dropRate: 0.5, shardCount: 7.5, cost: 1350 },
    ],
  },
  {
    id: "shard_store",
    table: "Shard Store",
    characters: [{ id: "GRIEVOUS", dropRate: 1, shardCount: 15, cost: 6750 }],
  },
];

const notAccelerated = [
  "VULTUREDROID",
  "BADBATCHHUNTER",
  "BADBATCHTECH",
  "FENNECSHAND",
  "SITHBOMBER",
  "IG2000",
  "BADBATCHWRECKER",
  "YWINGCLONEWARS",
  "BADBATCHECHO",
  "XANADUBLOOD",
  "HOUNDSTOOTH",
  "COMMANDSHUTTLE",
  "TIEREAPER",
  "GEONOSIANSTARFIGHTER2",
  "TIEBOMBERIMPERIAL",
  "MILLENNIUMFALCONEP7",
  "EMPERORSSHUTTLE",
  "HYENABOMBER",
  "JEDISTARFIGHTERCONSULAR",
  "GHOST",
  "PHANTOM2",
  "ARC170CLONESERGEANT",
  "JEDISTARFIGHTERANAKIN",
  "TIEFIGHTERIMPERIAL",
  "MILLENNIUMFALCONPRISTINE",
  "XWINGRESISTANCE",
  "GEONOSIANSTARFIGHTER1",
  "SLAVE1",
  "UWINGSCARIF",
  "XWINGBLACKONE",
  "UMBARANSTARFIGHTER",
  "SITHINFILTRATOR",
  "SITHFIGHTER",
  "GAUNTLETSTARFIGHTER",
  "TIEADVANCED",
  "YWINGREBEL",
  "BADBATCHOMEGA",
  "TIESILENCER",
  "KYLEKATARN",
  "DASHRENDAR",
  "BLADEOFDORIN",
  "DARTHTALON",
  "EBONHAWK",
  "TIEINTERCEPTOR",
  "MARAJADE",
];

const farmNodeList = nodeList.map(({ characters, ...node }) => {
  return {
    characters: characters.map((id) => {
      const exists = notAccelerated.some((c) => c === id);
      return {
        id,
        dropRate: exists ? 1 : 2,
      };
    }),
    ...node,
  };
});

module.exports = [
  ...farmNodeList,
  conquest,
  legendary,
  ...raids,
  territoryBattles,
  galacticLegends,
  ...stores,
];
