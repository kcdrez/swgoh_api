const hardNodes = require("./hard");
const normalNodes = require("./normal");
const legendary = require("./legendary");
const stores = require("./stores");
const other = require("./other");
const gearList = require("../../gear/seedData");

const ships = [
  "EBONHAWK",
  "VULTUREDROID",
  "SITHBOMBER",
  "IG2000",
  "YWINGCLONEWARS",
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
  "TIESILENCER",
  "BLADEOFDORIN",
  "TIEINTERCEPTOR",
  "FIRSTORDERTIEECHELON",
  "MG100STARFORTRESSSF17",
  "OUTRIDER",
  "RAVENSCLAW",
];

const notAcceleratedUnits = [
  "DARTHTALON",
  "MARAJADE",
  "SECONDSISTER",
  "NINTHSISTER",
  "SEVENTHSISTER",
  "EIGHTHBROTHER",
  "FIFTHBROTHER",
  "IDENVERSIOEMPIRE",
  "50R-T",
  "ADMIRALRADDUS",
  "KRRSANTAN",
  "UNDERCOVERLANDO",
  "BOUSHH",
  "HONDO",
  "TRIPLEZERO",
  "BT1",
];

const notAccelerated = [...ships, ...notAcceleratedUnits];

const farmNodeList = [...hardNodes, ...normalNodes].map(
  ({ characters, ...node }) => {
    const gear = gearList.reduce((acc, gear) => {
      const match = gear.locations.find((location) => location.id === node.id);
      if (match) {
        acc.push({ id: gear.id });
      }
      return acc;
    }, []);
    return {
      characters: characters.map((id) => {
        const exists = notAccelerated.some((c) => c === id);
        return {
          id,
          dropRate: exists ? 1 : 2,
        };
      }),
      ...node,
      gear,
    };
  }
);

module.exports = [...farmNodeList, ...legendary, ...stores, ...other];
