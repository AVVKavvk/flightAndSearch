const { Airpalne } = require("../models/index");
const { Op } = require("sequelize");
class AirplaneRepository {
  async createAirplane(data) {
    try {
      const airplane = await Airpalne.create(data);
      return airplane;
    } catch (error) {
      console.log("somethings went wrong in Airplane repsitory");
      throw error;
    }
  }
  async deleteAirplane(airplaneId) {
    try {
      const response = await Airpalne.destroy({
        where: {
          id: airplaneId,
        },
      });
      return response;
    } catch (error) {
      console.log("somethings went wrong in Airplane repsitory");
      throw error;
    }
  }
  async updateAirplane(airplaneId, data) {
    try {
      const airplane = await Airpalne.findByPk(airplaneId);
      airplane.modelNumber = data.modelNumber;
      airplane.capacity = data.capacity;
      await airplane.save();
      return airplane;
    } catch (error) {
      console.log("somethings went wrong in Airplane repsitory");
      throw error;
    }
  }
  async getAirplane(airplaneId) {
    try {
      const airplane = await Airpalne.findByPk(airplaneId);
      return airplane;
    } catch (error) {
      console.log("somethings went wrong in Airplane repsitory");
      throw error;
    }
  }
  async getAllAirplane(filter) {
    try {
      if (filter.modelNumber) {
        const airplanes = await Airpalne.findAll({
          where: {
            modelNumber: {
              [Op.startsWith]: filter.modelNumber,
            },
          },
        });
        return airplanes;
      }
      const airplane = await Airpalne.findAll();
      return airplane;
    } catch (error) {
      console.log("somethings went wrong in Airplane repsitory");
      throw error;
    }
  }
}
module.exports = AirplaneRepository;
