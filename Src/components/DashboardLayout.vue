<script setup>
import SidebarNav from './SidebarNav.vue'

// use seu AuthService/composable se preferir
async function logout () {
  try {
    const rt = localStorage.getItem('refresh_token')
    if (rt) {
      await fetch('/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ refresh_token: rt })
      }).catch(()=>{})
    }
  } finally {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    window.location.href = '/login'
  }
}

defineProps({
  title: { type: String, default: '' }
})
</script>

<template>
  <!-- Fundo da aplicação -->
  <div class="min-h-screen bg-[#0f172a] text-white">
    <!-- Container central (define largura da sidebar e do conteúdo) -->
    <div class="mx-auto max-w-none w-full px-6 py-6">
      <div class="flex gap-6">
        <!-- Sidebar em CARD (não ocupa a página toda) -->
        <aside class="w-64 shrink-0 rounded-2xl bg-[#0b1220] ring-1 ring-white/10 shadow-xl">
          <SidebarNav />
        </aside>

        <!-- Conteúdo em CARD -->
        <section class="flex-1 rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-xl overflow-hidden min-h-[60vh]">
          <!-- Header dentro do card -->
          <div class="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h1 class="text-2xl md:text-[26px] font-bold tracking-tight">{{ title }}</h1>

            <div class="flex items-center gap-2">
              <RouterLink to="/help" class="chip">Ajuda</RouterLink>
              <button class="chip-danger" @click="logout">Sair</button>
            </div>
          </div>

          <!-- Slot: conteúdo específico de cada página -->
          <div class="p-6">
            <slot />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chip{ @apply px-3 py-1.5 rounded-xl bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition; }
.chip-primary{ @apply px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition; }
.chip-danger{ @apply px-3 py-1.5 rounded-xl bg-red-500/90 hover:bg-red-400 text-white transition; }
</style>
