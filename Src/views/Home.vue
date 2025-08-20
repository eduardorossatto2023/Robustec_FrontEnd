<script setup>
import DashboardLayout from '../components/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout title="Painel">
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <RouterLink to="/clients" class="card card-indigo">
        <div class="card-icon">👥</div>
        <div><h3 class="card-title">Clientes</h3><p class="card-sub">Gerencie seus clientes</p></div>
        <span class="card-cta">Acessar ›</span>
      </RouterLink>
      
      <RouterLink to="/panels" class="card card-amber">
        <div class="card-icon">🧩</div>
        <div><h3 class="card-title">Painéis</h3><p class="card-sub">Gerencie modelos de painéis</p></div>
        <span class="card-cta">Acessar ›</span>
      </RouterLink>

      <RouterLink to="/cities" class="card card-emerald">
        <div class="card-icon">📍</div>
        <div><h3 class="card-title">Cidades</h3><p class="card-sub">Cadastre cidades e irradiação</p></div>
        <span class="card-cta">Acessar ›</span>
      </RouterLink>


      <RouterLink to="/simulations" class="card card-fuchsia">
        <div class="card-icon">▦</div>
        <div><h3 class="card-title">Simulação</h3><p class="card-sub">Simule e gere propostas</p></div>
        <span class="card-cta">Acessar ›</span>
      </RouterLink>
      <RouterLink to="/consumptions"
  class="group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:ring-sky-400/40 transition shadow-lg hover:shadow-sky-500/10">
  <div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-500/20 blur-2xl"></div>
  <div class="flex items-center gap-3">
    <svg viewBox="0 0 24 24" class="h-10 w-10 text-sky-400">
      <path fill="currentColor" d="M3 13h8v8H3zm10-10h8v8h-8zM3 3h8v8H3zm10 10h8v8h-8z"/>
    </svg>
    <div>
      <h3 class="text-lg font-semibold text-white">Consumo</h3>
      <p class="text-slate-300/80">Histórico e média 12 meses</p>
    </div>
  </div>
  <span class="mt-4 inline-flex items-center gap-2 text-sky-300 group-hover:gap-3 transition">
    Acessar
    <svg viewBox="0 0 24 24" class="h-4 w-4"><path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.414L16 12l-6.364 6.364l-1.414-1.414z"/></svg>
  </span>
</RouterLink>

<!-- Atalho para Tarifas -->
<RouterLink to="/tariffs"
  class="group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:ring-cyan-400/40 transition shadow-lg hover:shadow-cyan-500/10">
  <div class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl"></div>
  <div class="flex items-center gap-3">
    <svg viewBox="0 0 24 24" class="h-10 w-10 text-cyan-400">
      <path fill="currentColor" d="M5 3h14v2H5zm2 4h10v2H7zm-2 4h14v2H5zm2 4h10v2H7z"/>
    </svg>
    <div>
      <h3 class="text-lg font-semibold text-white">Tarifas</h3>
      <p class="text-slate-300/80">Buscar preço do kWh</p>
    </div>
  </div>
  <span class="mt-4 inline-flex items-center gap-2 text-cyan-300 group-hover:gap-3 transition">
    Acessar
    <svg viewBox="0 0 24 24" class="h-4 w-4"><path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.414L16 12l-6.364 6.364l-1.414-1.414z"/></svg>
  </span>
</RouterLink>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.card{ @apply relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 flex flex-col gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition; }
.card::after{ content:""; position:absolute; inset:-40% 40% auto auto; width:140px; height:140px; filter:blur(36px); opacity:.25; background:var(--glow,#6366f1); pointer-events:none; }
.card-icon{ @apply text-xl; }
.card-title{ @apply text-[16px] font-semibold; }
.card-sub{ @apply text-slate-300/80 text-[13px]; }
.card-cta{ @apply mt-1 text-sm text-slate-200/90 hover:underline; }
.card-indigo{ --glow:#6366f1; } .card-emerald{ --glow:#10b981; } .card-amber{ --glow:#f59e0b; } .card-fuchsia{ --glow:#d946ef; }
</style>
