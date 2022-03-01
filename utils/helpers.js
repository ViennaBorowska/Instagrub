const moment = require("moment");

// module.exports = {
// format_date: (date) => {
//   return `
//   ${new Date(date).getHours()}:${new Date(date).getMinutes()} ~ ${new Date(
//     date
//   ).getDate()}.${new Date(date).getMonth() + 1}.${new Date(
//     date
//   ).getFullYear()}`;
// },
// };
const formatDate = (date) => moment(date).format("M/D/YYYY, HH:mm");

// const formatTime = (date) => moment(date).format("HH:mm");

const helpers = {
  formatDate,
};

module.exports = helpers;
