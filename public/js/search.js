const searchHandler = async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    var form = document.getElementById("search-form");
    var formData = new FormData();
    //formData.append('searchInput': document.getElementById("searchInput").value);
    console.log(document.getElementById("searchInput").value);
    if (formData) {
      const response = await fetch("/api/recipes/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchInput: document.getElementById("searchInput").value,
        }),
      })
        .then((response) => response.json())
        .then((recipeCards) => {
          console.log(recipeCards);
          return recipeCards;
        });
    }
  }
};

document
  .querySelector("#searchInput")
  .addEventListener("keydown", searchHandler);
