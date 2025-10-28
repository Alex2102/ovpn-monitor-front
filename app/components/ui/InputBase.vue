<script setup lang="ts">
interface Props {
    label?: string;
    error: string | undefined;
}

defineProps<Props>();

defineOptions({ inheritAttrs: false });

const model = defineModel({ type: String, default: '' });
</script>

<template>
    <div>
        <label class="text-sm text-slate-300 block mb-1">{{ label }}</label>
        <input v-model="model" class="w-full p-3 rounded bg-slate-700/40" v-bind="$attrs">
        <div class="h-4 mt-1">
            <p v-if="error" class="text-sm text-red-400">{{ error }}</p>
        </div>
    </div>
</template>