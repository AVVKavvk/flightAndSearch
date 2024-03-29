const { City } = require("../models/index");
const { Op } = require("sequelize");
class cityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");

      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      // console.log(city);
      return city;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }
  async getAllCity(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              // [Op.substring]: filter.name,
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const citits = await City.findAll();
      // console.log(city);
      return citits;
    } catch (error) {
      console.log("somethings went wrong in Repository Layer");
      throw error;
    }
  }
}
module.exports = cityRepository;
