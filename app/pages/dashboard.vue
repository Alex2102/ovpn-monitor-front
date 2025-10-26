<script setup lang="ts">
import { SvgIconHuman } from '#components';

const onlineCount = computed(() => 32);
const totalClients = computed(() => 150);
const todayTraffic = computed(() => '4.7 ГБ');
</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-semibold">Дашборд</h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <UiDashboardCard title="Клиенты онлайн" :value="onlineCount" :icon="SvgIconHuman" />
            <UiDashboardCard title="Всего клиентов" :value="totalClients" />
            <UiDashboardCard title="Передано данных сегодня" :value="todayTraffic" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <UiDashboardChart title="Использование трафика за последние 24 часа" />
            <UiDashboardChart title="Активные подключения по часам" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <UiDashboardPie title="Топ-5 клиентов по трафику (текущий месяц)" />
        </div>
    </div>
</template>