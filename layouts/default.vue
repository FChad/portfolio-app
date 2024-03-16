<template>
    <header>
        <Navigation></Navigation>
        <ScrollOnTop></ScrollOnTop>
    </header>

    <main class="w-full">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
            <slot />
        </div>
    </main>

    <footer class="w-full text-center">
        <p>© 2024 von Chad Feierstein.
            <br>Alle Rechte vorbehalten.
            <br>Website gehostet auf Cloudflare
        </p>
    </footer>
</template>

<script setup></script>

<style scoped></style>