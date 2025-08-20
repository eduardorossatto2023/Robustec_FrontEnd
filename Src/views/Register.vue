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
  <div class="min-h-[70vh] grid place-items-center">
    <div class="w-full max-w-md rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-xl">
      <h1 class="text-2xl font-semibold text-white mb-4">Criar conta</h1>
      <div v-if="error" class="mb-3 text-sm text-red-300">{{ error }}</div>
      <div v-if="success" class="mb-3 text-sm text-emerald-300">{{ success }}</div>
      <div class="space-y-3">
        <input v-model="form.name" class="input" placeholder="Nome" autocomplete="name" />
        <input v-model="form.email" class="input" placeholder="Email" type="email" autocomplete="email" />
        <input v-model="form.password" class="input" placeholder="Senha" type="password" autocomplete="new-password" />
        <button class="btn w-full" :disabled="loading" @click="submit">Criar conta</button>
      </div>
      <p class="mt-3 text-xs text-slate-400">
        Já tem conta?
        <a href="/login" class="underline">Entrar</a>
      </p>
    </div>
  </div>
</template>
