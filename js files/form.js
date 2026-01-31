const loginBtn = document.getElementById("loginBtn");
const loginCard = document.getElementById("loginCard");
const loginForm = document.getElementById("loginForm");

loginBtn.addEventListener("click", () => {
  loginCard.classList.remove("hidden");

  setTimeout(() => {
    loginCard.classList.add("show");
  }, 50);

  loginBtn.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login Submitted (Demo)");
});
