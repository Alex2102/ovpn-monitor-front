import { defineStore } from 'pinia';

interface MainState {
    loading: boolean;
}

export const useMainStore = defineStore('main', {
    state: (): MainState => ({
        loading: false,
    }),
});