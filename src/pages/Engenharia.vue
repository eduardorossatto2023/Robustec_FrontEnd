<template>
  <div class="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-orange-500 to-orange-800">

    <!-- Navbar full width -->
    <div class="w-full flex justify-between items-center p-4 bg-green-900 text-white shadow-lg fixed top-0 left-0 z-50">
      <!-- Logo à esquerda -->
      <div class="flex items-center space-x-3">
        <img src="../assets/robusteco.png" alt="Logo" class="h-20" />
        <h2 class="text-2xl font-extrabold text-orange-400">ROBUSTEC</h2>
      </div>

      <!-- Nome do usuário e menu à direita -->
      <div class="relative flex items-center space-x-4">
        <span class="font-semibold text-lg">{{ user?.name || "Usuário" }}</span>
        <!-- Botão hamburger -->
        <button @click="toggleMenu" class="flex flex-col justify-between h-6 w-8 focus:outline-none">
          <span class="block h-0.5 w-full bg-white"></span>
          <span class="block h-0.5 w-full bg-white"></span>
          <span class="block h-0.5 w-full bg-white"></span>
        </button>

        <!-- Menu dropdown -->
        <div v-if="menuOpen" class="absolute right-0 mt-20 w-60 bg-green-800 text-white rounded shadow-lg z-50">
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goToAddProduct">Adicionar Produto</button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goToEditProduct">Editar Produto</button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goTolistProduct">Listar Produtos</button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="logout">Sair</button>
        </div>
      </div>
    </div>

    <!-- Espaço extra para não sobrepor conteúdo -->
    <div class="h-32"></div> 

    <!-- Lista de produtos em cards -->
    <div class="p-8 w-full max-w-6xl bg-white rounded-xl shadow-md">
      <h2 class="text-3xl font-bold mb-6 text-green-900">Lista de Produtos</h2>
      
      <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="p in products" :key="p.id" class="border rounded-lg shadow p-4 bg-gray-50 hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-green-800">{{ p.nome }}</h3>
          <p class="text-gray-700 mt-2">{{ p.descricao }}</p>
          <p class="text-orange-700 font-bold mt-3">Preço: R$ {{ p.preco }}</p>
        </div>
      </div>

      <p v-else class="text-gray-500 text-lg">Nenhum produto cadastrado.</p>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { AuthService } from "../services/authService"; // substitua caso seja outro service
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref(null);
const products = ref([]);
const menuOpen = ref(false);

onMounted(async () => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) user.value = JSON.parse(storedUser);
  await loadProducts();
});

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// novas rotas
const goToAddProduct = () => {
  menuOpen.value = false;
  window.location.href = "/registerProduto"; 
};

const goToEditProduct = () => {
  menuOpen.value = false;
  window.location.href = "/Engenharia";
};

const goTolistProduct = () => {
  menuOpen.value = false;
  window.location.href = "/Engenharia";
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
  window.location.href = "/";
};

const loadProducts = async () => {
  try {
    // aqui você troca para a chamada correta do backend de produtos
    products.value = await AuthService.getProducts();  
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
};
</script>
