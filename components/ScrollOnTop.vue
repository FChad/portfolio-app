<template>
    <ClientOnly>
        <UButton icon='i-heroicons-arrow-up-20-solid' color="gray" variant="solid" aria-label="Theme"
            class="scrollToTop-btn fixed bottom-5 end-5 p-2 w-10 h-10 justify-center transition duration-150 ease-in-out" :class="{'hidden':hideScrollButton}" @click="scrollTop" />
    </ClientOnly>
</template>

<script setup>
const hideScrollButton = ref(true);

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const handleScroll = () => {
    hideScrollButton.value = window.scrollY < 500;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped></style>