<script setup lang="ts">
const tableHeader = ['Имя', 'IP', 'Статус', 'трафик (Мес)', 'Последняя активность'];

const emit = defineEmits(['row-click']);
const query = ref<string>('');
const filterStatus = ref<'all' | 'online' | 'offline'>('all');

const filtered = computed(() => [
    {
        id: 1,
        name: 'Admin',
        ip: '192.168.1.1',
        status: 'online',
        monthTrafficMb: 10,
        lastSeen: '12:00',
    },
]);
</script>

<template>
    <div class="bg-slate-800/50 border border-slate-700 rounded p-4">
        <div class="mb-3 flex items-center gap-2">
            <input v-model="query" placeholder="Поиск клиента" class="p-2 rounded bg-slate-700/40 flex-1" />
            <select v-model="filterStatus" class="p-2 rounded bg-slate-700/40 text-sm">
                <option value="all">Все</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
            </select>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-sm table-auto">
                <thead class="text-slate-400 text-left">
                    <tr>
                        <th v-for="(item, index) in tableHeader" :key="index" class="py-2 pr-4">
                            {{ item }}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="c in filtered"
                        :key="c.id"
                        class="border-t border-slate-700 hover:bg-slate-700/20 cursor-pointer"
                        @click="emit('row-click', c)"
                    >
                        <td class="py-3">{{ c.name }}</td>
                        <td class="py-3">{{ c.ip }}</td>
                        <td class="py-3" :class="c.status === 'online' ? 'text-green-300' : 'text-slate-400'">
                            {{ c.status }}
                        </td>
                        <td class="py-3">{{ c.monthTrafficMb }} МБ</td>
                        <td class="py-3">{{ c.lastSeen }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
