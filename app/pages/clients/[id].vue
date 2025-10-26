<template>
    <div>
        <h1 class="text-2xl font-semibold mb-4">Детали клиента: {{ client?.name }}</h1>
        <div v-if="client" class="bg-slate-800/50 border border-slate-700 rounded p-4">
            <p><strong>IP:</strong> {{ client.ip }}</p>
            <p><strong>Статус:</strong> {{ client.status }}</p>
            <p><strong>Трафик (мес):</strong> {{ client.monthTrafficMb }} МБ</p>
            <p><strong>Последняя активность:</strong> {{ client.lastSeen }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// const route = useRoute()
// const id = route.params.id as string

const client = ref({
    id: 1,
    name: 'client-001',
    ip: '192.168.1.1',
    status: 'online',
    monthTrafficMb: 10,
    lastSeen: '2021-01-01 12:00:00',
});
</script>
