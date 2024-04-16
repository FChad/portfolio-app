<script setup>
const props = defineProps(["navigationList"]);

function extractValue(obj) {
    if (obj.hasOwnProperty('body')) {
        return obj['body']['static'];
    } else if (obj.hasOwnProperty('b')) {
        return obj['b']['s'];
    }
    return null;
}
</script>

<template>
    <div
        class="w-full bg-slate-200 dark:bg-slate-800 text-center min-h-24 flex items-center justify-center flex-wrap mt-4">
        <div class="w-full px-2">
            <UButton v-for="social in $tm('socials')" :to="extractValue(social.link)" target="_blank" color="gray"
                :icon="extractValue(social.icon)" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> {{ extractValue(social.name) }}
            </UButton>
        </div>
        <div class="w-full px-2">
            <UButton to="mailto:mail@chad.lu" color="gray" icon="i-heroicons-envelope-20-solid" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> {{ $t('contact.email') }}: mail@chad.lu
            </UButton>
        </div>
        <div class="w-full px-2">
            <ul class="flex justify-center items-center flex-wrap">
                <li v-for="item in navigationList">
                    <NuxtLink :to="localePath(item._path)" active-class="flex py-2 mx-3 text-blue-500 rounded hover:"
                        class="flex py-2 mx-3 rounded hover:text-gray-500 bg-opacity-25 hover:bg-opacity-25 dark:bg-opacity-25 dark:hover:bg-opacity-50 dark:hover:text-gray-500">
                        {{ $t(`navigation.${item.title}`) }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="w-full my-2 px-2">
            <p>{{ $t('footer.copyright') }}
                <br>{{ $t('footer.host') }}
            </p>
        </div>
    </div>
</template>