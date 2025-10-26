<template>
    <div class="bg-slate-800/50 p-4 rounded-lg border border-slate-700 h-[300px]">
        <h3 class="text-sm font-semibold mb-3 text-slate-200">{{ title }}</h3>
        <div class="h-[220px]">График</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, default: '' },
});
</script>
