<script setup lang="ts">
const user = { id: 1, name: 'Admin' };
const logout = () => {
    navigateTo('/login');
};
</script>

<template>
    <header class="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-900/20">
        <div class="flex items-center gap-3">
            <button class="md:hidden p-2">☰</button>
            <NuxtLink to="/dashboard" class="font-semibold">OVPN Monitor</NuxtLink>
        </div>

        <div class="flex items-center gap-3">
            <div class="text-sm text-slate-200">{{ user?.name ?? 'Admin' }}</div>
            <button class="px-3 py-1 rounded border border-slate-700 text-sm" @click="logout">Выйти</button>
        </div>
    </header>
</template>
