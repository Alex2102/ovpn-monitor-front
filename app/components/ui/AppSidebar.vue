<script setup lang="ts">
const menuItems = [
    { title: 'Дашборд', link: '/dashboard', svg: resolveComponent('SvgIconDoubleSquare') },
    { title: 'Клиенты', link: '/clients', svg: resolveComponent('SvgIconHuman') },
    { title: 'Создать клиента', link: '/clients/create', svg: resolveComponent('SvgIconPlus') },
];
</script>

<template>
    <aside class="w-64 bg-slate-800 border-r border-slate-700 p-4 hidden md:block">
        <div class="mb-6">
            <NuxtLink to="/dashboard" class="flex items-center gap-3">
                <div class="p-2 rounded bg-indigo-600/30">
                    <SvgIconDoubleSquare :size="6" />
                </div>
                <div>
                    <div class="font-semibold">OVPN Monitor</div>
                    <div class="text-xs text-slate-400">Панель управления</div>
                </div>
            </NuxtLink>
        </div>

        <nav class="space-y-1">
            <NuxtLink
                v-for="item in menuItems"
                :key="item.title"
                :to="item?.link"
                class="nav-item flex items-center gap-3 p-2 rounded hover:bg-slate-700/40"
                active-class="bg-slate-700/40"
            >
                <component :is="item.svg" />
                <span>{{ item.title }}</span>
            </NuxtLink>
        </nav>
    </aside>
</template>
