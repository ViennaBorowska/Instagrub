// ------------------------- JS to show and hide modal
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

// ------------------------------------------------------------- JS to post comments to each modal.
const commentBtns = document.getElementsByClassName("single-recipe-comment-button");

[...commentBtns].forEach((commentBtn, index) => {
commentBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const commentContent = document.getElementsByClassName("single-recipe-comment-input")[index].value;
  const recipeCommentId = document.getElementsByClassName("recipe-card-id-span")[index].innerHTML;
  const newComment = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      comment_desc: commentContent,
      recipe_id: recipeCommentId,
    }),
    headers: { "Content-Type": "application/json" },
  });
  window.location.reload();
})
});



