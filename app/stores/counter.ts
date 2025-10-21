import { defineStore } from 'pinia';

interface CounterState {
    count: number;
    name: string;
}

export const useCounterStore = defineStore('counter', {
    state: (): CounterState => ({
        count: 0,
        name: 'Nuxt 4 App',
    }),

    getters: {
        doubleCount: (state): number => state.count * 2,
        formattedCount: (state): string => `Count: ${state.count}`,
    },

    actions: {
        increment(): void {
            this.count++;
        },

        decrement(): void {
            this.count--;
        },

        reset(): void {
            this.count = 0;
        },

        setCount(value: number): void {
            this.count = value;
        },
    },
});
