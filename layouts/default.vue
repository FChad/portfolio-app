<template>
    <header>
        <Navigation></Navigation>
        <ScrollOnTop></ScrollOnTop>
    </header>

    <main>
        <div class="content-wrapper">
            <slot />
        </div>
    </main>

    <footer>
        <div class="w-full border-t border-gray-200 dark:border-gray-600 text-center">
            <p>© 2024 von Chad Feierstein.
                <br>Alle Rechte vorbehalten.
                <br>Website gehostet auf Cloudflare
            </p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped></style>