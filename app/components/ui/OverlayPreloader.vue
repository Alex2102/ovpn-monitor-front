<script setup lang="ts">
const mainStore = useMainStore();
</script>

<template>
    <div v-if="mainStore.loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div class="h-16 w-16 animate-spin rounded-full border-8 border-gray-200 border-t-blue-500"></div>
    </div>
</template>
