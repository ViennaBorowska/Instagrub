const deleteRecipe = document.getElementById("delete-recipe-btn");
const updateRecipe = document.getElementById("update-recipe-btn");
const id = window.location.toString().split("/").pop();

deleteRecipe.addEventListener("click", async (event) => {
  event.preventDefault();

  const res = await fetch(`/recipe/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    document.location.replace("/feed");
  } else {
    alert("delete failed");
  }
});

updateRecipe.addEventListener("click", async (event) => {
  event.preventDefault();
  document.location.replace(`/edit-recipe/${id}`);
});
