<template>
    <div class="flex h-screen bg-slate-900 text-slate-100">
        <UiAppSidebar />

        <div class="flex-1 flex flex-col overflow-hidden">
            <UiAppHeader />
            <main class="flex-1 overflow-auto p-6 bg-slate-900/60">
                <slot />
            </main>
        </div>
    </div>
</template>
