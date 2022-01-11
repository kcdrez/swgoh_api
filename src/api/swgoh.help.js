const axios = require("axios");

class apiClient {
  baseUrl = "https://api.swgoh.help";
  token = null;
  playerData = {};

  constructor() {}

  async fetch(url, payload = {}, retries = 0) {
    if (!this.token) {
      await this.connect();
    }
    try {
      return (
        await axios.post(url, Object.assign(payload, { language: "ENG_US" }), {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${this.token}`,
          },
        })
      ).data;
    } catch (err) {
      console.error(err);
      if (retries <= 3) {
        this.token = null;
        return this.fetch(url, payload, retries + 1);
      } else {
        throw new Error(err);
      }
    }
  }

  async connect() {
    const { data } = await axios.post(
      this.baseUrl + "/auth/signin",
      "username=drezzinator&password=cipjmbJ:11swgoh&grant_type=password&client_id=123&client_secret=abc",
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );
    this.token = data.access_token;
  }

  async fetchPlayer(allyCode) {
    const players = await this.fetch(this.baseUrl + "/swgoh/players", {
      allycodes: [allyCode],
    });
    return players[0];
  }

  async fetchUnit(id) {
    //todo: figure out how to pass in an or condition?
    const response = await this.fetch(this.baseUrl + "/swgoh/data", {
      collection: "unitsList",
      match: {
        id,
      },
    });
    return response[0];
  }

  async fetchAllUnits() {
    return await this.fetch(this.baseUrl + "/swgoh/data", {
      collection: "unitsList",
    });
  }
  async fetchData(collection) {
    return await this.fetch(this.baseUrl + "/swgoh/data", {
      collection,
    });
  }
  async fetchGear() {
    return await this.fetch(this.baseUrl + "/swgoh/data", {
      collection: "equipmentList",
    });
  }

  async fetchBattles() {
    return await this.fetch(this.baseUrl + "/swgoh/battles");
  }

  async fetchEvents() {
    return await this.fetch(this.baseUrl + "/swgoh/events");
  }

  async debug() {
    return await axios.get(
      "https://6814-184-96-186-220.ngrok.io/player/843518525"
    );
  }
}

module.exports = new apiClient();
