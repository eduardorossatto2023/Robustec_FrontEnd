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
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goToRegister">Cadastrar Usuário</button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goToEditUsers">Editar Usuários</button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="goTolistUsers">Listar Usuário</button>
          <button class="w-full text-left px-4 py-2 hover:bg-green-700" @click="logout">Sair</button>
        </div>
      </div>
    </div>

    <!-- Espaço extra para não sobrepor conteúdo -->
    <div class="h-32"></div>

    <!-- Card do formulário centralizado -->
    <div class="p-8 border rounded shadow-md w-full max-w-md bg-white">
      <h2 class="text-xl font-semibold mb-4 text-green-900">Cadastrar Novo Usuário</h2>

      <!-- Mensagens de erro ou sucesso -->
      <div v-if="error" class="text-red-500 mb-2">{{ error }}</div>
      <div v-if="success" class="text-green-600 mb-2">{{ success }}</div>

      <input v-model="form.name" placeholder="Nome" class="input mb-2" />
      <input v-model="form.email" placeholder="Email" class="input mb-2" />
      <input v-model="form.password" type="password" placeholder="Senha" class="input mb-2" />

      <button class="btn mt-2 w-full" @click="submit" :disabled="loading">
        {{ loading ? 'Cadastrando...' : 'Cadastrar' }}
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { AuthService } from '../services/authService'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)
const menuOpen = ref(false)
const form = ref({ name:'', email:'', password:'' })
const loading = ref(false)
const error = ref('')
const success = ref('')

onMounted(() => {
  const storedUser = localStorage.getItem("user")
  if(storedUser) user.value = JSON.parse(storedUser)
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const goToRegister = () => {
  menuOpen.value = false
  router.push("/register")
}

const goToEditUsers = () => {
  menuOpen.value = false
  router.push("/edit-users")
}

const goTolistUsers = () => {
  menuOpen.value = false
  router.push("/comercial")
}

const logout = async () => {
  const refreshToken = localStorage.getItem("refresh_token")
  if (refreshToken) {
    try { await AuthService.logout(refreshToken) } 
    catch (err) { console.error("Erro ao fazer logout:", err) }
  }
  localStorage.removeItem("user")
  localStorage.removeItem("refresh_token")
  router.push("/")
}

async function submit() {
  error.value = ''; success.value = ''; loading.value = true
  try {
    const res = await AuthService.register(form.value)
    localStorage.setItem('access_token', res.access_token)
    localStorage.setItem('refresh_token', res.refresh_token)
    localStorage.setItem('user', JSON.stringify(res.user))
    success.value = 'Conta criada com sucesso! Redirecionando...'
    setTimeout(() => { window.location.href = '/' }, 800)
  } catch (e) {
    error.value = e.response?.data || e.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  background-color: #065f46;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn:hover {
  background-color: #054e3c;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #065f46;
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input:focus {
  border-color: #065f46;
  box-shadow: 0 0 0 2px rgba(6, 95, 70, 0.3);
}
</style>
