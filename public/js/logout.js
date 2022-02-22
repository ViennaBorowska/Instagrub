const logoutEl = document.getElementById("logout-btn");

logoutEl.addEventListener("click", async (event) => {
  event.preventDefault();

  const res = await fetch("api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    document.location.replace("/login");
    // alert("Logout Successful");
  } else {
    alert("logout failed");
  }
});
