<script setup lang="ts">
const clients = ref([]);

const openClient = (client: any) => {
    navigateTo(`/clients/${client.id}`);
};
</script>

<template>
    <div>
        <div class="flex items-center justify-between mb-4">
            <h1 class="text-2xl font-semibold">Клиенты</h1>
            <NuxtLink to="/clients/create" class="px-4 py-2 rounded bg-indigo-600">Создать клиента</NuxtLink>
        </div>

        <UiClientTable :items="clients" @row-click="openClient" />
    </div>
</template>