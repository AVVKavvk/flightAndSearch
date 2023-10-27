const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  // PSOT -> req.body
  try {
    const city = await cityService.createCity(req.body);
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
  // DELETE -> city/:id
  try {
    const respone = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: respone,
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
  // GET -> city/:id
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
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
  // PUT -> city/:id -> req.body
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
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
const getAllCity = async (req, res) => {
  try {
    const cities = await cityService.getAllCity();
    return res.status(200).json({
      data: cities,
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
  getAllCity,
};
