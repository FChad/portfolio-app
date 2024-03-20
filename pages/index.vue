<template>
    <div class="flex justify-between items-center w-full max-md:grid">
        <div class="flex md:flex-col mr-8">
            <UButton to="" target="_blank" color="gray" icon="i-mdi-linkedin" variant="solid"
                class="m-2 justify-center" />
            <UButton to="" target="_blank" color="gray" icon="i-mdi-facebook-box" variant="solid"
                class="m-2 justify-center" />
            <UButton to="" target="_blank" color="gray" icon="i-mdi-instagram" variant="solid"
                class="m-2 justify-center" />
            <UButton to="" target="_blank" color="gray" icon="i-mdi-github" variant="solid"
                class="m-2" />
        </div>

        <div class="max-md:text-sm">
            <h3 class="text-5xl leading-normal font-semibold">{{ $t('home.greeting') }}</h3>
            <p><b class="text-xl leading-loose font-semibold">{{ $t('home.introduction_title') }}</b></p>
            <p class="text-lg">{{ $t('home.introduction') }}</p>
            <p class="text-lg">{{ $t('home.about_me') }}</p>

            <UButton :label="$t('home.learn_more')" to="/about" size="xl" color="primary" class="my-4 py-4 px-6 text-lg" />
        </div>

        <div class="rounded-lg p-2 w-full flex items-center justify-center">
            <img src="/img/main-img.webp" class="object-cover"></img>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>