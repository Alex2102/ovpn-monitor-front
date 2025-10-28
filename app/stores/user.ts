import { defineStore } from 'pinia';

interface UserState {
    login: string;
    accessToken: string;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        login: '',
        accessToken: '',
    }),
    actions: {
        // async doLogin(): Promise<void> {
        //     console.log('auth');
        //
        //     try {
        //         console.log('rrr');
        //         // const result = await useApiUser().login();
        //         // console.log(result);
        //     } catch (e) {
        //         console.log('exception');
        //         console.log(e);
        //     } finally {
        //         console.log('finally');
        //     }
        // }
    },
});
