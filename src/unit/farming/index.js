import hardNodes from "./hard.js";
import normalNodes from "./normal.js";
import legendary from "./legendary.js";
import stores from "./stores.js";
import other from "./other.js";
import gearList from "../../gear/seedData.js";

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
  "TIEDEFENDER",
  "SITHSUPREMACYCLASS",
  "TIEDAGGER",
  "MARAUDER",
  "COMEUPPANCE",
  "PUNISHINGONE",
];

const notAcceleratedUnits = [
  "MASTERQUIGON",
  "NIGHTTROOPER",
  "DEATHTROOPERPERIDEA",
  "CAPTAINENOCH",
  "MORGANELSBETH",
  "GREATMOTHERS",
  "SHINHATI",
  "OMEGAS3",
  "BATCHERS3",
  "HUNTERS3",
  "WRECKERS3",
  "CROSSHAIRS3",
  "APPO",
  "OPERATIVE",
  "DISGUISEDCLONETROOPER",
];

const notAccelerated = [...ships, ...notAcceleratedUnits];

const farmNodeList = [...hardNodes, ...normalNodes].map(
  ({ characters, ...node }) => {
    const gear = gearList.reduce((acc, gear) => {
      if (gear.locations) {
        const match = gear.locations.find(
          (location) => location.id === node.id
        );
        if (match) {
          acc.push({ id: gear.id });
        }
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

export default [...farmNodeList, ...legendary, ...stores, ...other];
