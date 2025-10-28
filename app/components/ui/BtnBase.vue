<script setup lang="ts">
const props = defineProps<{ class?: string[] | string }>();
</script>

<template>
    <button class="py-2 rounded bg-indigo-600" :class="props.class">
        <slot />
    </button>
</template>
