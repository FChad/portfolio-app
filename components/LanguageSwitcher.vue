<script setup>

const { locales, setLocale } = useI18n();
const isLanguageModalOpen = ref(false);

</script>

<template>
    <UButton icon="i-heroicons-language-20-solid" color="gray" variant="solid" @click="isLanguageModalOpen = true" />

    <UModal v-model="isLanguageModalOpen">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <p class="text-center font-semibold text-lg"> {{ $t('language_modal.title') }}</p>
            </template>

            <ul class="flex gap-2 flex-wrap">
                <li v-for="locale in locales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)"
                    @click="isLanguageModalOpen = false"
                    class="px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg"
                    :class="{'!bg-gray-300 dark:!bg-gray-600': $i18n.locale === locale.code}">
                    <a href="#" class="flex gap-2 justify-center items-center">
                        <img :src="'/img/flags/' + locale.code + '.svg'" :alt="locale.name" class="max-w-[30px] rounded-lg">
                        {{ locale.name }}
                    </a>
                </li>
            </ul>
        </UCard>
    </UModal>
</template>