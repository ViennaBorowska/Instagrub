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
  newIngredientsInput.name = "add-recipe-ingredients";

  ingredientsContainer.appendChild(newIngredientsInput);
};

const addMethodInput = (event) => {
  event.preventDefault();
  const methodsContainer = document.querySelector(".recipe-method-container");
  const newMethodInput = document.createElement("textarea");
  newMethodInput.className = "add-recipe-method-step";
  newMethodInput.id = "add-recipe-method-step";
  newMethodInput.placeholder = "Next recipe method step...";
  newMethodInput.name = "add-recipe-method-step";

  methodsContainer.appendChild(newMethodInput);
};

const newRecipeHandler = (event) => {
  event.preventDefault();

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
  var ingredientInput = document.getElementsByName("add-recipe-ingredients");
  for (var i = 0; i < ingredientInput.length; i++) {
    var a = ingredientInput[i].value.trim();
    recipeIngredientsArr.push(a);
  }

  var methodInput = document.getElementsByName("add-recipe-method-step");
  for (var i = 0; i < methodInput.length; i++) {
    var a = methodInput[i].value.trim();
    recipeMethodsArr.push(a);
  }

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