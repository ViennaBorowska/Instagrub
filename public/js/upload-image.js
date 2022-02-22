const imageFormHandler = async (event) => {
  event.preventDefault();

  const imageForm = document.querySelector("#profile-image-form");
  imageForm.submit();
};

document
  .querySelector("#profile-file")
  .addEventListener("change", imageFormHandler);
