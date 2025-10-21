<template>
    <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
        <h2 class="text-2xl font-bold text-gray-800 text-center">{{ store.name }}</h2>

        <div class="text-center space-y-2">
            <p class="text-lg text-gray-600">{{ store.formattedCount }}</p>
            <p class="text-lg font-semibold text-blue-600">Double: {{ store.doubleCount }}</p>
        </div>

        <div class="flex justify-center space-x-3">
            <button class="btn-secondary" data-testid="decrement-btn" @click="store.decrement()">-</button>

            <button
                class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                data-testid="reset-btn"
                @click="store.reset()"
            >
                Reset
            </button>

            <button class="btn-primary" data-testid="increment-btn" @click="store.increment()">+</button>
        </div>

        <div class="flex justify-center space-x-2">
            <input
                v-model.number="inputValue"
                type="number"
                class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Set count"
                data-testid="count-input"
            />
            <button class="btn-primary" data-testid="set-btn" @click="setCustomCount">Set</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';

const store = useCounterStore();
const inputValue = ref<number>(0);

const setCustomCount = (): void => {
    if (inputValue.value !== null) {
        store.setCount(inputValue.value);
        inputValue.value = 0;
    }
};
</script>
