const { AirplaneRepository } = require("../repository/index");
const airplaneRepository = new AirplaneRepository();
class AirplaneService {
  async createAirplane(data) {
    try {
      const airplane = await airplaneRepository.createAirplane(data);
      return airplane;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async deleteAirplane(airplaneId) {
    try {
      const respone = await airplaneRepository.deleteAirplane(airplaneId);
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async updateAirplane(airplaneId, data) {
    try {
      const respone = await airplaneRepository.updateAirplane(airplaneId, data);
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async getAirplane(airplaneId) {
    try {
      const respone = await airplaneRepository.getAirplane(airplaneId);
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async getAllAirplane(data) {
    try {
      const respone = await airplaneRepository.getAllAirplane({
        name: data.name,
      });
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
}

module.exports = AirplaneService;
