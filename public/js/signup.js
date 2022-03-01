const signupEL = document.getElementById("sign-up-btn-id");

signupEL.addEventListener("click", async (event) => {
  event.preventDefault();

  const userNameEL = document
    .getElementById("sign-up-username-input")
    .value.trim();
  const passWordEl = document
    .getElementById("sign-up-password-input")
    .value.trim();
  const confirmEl = document
    .getElementById("confirm-password-input")
    .value.trim();

  if (passWordEl === confirmEl) {
    const newUser = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({
        username: userNameEL,
        password: passWordEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (newUser.ok) {
      document.location.replace("/edit-profile");
    } else {
      alert("sign up failed");
    }
  } else {
    alert("passwords dont match");
  }
});
