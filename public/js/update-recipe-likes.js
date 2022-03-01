const updateRecipeLikesHandler = async (event) => {
  event.preventDefault();
  const id = window.location.toString().split("/").pop();
  // console.log(formData);
  if (id) {
    const response = await fetch(`/api/recipes/update-recipe-likes/${id}`, {
      method: "PUT",
    });
    if (response.ok) {
      document.location.replace("/feed");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".recipe-like")
  .addEventListener("click", updateRecipeLikesHandler);
