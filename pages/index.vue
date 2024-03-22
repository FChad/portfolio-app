<template>
    <PageHeader :title="$t('home.pageHeader')" />
    <div class="flex justify-between items-center w-full max-md:grid">
        <div class="flex md:flex-col mr-8 flex-wrap">
            <UButton :to="$t('contact.links.linkedin')" target="_blank" color="gray" icon="i-mdi-linkedin" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> LinkedIn</UButton>
            <UButton :to="$t('contact.links.facebook')" target="_blank" color="gray" icon="i-mdi-facebook-box" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> Facebook</UButton>
            <UButton :to="$t('contact.links.instagram')" target="_blank" color="gray" icon="i-mdi-instagram" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> Instagram</UButton>
            <UButton :to="$t('contact.links.github')" target="_blank" color="gray" icon="i-mdi-github" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> GitHub</UButton>
        </div>

        <div class="max-md:text-sm">
            <h3 class="leading-normal font-semibold">{{ $t('home.greeting') }}</h3>
            <p><b class="text-lg leading-loose font-semibold">{{ $t('home.introduction_title') }}</b></p>
            <p class="">{{ $t('home.introduction') }}</p>
            <p class=" max-w-[450px]">{{ $t('home.about_me') }}</p>

            <UButton :label="$t('navigation.title_about')" to="/about" size="xl" color="primary"
                class="my-4 py-4 px-6 text-lg" />
        </div>

        <div class="rounded-lg p-2 flex items-center justify-center">
            <img src="/img/main-img.webp" class="object-cover" alt="Chad Feierstein"></img>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>