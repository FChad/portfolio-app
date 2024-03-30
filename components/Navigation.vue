<script setup>
const props = defineProps(["navigationList"]);

const hideNav = ref(true);
const stickyNav = ref(true);

const handleScroll = () => {
    stickyNav.value = window.scrollY > 0;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <nav class="w-full z-20 top-0 left-0 backdrop-blur-xl" :class="stickyNav ? 'fixed' : 'relative'">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse" title="Feierstein Chad | Portfolio">
                <h1 class="self-center text-2xl font-semibold whitespace-nowrap">Feierstein Chad</h1>
            </a>
            <div class="flex md:order-2 space-x-3 rtl:space-x-reverse">

                <LanguageSwitcher />

                <ThemeSwitcher />

                <UButton icon="i-heroicons-bars-3-20-solid" color="gray" variant="solid"
                    @click="hideNav ? hideNav = false : hideNav = true" class="md:hidden" />

            </div>
            <div class="w-full md:flex md:w-auto md:order-1" :class="{ 'hidden': hideNav }">

                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 lg:space-x-8 xl:space-x-12 rtl:space-x-reverse md:mt-0 max-md:border max-md:border-gray-300 dark:max-md:border-gray-700">
                    <li v-for="item in navigationList">
                        <NuxtLink :to="localePath(item._path)"
                            active-class="flex py-2 px-3 bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 hover:"
                            class="text-lg flex py-2 px-3 rounded hover:bg-gray-300 bg-opacity-25 hover:bg-opacity-25 dark:bg-opacity-25 dark:hover:bg-opacity-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            @click="hideNav = true">
                            {{ $t(`navigation.${item.title}`) }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div :class="{ 'h-16': stickyNav }"></div>
</template>