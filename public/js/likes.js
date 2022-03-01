// const User = require("../../models/User");
// const Recipe = require("../../models/Recipe");
// const Comments = require("../../models/Comments");
// const like = document.getElementById("login-btn-id");

// function incrementLikes(recipe) {
//   let likes = 0;
//   fetch(`http://localhost:3001/recipe/${recipe.id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       likes = data.likes;
//     });

//   let newLikes = likes + 1;

//   fetch("/recipe/:id", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({ likes: newLikes }),
//   });

//   let likesText = `${newLikes} likes`;

//   return likesText;
// }

// function addLike(data) {
//   const likesCounter = document.querySelector(".like-icon");
//   likesCounter.innerText = `${data.likes} likes`;

//   const likeButton = document.querySelector(".likes");

//   likeButton.addEventListener("click", function (event) {
//     likesCounter.innerText = incrementLikes(data);
//   });
// }
