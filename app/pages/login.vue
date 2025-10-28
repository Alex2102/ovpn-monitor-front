<script setup lang="ts">
definePageMeta({ layout: 'auth' });

const userStore = useUserStore();
const mainStore = useMainStore();

const validationSchema = {
    login: 'required',
    password: 'required|min:6',
};

const { handleSubmit, errors } = useForm({ validationSchema });

const { value: login } = useField<string>('login');
const { value: password } = useField<string>('password');

const { login: doLogin } = useApiUser();

const dialogError = ref(false);
const apiError = ref('');


// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = handleSubmit(async (values) => {
    mainStore.loading = true;

    try {
        const result = await doLogin({ login: values.login, password: values.password });

        if(!result.data?.accessToken) throw new Error('Неверный формат ответа сервера')

        userStore.login = values.login;
        userStore.accessToken = result.data?.accessToken;

        navigateTo('/dashboard');
    } catch (e) {
        if (e && typeof e === 'object' && 'data' in e) {
            //todo::Привести к нормальному виду (избавиться от кучи проверок)
            const serverResponse = (e as any).data;

            apiError.value = serverResponse && serverResponse.message ? serverResponse.message : '';
        } else if (e instanceof Error) {
            apiError.value = e.message;
        } else {
            apiError.value = String(e);
        }

        dialogError.value = true;
    } finally {
        mainStore.loading = false;
    }
});
</script>

<template>
    <div
        class="min-h-screen flex items-center justify-center p-6 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900"
    >
        <div class="max-w-md w-full bg-slate-800/60 p-8 rounded-lg shadow-md">
            <h1 class="text-2xl font-semibold mb-2">OVPN Monitor</h1>
            <p class="text-sm text-slate-400 mb-6">Войдите в панель администратора</p>

            <form class="space-y-4" @submit="onSubmit">
                <UiInputBase v-model="login" label="Логин" placeholder="user@example.com" :error="errors.login" />
                <UiInputBase v-model="password" label="Пароль" placeholder="••••••" type="password"
                             :error="errors.password" />

                <div class="flex items-center gap-3">
                    <UiBtnBase :class="['flex-1', 'py-3']">Войти</UiBtnBase>
                </div>
            </form>
        </div>

        <UiDialogBase v-model="dialogError" title="Ошибка" :content="apiError" />
    </div>
</template>
