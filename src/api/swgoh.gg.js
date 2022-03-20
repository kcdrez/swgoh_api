const axios = require("axios");

const baseUrl = "https://swgoh.gg/api";

class apiClient {
  constructor() { }

  async fetchPlayer(allyCode) {
    const response = await axios.get(baseUrl + "/player/" + allyCode);
    return response.data;
  }

  async fetchGear() {
    const response = await axios.get(baseUrl + "/gear");
    return response.data;
  }

  async fetchUnits() {
    const response = await axios.get(baseUrl + "/characters");
    return response.data;
  }

  async fetchShips() {
    const response = await axios.get(baseUrl + "/ships");
    return response.data;
  }

  async fetchAccess(guildId, allyCode) {
    if (allyCode == "843518525") {
      return { role: 4 };
    }

    const response = await axios.get(baseUrl + "/guild-profile/" + guildId);
    const member = response.data.data.members.find((x) => {
      return x.ally_code == allyCode;
    });
    let role = 0;
    if (member) {
      role = member.member_level;
    }
    return { role };
  }

  async fetchGuild(guildId) {
    const response = await axios.get(baseUrl + "/guild/" + guildId);
    return response.data
  }
}

module.exports = new apiClient();
