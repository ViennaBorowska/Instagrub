const signupEL = document.getElementById("sign-up-btn-id");
const tick = document.getElementById("tick");
const input = document.querySelector(".confirm-input");

signupEL.addEventListener("click", async (event) => {
  event.preventDefault();

  const passWordEl = document
    .getElementById("sign-up-password-input")
    .value.trim();
  const confirmEl = document
    .getElementById("confirm-password-input")
    .value.trim();
  const userNameEL = document
    .getElementById("sign-up-username-input")
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

const test = () => {
  const passWordEl = document
    .getElementById("sign-up-password-input")
    .value.trim();
    const confirmEl = document
    .getElementById("confirm-password-input")
    .value.trim();

  if (passWordEl === confirmEl) {
    tick.style.color = "rgb(33, 167, 33)"
  } else {
    tick.style.color = "rgb(255, 65, 65)";
  }
};

input.addEventListener("keyup", test);
