const addIngretientInput = (event) => {
  event.preventDefault();
  const ingredientsContainer = document.querySelector(
    ".recipe-ingredients-container"
  );
  const newIngredientsInput = document.createElement("input");
  newIngredientsInput.type = "text";
  newIngredientsInput.className = "add-recipe-ingredients";
  newIngredientsInput.id = "add-recipe-ingredients";
  newIngredientsInput.placeholder = "Recipe ingredient...";

  ingredientsContainer.appendChild(newIngredientsInput);
};

const addMethodInput = (event) => {
  event.preventDefault();
  const methodsContainer = document.querySelector(".recipe-method-container");
  const newMethodInput = document.createElement("textarea");
  newMethodInput.className = "add-recipe-method-step";
  newMethodInput.id = "add-recipe-method-step";
  newMethodInput.placeholder = "Next recipe method step...";

  methodsContainer.appendChild(newMethodInput);
};

const newRecipeHandler = (event) => {
  event.preventDefault();

  const ingredientsContainer = document.querySelector(
    ".recipe-ingredients-container"
  ).elements;

  console.log(ingredientsContainer);

  const recipeIngredientsArr = [];
  const recipeMethodsArr = [];

  const recipeName = document.querySelector(".add-recipe-name").value.trim();
  const recipeCookingTime = document
    .querySelector(".add-recipe-cooking-time")
    .value.trim();
  const recipeServes = document
    .querySelector(".add-recipe-serves")
    .value.trim();
  const recipeSummary = document
    .querySelector(".add-recipe-summary")
    .value.trim();
  // const recipeIngredients = document
  //   .querySelector(".add-recipe-ingredients")
  //   .value.trim();
  // const recipeMethods = document
  //   .querySelector(".add-recipe-method-step")
  //   .value.trim();

  // recipeIngredientsArr.push(recipeIngredients);
  // recipeMethodsArr.push(recipeMethods);

  console.log(recipeName);
  console.log(recipeCookingTime);
  console.log(recipeServes);
  console.log(recipeSummary);
  console.log(recipeIngredientsArr);
  console.log(recipeMethodsArr);
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
