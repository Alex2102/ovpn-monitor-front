<template>
    <div class="bg-slate-800/50 p-4 rounded-lg border border-slate-700 h-[350px]">
        <h3 class="text-sm font-semibold mb-3 text-slate-200">{{ title }}</h3>
        <div class="h-[260px]">Круговая диаграмма</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, default: '' },
});
</script>
