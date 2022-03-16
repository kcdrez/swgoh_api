const express = require("express");
const gearData = require('../gear/seedData')

const routes = express.Router({
  mergeParams: true,
});

routes.get("/", async (_req, res) => {
  try {
    res.status(200).json(getMappedGear());
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

routes.get("/scavenger", async (_req, res) => {
  try {
    const gearData = getMappedGear();
    gearData.forEach(gear => {
      const circuitBoardMatch = relicSalvage.carbonite_circuit_board[gear.name];
      if (circuitBoardMatch) {
        if (gear.scavenger) {
          gear.scavenger.push({
            cost: circuitBoardMatch,
            type: 'carbonite_circuit_board'
          })
        } else {
          gear.scavenger = [{
            cost: circuitBoardMatch,
            type: 'carbonite_circuit_board'
          }]
        }
      }
    })
    res.status(200).json(gearData);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

function getMappedGear() {
  return gearData.map(({ lookupMissionList, ...restGear }) => {
    const locations = lookupMissionList.map((mission) => {
      const {
        campaignId,
        campaignNodeDifficulty,
        campaignMapId,
        campaignMissionId,
        campaignNodeId,
      } = mission.missionIdentifier;
      const difficulty = difficultyIds[campaignNodeDifficulty];
      const table = tableIds[campaignId];
      const map = mapIds[campaignMapId];
      const missionName = missionIds[campaignMissionId];

      return {
        table,
        difficulty,
        map,
        mission: missionName,
        energy: 0,
        id: '',
      }

      if (campaignMapId === "CHALLENGES") {
        const label = `Daily Challenges (${challenges[campaignNodeId]})`;
        if (!locations.includes(label)) {
          locations.push(label);
        }
      } else if (table) {
        locations.push(`${table} ${level}-${node} (${difficulty})`);
      }
    });
    return {
      locations,
      ...restGear
    }
  })
}

module.exports = {
  routes,
};



//todo Dark Hard seem to be off

const difficultyIds = {
  4: "Normal",
  5: "Hard",
};

const tableIds = {
  C01D: "Dark",
  C01L: "Light",
  C01SP: "Fleet",
  EVENTS: "",
};

const mapIds = {
  M01: 1,
  M02: 2,
  M03: 3,
  M04: 4,
  M05: 5,
  M06: 6,
  M07: 7,
  M08: 8,
  M09: 9,
  M010: 10,
  M011: 11,
  M012: 12,
  CHALLENGES: "Daily Challenge",
};

const missionIds = {
  Mi01: "A",
  Mi02: "B",
  Mi03: "C",
  Mi04: "D",
  Mi05: "E",
  Mi06: "F",
  Mi07: "G",
  Mi08: "H",
  Mi09: "I",
  Mi10: "J",
  Mi11: "K",
  Mi12: "L",
  DIFF05: "",
};

const challenges = {
  EQUIPMENT_STRENGTH: "Sun, Mon, Thurs",
  EQUIPMENT_INTELLIGENCE: "Sun, Tues, Fri",
  EQUIPMENT_AGILITY: "Sun, Wed, Sat",
};

const relicSalvage = {
  carbonite_circuit_board: {
    'Mk 3 Arakyd Droid Caller Salvage': 2,
    'Mk 1 Athakam Medpac Salvage': 2,
    'Mk 1 Chedak Comlink Salvage': 2,
    'Mk 3 Chiewab Hypo Syringe Prototype Salvage': 2,
    'Mk 1 Carbanti Sensor Array Prototype Salvage': 2,
    'Mk 3 Merr-Sonn Thermal Detonator Prototype Salvage': 2,
    'Mk 2 Sienar Holo Projector Prototype Salvage': 2,
    'Mk 1 Zaltin Bacta Gel Prototype Salvage': 2,
    'Mk 3 Sienar Holo Projector Salvage': 2,
    'Mk 2 Zaltin Bacta Gel Prototype Salvage': 2,
    'Mk 3 Chedak Comlink Prototype Salvage': 2,
    'Mk 3 Carbanti Sensor Array Salvage': 2,
    'Mk 3 Czerka Stun Cuffs Salvage': 2,
    'Mk 3 Zaltin Bacta Gel Salvage': 2,
    'Mk 2 Chedak Comlink Prototype Salvage': 2,
    'Mk 1 BlasTech Weapon Mod': 6,
    'Mk 1 BAW Armor Mod': 6,
    'Mk 1 Neuro-Saav Electrobinoculars': 6,
    'Mk 1 TaggeCo Holo Lens': 6,
    'Mk 1 Nubian Security Scanner': 6,
    'Mk 1 Loronar Power Cell': 6,
    'Mk 1 Fabritech Data Pad': 6,
    'Mk 1 Arakyd Droid Caller': 6,
    'Mk 1 BioTech Implant': 6,
    'Mk 1 A-KT Stun Gun': 6,
    'Mk 1 CEC Fusion Furnace': 6,
    'Mk 1 Merr-Sonn Shield Generator': 6,
    'Mk 2 BlasTech Weapon Mod': 6,
    'Mk 2 BAW Armor Mod': 6,
    'Mk 2 Neuro-Saav Electrobinoculars': 6,
    'Mk 2 TaggeCo Holo Lens': 6,
    'Mk 2 Nubian Security Scanner': 6,
    'Mk 2 Loronar Power Cell': 6,
    'Mk 1 SoroSuub Keypad': 6,
    'Mk 1 Czerka Stun Cuffs': 6,
    'Mk 1 Chiewab Hypo Syringe': 6,
    'Mk 2 BioTech Implant': 6,
    'Mk 2 CEC Fusion Furnace': 6,
    'Mk 2 Merr-Sonn Shield Generator': 6,
    'Mk 3 BlasTech Weapon Mod': 6,
    'Mk 3 BAW Armor Mod': 6,
    'Mk 3 Neuro-Saav Electrobinoculars': 6
    ,
    'Mk 3 TaggeCo Holo Lens': 6,
    'Mk 3 Loronar Power Cell': 6,
    'Mk 2 Fabritech Data Pad': 6,
    'Mk 1 Nubian Design Tech': 6,
    'Mk 2 SoroSuub Keypad': 6,
    'Mk 2 Arakyd Droid Caller': 6,
    'Mk 1 Sienar Holo Projector': 6,
    'Mk 2 Chiewab Hypo Syringe': 6,
    'Mk 3 BioTech Implant': 6,
    'Mk 3 Nubian Security Scanner': 6,
    'Mk 3 Fabritech Data Pad': 6,
    'Mk 2 Nubian Design Tech': 6,
    'Mk 3 SoroSuub Keypad': 6,
    'Mk 2 A-KT Stun Gun': 6,
    'Mk 3 CEC Fusion Furnace': 6,
    'Mk 3 Merr-Sonn Shield Generator': 6,
    'Mk 1 Merr-Sonn Thermal Detonator': 6,
    'Mk 3 Arakyd Droid Caller': 6,
    'Mk 1 Athakam Medpac': 6,
    'Mk 1 Chedak Comlink': 6,
    'Mk 3 A-KT Stun Gun': 6,
    'Mk 2 Merr-Sonn Thermal Detonator': 6,
    'Mk 3 Nubian Design Tech': 6,
    'Mk 3 Chiewab Hypo Syringe': 6,
    'Mk 2 Chedak Comlink': 6,
    'Mk 1 Carbanti Sensor Array': 6,
    'Mk 3 Merr-Sonn Thermal Detonator': 6,
    'Mk 2 Sienar Holo Projector': 6,
    'Mk 2 Czerka Stun Cuffs': 6,
    'Mk 1 Zaltin Bacta Gel': 6,
    'Mk 2 Athakam Medpac': 6,
    'Mk 2 Carbanti Sensor Array': 6,
    'Mk 3 Sienar Holo Projector': 6,
    'Mk 2 Zaltin Bacta Gel': 6,
    'Mk 3 Athakam Medpac': 6,
    'Mk 3 Chedak Comlink': 6,
    'Mk 3 Carbanti Sensor Array': 6,
    'Mk 3 Czerka Stun Cuffs': 6,
    'Mk 3 Zaltin Bacta Gel': 6,
    'Mk 2 BAW Armor Mod Prototype': 6,
    'Mk 2 Neuro-Saav Electrobinoculars Prototype': 6,
    'Mk 2 Nubian Security Scanner Prototype': 6,
    'Mk 1 Chiewab Hypo Syringe Prototype': 6,
    'Mk 3 TaggeCo Holo Lens Prototype': 6,
    'Mk 1 Nubian Design Tech Prototype': 6,
    'Mk 2 SoroSuub Keypad Prototype': 6,
    'Mk 3 Chiewab Hypo Syringe Prototype': 6,
    'Mk 2 Chedak Comlink Prototype': 6,
    'Mk 1 Carbanti Sensor Array Prototype': 6,
    'Mk 3 Merr-Sonn Thermal Detonator Prototype': 6,
    'Mk 2 Sienar Holo Projector Prototype': 6,
    'Mk 1 Zaltin Bacta Gel Prototype': 6,
    'Mk 2 Zaltin Bacta Gel Prototype': 6,
    'Mk 3 Chedak Comlink Prototype': 6
  }
}