<script setup lang="ts">
  definePageMeta({layout: 'auth'})

  const form = reactive({login: '', password: ''})
  const error = ref<string | null>(null)

  const onSubmit = () => {
    console.log('submit')
    navigateTo('/dashboard')
  }
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900">
    <div class="max-w-md w-full bg-slate-800/60 p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold mb-2">OVPN Monitor</h1>
      <p class="text-sm text-slate-400 mb-6">Войдите в панель администратора</p>

      <form class="space-y-4" @submit.prevent="onSubmit">
        <div>
          <label class="block text-sm text-slate-300 mb-1">Логин</label>
          <input v-model="form.login" class="w-full p-3 rounded bg-slate-700/40" placeholder="admin@example.com" />
        </div>
        <div>
          <label class="block text-sm text-slate-300 mb-1">Пароль</label>
          <input v-model="form.password" type="password" required class="w-full p-3 rounded bg-slate-700/40" placeholder="••••••" />
        </div>

        <p v-if="error" class="text-sm text-red-400">{{ error }}</p>

        <div class="flex items-center gap-3">
          <button type="submit" class="flex-1 py-3 rounded bg-indigo-600">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>