<script setup lang="ts">
interface Props {
    title: string;
    content: string;
}

defineProps<Props>();

const model = defineModel({ type: Boolean, default: false });

const close = () => {
    model.value = false;
};
</script>

<template>
    <div
        v-if="model"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="close"
    >
        <div class="w-full max-w-lg rounded-lg bg-white shadow-xl">
            <div class="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-100 p-4">
                <h2 class="text-xl font-semibold text-gray-800">
                    {{ title }}
                </h2>
                <button class="text-gray-500 hover:text-gray-800" aria-label="Close modal" @click="close">
                    <SvgIconClose />
                </button>
            </div>

            <div class="p-6">
                <p class="text-gray-700">
                    {{ content }}
                </p>
            </div>

            <div v-if="$slots.footer" class="rounded-b-lg border-t border-gray-200 bg-gray-50 p-4">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>
