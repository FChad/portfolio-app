<template>
    <PageHeader :title="$t('home.pageHeader')" />
    <div class="flex justify-between items-center w-full max-md:grid">
        <div class="flex md:flex-col mr-8 flex-wrap">
            <UButton v-for="social in $tm('socials')" :to="extractValue(social.link)" target="_blank" color="gray"
                :icon="extractValue(social.icon)" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> {{ extractValue(social.name) }}
            </UButton>
        </div>

        <div class="max-md:text-sm">
            <h3 class="leading-normal font-semibold">{{ $t('home.greeting') }}</h3>
            <p><b class="text-lg leading-loose font-semibold">{{ $t('home.introduction_title') }}</b></p>
            <p class="">{{ $t('home.introduction') }}</p>
            <p class="max-w-[450px]">{{ $t('home.about_me') }}</p>

            <UButton :label="$t('navigation.title_about')" to="/about" size="xl" color="blue"
                class="my-4 py-4 px-6 text-lg" />
        </div>

        <div class="rounded-lg p-2 flex items-center justify-center">
            <img src="/img/main-img.webp" class="object-cover" alt="Chad Feierstein" width="300" height="755"></img>
        </div>
    </div>
</template>

<script setup>
function extractValue(obj) {
    if (obj.hasOwnProperty('body')) {
        return obj['body']['static'];
    } else if (obj.hasOwnProperty('b')) {
        return obj['b']['s'];
    }
    return null;
}
</script>

<style scoped></style>