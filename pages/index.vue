<template>
    <div
        class="min-h-[50px] rounded-lg bg-gray-200 dark:bg-gray-800 shadow text-center flex items-center justify-center p-2 my-2">
        <h2 class="text-xl font-semibold">Home</h2>
    </div>

    <div class="sm:flex md:flex justify-between items-center w-full min-h-[50vh]">
        <div class="rounded-lg p-2 sm:flex md:flex flex-col mr-5">
            <UButton to="https://volta.net" target="_blank" color="primary" icon="i-mdi-linkedin" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out" />
            <UButton color="primary" icon="i-mdi-facebook-box" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out" />
            <UButton color="primary" icon="i-mdi-instagram" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out" />
            <UButton color="primary" icon="i-mdi-github" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out" />
        </div>
        <div class="rounded-lg mx-auto px-4 md:px-6 lg:px-8 xl:px-10 max-w-2xl">
            <h3 class="text-6xl leading-normal font-semibold">Hallo, ich bin Chad</h3>
            <p><b class="text-xl leading-loose font-semibold">Student mit Abschluss</b></p>
            <p class="text-lg">Herzlich willkommen auf meiner Portfolio-Website!</p>
            <p class="text-lg">Hier habe ich eine Plattform geschaffen, um meine schulischen und beruflichen Aktivitäten
                mit
                umfassenden Details zu präsentieren. Bei weiteren Fragen stehe ich Ihnen gerne zur Verfügung, zögern Sie
                nicht,
                mich zu kontaktieren.</p>

            <UButton label="Kontakt" to="/contact" size="xl" color="primary" class="my-4">
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid" />
                </template>
            </UButton>
        </div>
        <div class="rounded-lg p-2 w-full flex items-center justify-center">
            <img src="/img/main-img.webp" class="object-cover"></img>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>