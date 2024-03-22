<template>
    <div
        class="w-full bg-gray-200 dark:bg-gray-800 text-center min-h-24 flex items-center justify-center flex-wrap mt-4">
        <div class="w-full">
            <UButton color="gray" icon="i-mdi-linkedin" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> LinkedIn</UButton>
            <UButton color="gray" icon="i-mdi-facebook-box" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> Facebook</UButton>
            <UButton color="gray" icon="i-mdi-instagram" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> Instagram</UButton>
            <UButton color="gray" icon="i-mdi-github" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> GitHub</UButton>
        </div>
        <div class="w-full">
            <UButton color="gray" icon="i-heroicons-envelope-20-solid" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> E-Mail: mail@chad.lu</UButton>
        </div>
        <div class="w-full">
            <ul class="flex justify-center items-center">
                <li v-for="item in navigationList">
                    <NuxtLink :to="item._path" active-class="flex py-2 mx-3 text-blue-500 rounded hover:"
                        class="flex py-2 mx-3 rounded hover:text-gray-500 bg-opacity-25 hover:bg-opacity-25 dark:bg-opacity-25 dark:hover:bg-opacity-50 dark:hover:text-gray-500">
                        {{ $t(`navigation.${item.title}`) }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="w-full my-2">
            <p>{{ $t('footer.copyright')}}
                <br>{{ $t('footer.host')}}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["navigationList"]);
</script>

<style scoped></style>