<template>
    <header class="bg-white dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
            <Navigation></Navigation>
            <ScrollOnTop></ScrollOnTop>
        </div>
    </header>

    <main>
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
            <slot />
        </div>
    </main>
</template>

<script setup></script>

<style scoped></style>