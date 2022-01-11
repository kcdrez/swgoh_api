const axios = require("axios");

const baseUrl = "https://swgoh.gg/api";

class apiClient {
  constructor() {}

  async fetchPlayer(allyCode) {
    const response = await axios.get(baseUrl + "/player/" + allyCode);
    return response.data;
  }

  async fetchGear() {
    const response = await axios.get(baseUrl + "/gear");
    return response.data;
  }
}

module.exports = new apiClient();
