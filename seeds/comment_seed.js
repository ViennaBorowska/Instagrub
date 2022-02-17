const { Comments } = require('../models');

const commentData = [{
        comment_desc: "Lorem ipsum dolor sit amet",
        user_id: 1,
        recipe_id: 1
    },
    {
        comment_desc: "consectetur adipiscing elit",
        user_id: 2,
        recipe_id: 1
    },
    {
        comment_desc: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        user_id: 3,
        recipe_id: 1
    }
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;

// test