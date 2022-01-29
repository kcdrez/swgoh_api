const axios = require("axios");

class apiClient {
  baseUrl = "https://api.swgoh.help";
  token = null;

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
    const response = await this.fetch(this.baseUrl + "/swgoh/data", {
      collection: "unitsList",
      match: {
        id: id.toUpperCase(),
      },
    });
    return response[0];
  }

  async fetchAllUnits() {
    const response = await this.fetch(this.baseUrl + "/swgoh/data", {
      collection: "unitsList",
      project: {
        id: 1,
        thumbnailName: 1,
        nameKey: 1,
        descKey: 1,
        baseId: 1,
        unitTierList: 1,
      },
    });
    return response
      .filter((x) => x.id.includes(":SEVEN_STAR"))
      .map(({ unitTierList, ...x }) => {
        return {
          unitTierList: unitTierList.map(({ tier, equipmentSetList }) => {
            return {
              tier,
              equipmentSetList,
            };
          }),
          ...x,
        };
      });
  }

  async fetchGear() {
    return await this.fetch(this.baseUrl + "/swgoh/data", {
      collection: "equipmentList",
    });
  }
}

module.exports = new apiClient();
