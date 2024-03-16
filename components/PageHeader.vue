<template>
    <div
        class="min-h-[50px] rounded-lg bg-slate-200 dark:bg-slate-800 shadow text-center flex items-center justify-center p-2 my-2">
        <h2 class="text-xl font-semibold">
            {{ title }}
        </h2>
    </div>
</template>

<script setup>
defineProps({
    title: String
})
</script>

<style scoped></style>