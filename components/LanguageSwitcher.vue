<script setup>

const { locales, setLocale } = useI18n();
const isLanguageModalOpen = ref(false);

function changeLocaleAndCloseModal(localeCode) {
    setLocale(localeCode);
    isLanguageModalOpen.value = false;
}

</script>

<template>
    <UButton icon="i-heroicons-language-20-solid" color="gray" variant="solid" @click="isLanguageModalOpen = true" />

    <UModal v-model="isLanguageModalOpen" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <p class="text-center font-semibold text-lg"> {{ $t('language_modal.title') }}</p>
                <UButton color="gray" variant="solid" icon="i-heroicons-x-mark-20-solid"
                    class="m-1 absolute right-0 top-0 z-50" @click="isLanguageModalOpen = false" />
            </template>

            <ul class="flex gap-2 flex-wrap">
                <li v-for="locale in locales" :key="locale.code" @click="changeLocaleAndCloseModal(locale.code)"
                    class="px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg"
                    :class="{ '!bg-gray-300 dark:!bg-gray-600': $i18n.locale === locale.code }">
                    <a href="javascript:void(0);" class="flex gap-2 justify-center items-center">
                        <img :src="'/img/flags/' + locale.code + '.svg'" :alt="locale.name"
                            class="max-w-[30px] rounded-lg">
                        {{ locale.name }}
                    </a>
                </li>
            </ul>
        </UCard>
    </UModal>
</template>