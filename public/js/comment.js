const commentBtn = document.getElementById("single-recipe-comment-button");

commentBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  console.log("add comment button pressed");

  const commentContent = document
    .getElementById("single-recipe-comment-input")
    .value.trim();
  const recipe_id = window.location.toString().split("/").pop();

  const newComment = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      comment_desc: commentContent,
      recipe_id: recipe_id,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (newComment.ok) {
    // alert("comment successful");
    document.location.replace(`/recipe/${recipe_id}`);
  } else {
    alert("comment failed");
  }
});
