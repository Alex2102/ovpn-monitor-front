<template>
    <div class="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
        <div class="flex items-center">
            <div :class="['p-3 rounded-full', iconBg]">
                <component :is="icon" class="w-6 h-6" />
            </div>
            <div class="ml-4">
                <p class="text-sm text-slate-400">{{ title }}</p>
                <p class="text-3xl font-bold">{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; value: string | number; icon?: any; iconBg?: string }>();
const icon = props.icon || 'svg';
const iconBg = props.iconBg || 'bg-indigo-600/30';
</script>
