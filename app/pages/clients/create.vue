<script setup lang="ts">
const name = ref('');
const note = ref('');
const ovpn = ref('');

const generate = () => {
    console.log('generate');
};

const download = () => {
    console.log('download');
};
</script>

<template>
    <div class="max-w-3xl">
        <h1 class="text-2xl font-semibold mb-4">Создать клиента</h1>

        <div class="bg-slate-800/50 border border-slate-700 rounded p-6">
            <div class="space-y-4">
                <div>
                    <label class="text-sm text-slate-300 block mb-1">Имя клиента</label>
                    <input v-model="name" class="w-full p-3 rounded bg-slate-700/40" placeholder="client-001" />
                </div>

                <div>
                    <label class="text-sm text-slate-300 block mb-1">Комментарий</label>
                    <input v-model="note" class="w-full p-3 rounded bg-slate-700/40" />
                </div>

                <div class="flex items-center gap-3">
                    <UiBtnBase :class="['px-4']" @click="generate">Сгенерировать .ovpn</UiBtnBase>
                    <button class="px-4 py-2 rounded bg-indigo-600" @click="generate">Сгенерировать .ovpn</button>
                    <button :disabled="!ovpn" class="px-4 py-2 rounded border border-slate-600" @click="download">
                        Скачать
                    </button>
                </div>

                <pre v-if="ovpn" class="mt-3 p-3 bg-slate-900/60 rounded text-xs max-h-40 overflow-auto">{{
                    ovpn
                }}</pre>
            </div>
        </div>
    </div>
</template>
