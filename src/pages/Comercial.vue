<template>
  <div
    class="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-orange-500 to-orange-800"
  >
    <!-- Navbar full width -->
    <div
      class="w-full flex justify-between items-center p-4 bg-green-900 text-white shadow-lg fixed top-0 left-0 z-50"
    >
      <!-- Logo à esquerda -->
      <div class="flex items-center space-x-3">
        <img src="../assets/robusteco.png" alt="Logo" class="h-20" />
        <h2 class="text-2xl font-extrabold text-orange-400">ROBUSTEC</h2>
      </div>

      <!-- Nome do usuário e menu à direita -->
      <div class="relative flex items-center space-x-4">
        <span class="font-semibold text-lg">{{ user?.name || "Usuário" }}</span>

        <!-- Botão hamburger -->
        <button
          @click="toggleMenu"
          class="flex flex-col justify-between h-6 w-8 focus:outline-none"
        >
          <span class="block h-0.5 w-full bg-white"></span>
          <span class="block h-0.5 w-full bg-white"></span>
          <span class="block h-0.5 w-full bg-white"></span>
        </button>

        <!-- Menu dropdown -->
        <div
          v-if="menuOpen"
          ref="menuRef"
          class="absolute right-0 mt-20 w-60 bg-green-800 text-white rounded shadow-lg z-50"
        >
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goToRegister">
            Cadastrar Usuário
          </button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goToEditUsers">
            Editar Usuários
          </button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goTolistUsers">
            Listar Usuário
          </button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="logout">
            Sair
          </button>
        </div>
      </div>
    </div>

    <!-- Espaço extra para não sobrepor conteúdo -->
    <div class="h-32"></div>

    <!-- Lista de usuários maior -->
    <div class="p-8 border rounded shadow-md w-full max-w-4xl bg-white">
      <h2 class="text-2xl font-semibold mb-6 text-green-900">
        Lista de Usuários
      </h2>

      <ul class="text-lg">
        <li v-for="u in users" :key="u.id" class="mb-3 border-b py-2">
          {{ u.name }} - {{ u.email }}
        </li>
      </ul>

      <p v-if="users.length === 0" class="text-gray-500 text-lg">
        Nenhum usuário cadastrado.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { AuthService } from "../services/authService";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref(null);
const users = ref([]);
const menuOpen = ref(false);

onMounted(async () => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) user.value = JSON.parse(storedUser);
  await loadUsers();
});

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const goToRegister = () => {
  menuOpen.value = false;
  router.push("/register"); // rota para cadastrar usuário
};

const goToEditUsers = () => {
  menuOpen.value = false;
  router.push("/edit-users"); // rota para editar usuários
};

const goTolistUsers = () => {
  menuOpen.value = false;
  router.push("/comercial"); // rota para alterar cadastro
};

const logout = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  if (refreshToken) {
    try {
      await AuthService.logout(refreshToken);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }
  localStorage.removeItem("user");
  localStorage.removeItem("refresh_token");
  router.push("/");
};

const loadUsers = async () => {
  try {
    users.value = await AuthService.getUsers();
  } catch (error) {
    console.error("Erro ao carregar usuários:", error);
  }
};
</script>

<style scoped>
/* Botões verdes escuros */
.btn {
  padding: 0.5rem 1rem;
  background-color: #065f46;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn:hover {
  background-color: #054e3c;
}

/* Inputs com borda verde escura ao focar */
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #065f46;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input:focus {
  border-color: #054e3c;
  box-shadow: 0 0 0 2px rgba(6, 95, 70, 0.2);
}

/* Lista de usuários maior */
.text-lg {
  font-size: 1.125rem;
}

ul li {
  list-style: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}
</style>
