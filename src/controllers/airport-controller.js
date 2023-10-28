const { AirportService } = require("../services/index");
const airportService = new AirportService();
const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Airport Created Successfully",
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
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Airport Deleted Successfully",
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
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Airport Updated Successfully",
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
    const airport = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Airport Fetched Successfully",
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
    const airport = await airportService.getAllAirport(req.query);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Airports Fetched Successfully",
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
  update,
  get,
  getAll,
};
