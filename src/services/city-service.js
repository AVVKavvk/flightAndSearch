const { CityReposotory } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityReposotory();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await this.cityRepository.deleteCity(cityId);
      return city;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async getAllCity(filter) {
    try {
      const cities = await this.cityRepository.getAllCity({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
}
module.exports = CityService;
