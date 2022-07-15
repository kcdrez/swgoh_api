const units = require("./units");
const ships = require("./ships");

module.exports = [
  ...units,
  ...ships.map(({ power, ...x }) => {
    return { ...x, is_ship: true };
  }),
];
