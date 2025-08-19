document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const res = await fetch("http://localhost:8080/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
          alert("Credenciais inválidas");
          return;
        }

        const data = await res.json();
        localStorage.setItem("token", data.access_token);

        // Vai para home.html
        window.location.href = "home.html";
      } catch (err) {
        alert("Erro ao conectar com o servidor");
      }
    });
  }
});
