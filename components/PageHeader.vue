<template>
    <div class="min-h-[50px] rounded-lg text-center flex items-center justify-center p-2 my-8 mb-6">
        <h2> {{ title }} </h2>
    </div>
</template>

<script setup>
defineProps({
    title: String
})
</script>

<style scoped></style>