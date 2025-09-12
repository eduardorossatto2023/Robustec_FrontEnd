<template>
  <!-- Fundo com degrade laranja claro -> laranja escuro -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-500 to-orange-800">
    <!-- Card central branco + sombra -->
    <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      
      <!-- Logo da empresa -->
      <img src="../assets/robustec.png" alt="Robustec Logo" class="w-56 mb-10000" />

      <!-- Mensagem de erro -->
      <div v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</div>

      <!-- Inputs -->
      <input v-model="form.email" class="input mb-3" placeholder="Email" type="email" />
      <input v-model="form.password" class="input mb-4" placeholder="Senha" type="password" />

      <!-- Botão -->
      <button class="btn w-full" :disabled="loading" @click="submit">
        Entrar
      </button>
    </div>
  </div>
</template>

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
    if (res.user.role === "comercial") {
      window.location.href = "/comercial";
    } else if (res.user.role === "engenharia") {
      window.location.href = "/engenharia";
      } else {
       window.location.href = "/";
      }

  } catch (e) {
    error.value = e.response?.data || e.message;
  } finally {
    loading.value = false;
  }
}
</script>
<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #065f46; /* verde escuro */
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus {
  border-color: #065f46; /* verde escuro no foco */
  box-shadow: 0 0 0 2px rgba(6, 95, 70, 0.3); /* sombra sutil verde */
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #065f46; /* verde escuro */
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #054e3c; /* verde escuro mais forte no hover */
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
