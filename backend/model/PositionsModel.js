const { model } = require("mongoose");

const { PostitionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PostitionsSchema);

module.exports = { PositionsModel };
