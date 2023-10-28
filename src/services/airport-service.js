const { AirportRepository } = require("../repository/index");
const airportRepository = new AirportRepository();
class AirportService {
  async createAirport(data) {
    try {
      const airport = await airportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async deleteAirport(airportId) {
    try {
      const respone = await airportRepository.deleteAirport(airportId);
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async updateAirport(airportId, data) {
    try {
      const respone = await airportRepository.updateAirport(airportId, data);
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async getAirport(airportId) {
    try {
      const respone = await airportRepository.getAirport(airportId);
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
  async getAllAirport(data) {
    try {
      const respone = await airportRepository.getAllAirport({
        name: data.name,
      });
      return respone;
    } catch (error) {
      console.log("somethings went wrong on Services Layer");
      throw error;
    }
  }
}

module.exports = AirportService;
