// src/services/api.js

const API_URL = "http://localhost:8080"; // teu back

// Função para login
export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Erro no login");
  }

  return res.json(); // retorna { access_token, refresh_token, user }
}

// Função para pegar info do usuário logado
export async function me() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/auth/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Não autenticado");
  return res.json();
}
