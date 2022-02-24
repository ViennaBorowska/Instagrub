const viewProfile = document.getElementById("recipe-user-name");
const userProfile = require("../../models/User");

viewProfile.addEventListener("click", async (event) => {
  event.preventDefault();

  event.render(`api/users/${userProfile.id}`);
});
