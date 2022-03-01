const btns = document.getElementsByClassName('trigger');
const spans = document.getElementsByClassName('close-button');
const modals = document.getElementsByClassName('modal');

[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].classList.toggle("show-modal"));
});

[...spans].forEach((span, ind) => {
  span.onclick = () => (modals[ind].classList.toggle("show-modal"));
});

window.onclick = (e) => {
  [...modals].forEach((modal) => {
    if (e.target === modal) {
      modal.classList.toggle("show-modal");
    }
  });
};  

// const commentBtn = document.getElementById("single-recipe-comment-button");

// commentBtn.addEventListener("click", async (event) => {
//   event.preventDefault();

//   console.log("add comment button pressed");

//   const commentContent = document
//     .getElementById("single-recipe-comment-input")
//     .value.trim();
//   // const recipe_id = window.location.toString().split("/").pop();
//   const recipe_id = document.getElementsByClassName("recipe-card-id-span").value.trim();

  
//     console.log("recipe id", recipe_id);
 

//   const newComment = await fetch("/api/comments", {
//     method: "POST",
//     body: JSON.stringify({
//       comment_desc: commentContent,
//       recipe_id: recipe_id,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
//   if (newComment.ok) {
//     // alert("comment successful");
//     document.location.replace(`/recipe/${recipe_id}`);
//   } else {
//     alert("comment failed");
//   }
// });
