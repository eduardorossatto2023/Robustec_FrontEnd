<script setup>
import { ref } from 'vue'
import { AuthService } from '../services/authService'

const form = ref({ name:'', email:'', password:'' })
const loading = ref(false)
const error = ref('')
const success = ref('')

async function submit(){
  error.value = ''; success.value = ''; loading.value = true
  try {
    const res = await AuthService.register(form.value)
    // já loga o usuário ao registrar
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

<template>
    <!-- Formulário de cadastro -->
    <div class="mb-6 p-6 border rounded shadow-md w-full max-w-md bg-white">
      <h2 class="text-xl font-semibold mb-4 text-green-900">Cadastrar Novo Usuário</h2>
      <input v-model="newUser.name" placeholder="Nome" class="input mb-2" />
      <input v-model="newUser.email" placeholder="Email" class="input mb-2" />
      <input v-model="newUser.password" type="password" placeholder="Senha" class="input mb-2" />
      <button class="btn mt-2 w-full" @click="registerUser">Cadastrar</button>
    </div>
</template>
