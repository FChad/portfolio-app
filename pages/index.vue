<template>
    

    <div class="sm:flex md:flex justify-between items-center w-full min-h-[50vh]">
        <div class="rounded-lg p-2 sm:flex md:flex flex-col mr-5">
            <UButton to="" target="_blank" color="primary" icon="i-mdi-linkedin" variant="solid"
                class="m-2 justify-center" />
            <UButton to="" target="_blank" color="primary" icon="i-mdi-facebook-box" variant="solid"
                class="m-2 justify-center" />
            <UButton to="" target="_blank" color="primary" icon="i-mdi-instagram" variant="solid"
                class="m-2 justify-center" />
            <UButton to="" target="_blank" color="primary" icon="i-mdi-github" variant="solid"
                class="m-2 justify-center" />
        </div>
        <div class="rounded-lg mx-auto px-4 md:px-6 lg:px-8 xl:px-10 max-w-2xl">
            <h3 class="text-6xl leading-normal font-semibold">Hallo, ich bin Chad</h3>
            <p><b class="text-xl leading-loose font-semibold">Student mit Abschluss</b></p>
            <p class="text-lg">Herzlich willkommen auf meiner Portfolio-Website!</p>
            <p class="text-lg">Hier habe ich eine Plattform geschaffen, um meine schulischen und beruflichen Aktivitäten
                mit umfassenden Details zu präsentieren. Bei weiteren Fragen stehe ich Ihnen gerne zur Verfügung, zögern
                Sie nicht, mich zu kontaktieren.</p>

            <UButton label="Kontakt" to="/contact" size="xl" color="primary" class="my-4 py-4 px-6 text-lg" />
        </div>
        <div class="rounded-lg p-2 w-full flex items-center justify-center">
            <img src="/img/main-img.webp" class="object-cover"></img>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>