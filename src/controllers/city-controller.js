const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req, body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "sometings went wrong",
      err: error,
    });
  }
};
const destory = async (req, res) => {
  try {
    await cityService.deleteCity(req.body);
    return res.status(203).json({
      data: {},
      success: true,
      message: "city deleted successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "sometings went wrong",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.body);
    return res.status(204).json({
      data: city,
      success: true,
      message: "city fetched successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "sometings went wrong",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.body);
    return res.status(205).json({
      data: city,
      success: true,
      message: "city updated successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "sometings went wrong",
      err: error,
    });
  }
};

module.exports = {
  create,
  destory,
  get,
  update,
};
