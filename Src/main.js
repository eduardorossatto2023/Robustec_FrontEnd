// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const data = await login(email, password); // função do api.js
        localStorage.setItem("token", data.access_token);
        window.location.href = "home.html";
      } catch (err) {
        alert(err.message);
      }
    });
  }
});

//alterado para commit 