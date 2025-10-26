<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: number }>(), { size: 5 });
</script>
<template>
    <svg
        :class="[`w-${props.size}`, `h-${props.size}`]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
    >
        <path d="M3 13h8V3H3v10z" />
        <path d="M13 21h8V11h-8v10z" />
    </svg>
</template>
