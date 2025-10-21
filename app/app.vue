<template>
    <div>
        <!--    <NuxtRouteAnnouncer />-->
        <!--    <NuxtWelcome />-->
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <div class="container mx-auto px-4 space-y-12">
                <header class="text-center space-y-4">
                    <h1 class="text-5xl font-bold text-gray-900 mb-4">Nuxt 4.1.3 + TypeScript</h1>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Modern stack with Pinia, Tailwind CSS, ESLint & Prettier
                    </p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500">
                        <span class="px-3 py-1 bg-white rounded-full shadow-sm">TypeScript</span>
                        <span class="px-3 py-1 bg-white rounded-full shadow-sm">Pinia</span>
                        <span class="px-3 py-1 bg-white rounded-full shadow-sm">Tailwind CSS</span>
                        <span class="px-3 py-1 bg-white rounded-full shadow-sm">ESLint</span>
                        <span class="px-3 py-1 bg-white rounded-full shadow-sm">Prettier</span>
                    </div>
                </header>

                <main class="flex justify-center">
                    <Counter />
                </main>

                <footer class="text-center text-gray-500 text-sm">
                    <p>Built with Nuxt 4.1.3 and modern web technologies</p>
                </footer>
            </div>
        </div>
    </div>
</template>
