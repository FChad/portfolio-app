<script setup lang="ts">
const hideNav = ref(true);
const stickyNav = ref(true);

const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

const handleScroll = () => {
    stickyNav.value = window.scrollY > 0;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});


const navigationList = [
    {
        "title": "Home",
        "icon": "i-heroicons-home-20-solid",
        "_path": "/",
    },
    {
        "title": "Über mich",
        "icon": "i-heroicons-identification-20-solid",
        "_path": "/about",
    },
    {
        "title": "Fähigkeiten",
        "icon": "i-heroicons-academic-cap-20-solid",
        "_path": "/skills",
    },
    {
        "title": "Projekte",
        "icon": "i-heroicons-photo-20-solid",
        "_path": "/projects",
    },
    {
        "title": "Kontakt",
        "icon": "i-heroicons-chat-bubble-left-ellipsis-20-solid",
        "_path": "/contact",
    }
]
</script>

<template>
    <nav class="w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-xl"
        :class="stickyNav ? 'fixed' : 'relative'">

        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse" title="Feierstein Chad | Portfolio">

                <span class="self-center text-2xl font-semibold whitespace-nowrap">Feierstein Chad</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                <ClientOnly>
                    <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                        variant="solid" square @click="isDark = !isDark" />
                    <template #fallback>
                        <div class="w-8 h-8" />
                    </template>
                </ClientOnly>

                <ClientOnly>
                    <UButton icon="i-heroicons-bars-3-20-solid" color="gray" variant="solid"
                        @click="hideNav ? hideNav = false : hideNav = true" class="md:hidden" />
                </ClientOnly>

            </div>
            <div class="w-full md:flex md:w-auto md:order-1" :class="{ 'hidden': hideNav }">

                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                    <li v-for="item in navigationList">
                        <NuxtLink :to="item._path"
                            active-class="flex py-2 px-3 bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 hover:"
                            class="flex py-2 px-3 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">

                            <span :class="item.icon" class="flex-shrink-0 p-3 h-5 w-5" /> {{ item.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div :class="{ 'h-16': stickyNav }"></div>
</template>