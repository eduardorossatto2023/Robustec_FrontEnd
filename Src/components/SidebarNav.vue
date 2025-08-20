<template>
  <div class="p-4">
    <div class="px-2 py-2 text-lg font-semibold tracking-tight">Solar Proposal</div>

    <nav class="mt-2 space-y-1">
      <RouterLink to="/" class="navlink" active-class="navlink-active" exact-active-class="navlink-active">
        <span class="i">📊</span> Dashboard
      </RouterLink>

      <RouterLink to="/clients" class="navlink" active-class="navlink-active">
        <span class="i">👥</span> Clientes
      </RouterLink>

      <RouterLink to="/panels" class="navlink" active-class="navlink-active">
        <span class="i">🧩</span> Painéis
      </RouterLink>

      <RouterLink to="/cities" class="navlink" active-class="navlink-active">
        <span class="i">📍</span> Cidades
      </RouterLink>

      <RouterLink to="/simulations" class="navlink" active-class="navlink-active">
        <span class="i">📄</span> Simulações
      </RouterLink>

      <!-- NOVOS -->
      <RouterLink to="/consumptions" class="navlink" active-class="navlink-active">
        <span class="i">⚡</span> Consumo
      </RouterLink>

      <RouterLink to="/tariffs" class="navlink" active-class="navlink-active">
        <span class="i">💰</span> Tarifas
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.navlink{ @apply flex items-center gap-3 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition; }
.navlink-active{ @apply bg-white/10 text-white; }
.i{ @apply inline-flex w-5; }
</style>
