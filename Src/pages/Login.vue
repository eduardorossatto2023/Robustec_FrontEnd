<script setup>
import { ref } from "vue";
import { AuthService } from "../services/authService";

const form = ref({ email: "", password: "" });
const loading = ref(false);
const error = ref("");

async function submit() {
  error.value = "";
  loading.value = true;
  try {
    const res = await AuthService.login(form.value);
    localStorage.setItem("access_token", res.access_token);
    localStorage.setItem("refresh_token", res.refresh_token);
    localStorage.setItem("user", JSON.stringify(res.user));
    window.location.href = "/";
  } catch (e) {
    error.value = e.response?.data || e.message;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <!-- Fundo branco -->
  <div class="min-h-screen flex items-center justify-center bg-white">
    <!-- Card central branco + sombra -->
    <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
      <!-- Título -->
      <h1 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Login</h1>

      <!-- Mensagem de erro -->
      <div v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</div>

      <!-- Inputs -->
      <input v-model="form.email" class="input mb-3" placeholder="Email" type="email" />
      <input v-model="form.password" class="input mb-4" placeholder="Senha" type="password" />

      <!-- Botão -->
      <button class="btn w-full" :disabled="loading" @click="submit">
        Entrar
      </button>

      <p class="mt-3 text-xs text-gray-500">
        Não tem conta?
        <a href="/register" class="text-indigo-600 hover:underline">Cadastrar</a>
      </p>
    </div>
  </div>
</template>
