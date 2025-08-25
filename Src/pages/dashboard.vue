<script setup>
import { ref, onMounted } from "vue";
import { AuthService } from "../services/authService";

const user = ref(null);

onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});

const logout = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  if (refreshToken) {
    try {
      await AuthService.logout(refreshToken);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }
  // Limpa o usuário do localStorage e redireciona
  localStorage.removeItem("user");
  localStorage.removeItem("refresh_token");
  window.location.href = "/login";
};
</script>

<template>
  <div class="p-6 text-black">
    <h1 class="text-2xl">
      Bem-vindo, {{ user?.name || "Usuário" }}
    </h1>
    <button class="btn mt-4" @click="logout">
      Sair
    </button>
  </div>
</template>
