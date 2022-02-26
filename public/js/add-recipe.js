const addIngretientInput = (event) => {
  event.preventDefault();
  const ingredientsContainer = document.querySelector(
    ".recipe-ingredients-container"
  );
  const newIngredientsInput = document.createElement("input");
  newIngredientsInput.type = "text";
  newIngredientsInput.className = "add-recipe-ingredients";
  newIngredientsInput.id = "add-recipe-ingredients";
  newIngredientsInput.name = "recipe_ingredients";

  ingredientsContainer.appendChild(newIngredientsInput);
};

const addMethodInput = (event) => {
  event.preventDefault();
  const methodsContainer = document.querySelector(".recipe-method-container");
  const newMethodInput = document.createElement("textarea");
  newMethodInput.className = "add-recipe-method-step";
  newMethodInput.id = "add-recipe-method-step";
  newMethodInput.placeholder = "Next recipe method step...";
  newMethodInput.name = "recipe_method";

  methodsContainer.appendChild(newMethodInput);
};

const newRecipeHandler = async (event) => {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var formData = new FormData(form);
  // console.log(formData);
  if (formData) {
    const response = await fetch("/api/recipes/add-recipe", {
      method: "POST",
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
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngretientInput);
document
  .querySelector(".add-method-step")
  .addEventListener("click", addMethodInput);
document
  .querySelector(".submit-recipe")
  .addEventListener("click", newRecipeHandler);
