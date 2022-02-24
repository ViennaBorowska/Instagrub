const { User } = require("../models");

const userData = [
  {
    username: "alistair100",
    password: "password",
    first_name: "Alistair",
    last_name: "Houghton",
    user_bio: "I really like barbeques. Steak is my favourite food.",
  },
  {
    username: "matt100",
    password: "password",
    first_name: "Matthew",
    last_name: "Williams",
    user_bio: "I really like Italian food. Pasta is my favourite food.",
  },
  {
    username: "vienna100",
    password: "password",
    first_name: "Vienna",
    last_name: "Borowska",
    user_bio: "I really like Italian food. Pizza is my favourite food.",
  },
  {
    username: "sampreeti",
    password: "password",
    first_name: "Sampreeti",
    last_name: "Das",
    user_bio: "I really like Indian food. Fish is my favourite food.",
    user_image: "sample-profile.jpg",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
