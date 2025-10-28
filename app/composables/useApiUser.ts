import type { IAnswer } from '~/types/IAnswer';

interface LoginCredentials {
    login: string;
    password: string;
}

interface User {
    accessToken: string;
    refreshToken?: string;
}

export const useApiUser = () => {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;

    const login = async (credentials: LoginCredentials) => {
        return await $fetch<IAnswer<User>>('/user/login', {
            baseURL: apiUrl,
            method: 'POST',
            body: credentials
        })
    }

    return {
        login
    }
}