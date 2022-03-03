const { User, Recipe } = require("../../models");

// Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
//   return arg1 == arg2 ? options.fn(this) : options.inverse(this);
// });

var data = {
  userId: User.id,
};
console.log("----------------------", User.id);

$.extend(data, {
  isUserId: function () {
    return this.userId === Recipe.user_id;
  },
});
