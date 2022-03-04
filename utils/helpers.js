const { Recipe, User } = require("../models");

const moment = require("moment");

const formatDate = (date) => moment(date).format("HH:mm ~ M/D/YYYY");

const helpers = {
  formatDate,
};

module.exports = helpers;
