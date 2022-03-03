const { Comments } = require("../models");

const commentData = [
  {
    comment_desc: "Delicious.",
    user_id: 1,
    recipe_id: 1,
  },
  {
    comment_desc: "Quick, easy and tasty!",
    user_id: 2,
    recipe_id: 1,
  },
  {
    comment_desc: "Really well balanced spices, bootiful.",
    user_id: 8,
    recipe_id: 2,
  },
  {
    comment_desc: "Yummy!",
    user_id: 4,
    recipe_id: 2,
  },
  {
    comment_desc: "Fiddly but worth it.",
    user_id: 6,
    recipe_id: 3,
  },
  {
    comment_desc: "WOW! F***ING AMAZING!",
    user_id: 6,
    recipe_id: 4,
  },
  {
    comment_desc: "Healthy and filling",
    user_id: 8,
    recipe_id: 5,
  },
  {
    comment_desc: "Mmmmmmmm delicious, sooooo good.",
    user_id: 7,
    recipe_id: 6,
  },
  {
    comment_desc: "Amazing.",
    user_id: 8,
    recipe_id: 6,
  },
  {
    comment_desc: "Fave",
    user_id: 1,
    recipe_id: 7,
  },
  {
    comment_desc: "Simply sumptuous, darling!",
    user_id: 5,
    recipe_id: 8,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;

// test
