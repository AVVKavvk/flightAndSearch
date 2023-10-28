const { AirplaneService } = require("../services/index");
const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.createAirplane(req.body);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Airplane Created Successfully",
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
const destroy = async (req, res) => {
  try {
    const airplane = await airplaneService.deleteAirplane(req.params.id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Airplane Deleted Successfully",
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
    const airplane = await airplaneService.getAirplane(req.params.id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Airplane Fetched Successfully",
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
    const airplane = await airplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Airplane Updated Successfully",
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
const getAll = async (req, res) => {
  try {
    const airplanes = await airplaneService.getAllAirplane(req.query);
    return res.status(200).json({
      data: airplanes,
      success: true,
      message: "Airplanes Fetched Successfully",
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
  destroy,
  get,
  getAll,
  update,
};
