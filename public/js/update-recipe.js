const updateRecipeHandler = async (event) => {
  event.preventDefault();
  const form = document.getElementById("myForm");
  const formData = new FormData(form);
  const id = window.location.toString().split("/").pop();
  // console.log(formData);
  if (formData) {
    const response = await fetch(`/api/recipes/update-recipe/${id}`, {
      method: "PUT",
      body: formData,
    });
    if (response.ok) {
      document.location.replace("/feed");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".update-recipe")
  .addEventListener("click", updateRecipeHandler);
