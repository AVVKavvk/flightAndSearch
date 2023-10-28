const { Airport } = require("../models/index");
const { Op } = require("sequelize");
class AirportRepository {
  async createAirport(data) {
    try {
      const airport = await Airport.create(data);
      return airport;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }
  async deleteAirport(airportId) {
    try {
      const respone = await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return respone;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }
  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findByPk(airportId);
      airport.name = data?.name;
      await airport.save();
      return airport;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }
  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);

      return airport;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }
  async getAllAirport(filter) {
    try {
      const airport = await Airport.findAll({
        where: {
          name: {
            [Op.startsWith]: filter.name,
          },
        },
      });

      return airport;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }
}
module.exports = AirportRepository;
