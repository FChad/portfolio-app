<template>
    <PageHeader :title="$t('contact.pageHeader')" />

    <div class="flex w-full max-sm:flex-wrap gap-8 m-auto">

        <div class="card">
            <span
                class="flex items-center justify-center gap-2 text-xl font-semibold bg-blue-500 dark:bg-blue-900 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                {{ $t('contact.socials_title') }}
            </span>
            <UButton :to="$t('contact.links.linkedin')" target="_blank" color="gray" icon="i-mdi-linkedin" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> LinkedIn</UButton>
            <UButton :to="$t('contact.links.facebook')" target="_blank" color="gray" icon="i-mdi-facebook-box" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> Facebook</UButton>
            <UButton :to="$t('contact.links.instagram')" target="_blank" color="gray" icon="i-mdi-instagram" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> Instagram</UButton>
            <UButton :to="$t('contact.links.github')" target="_blank" color="gray" icon="i-mdi-github" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> GitHub</UButton>
        </div>
        <div class="card">
            <span
                class="flex items-center justify-center gap-2 text-xl font-semibold bg-blue-500 dark:bg-blue-900 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                {{ $t('contact.private_title') }}
            </span>
            <UButton to="mailto:mail@chad.lu" color="gray" icon="i-heroicons-envelope-20-solid" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> {{ $t('contact.email') }}: mail@chad.lu</UButton>
            <UButton color="gray" icon="i-heroicons-device-phone-mobile-20-solid" variant="solid" disabled
                class="m-2 justify-center transition duration-150 ease-in-out"> {{ $t('contact.telephone') }}: *{{ $t('contact.private_label') }}*</UButton>
            <UButton color="gray" icon="i-heroicons-map-solid" variant="solid" disabled
                class="m-2 justify-center transition duration-150 ease-in-out"> {{ $t('contact.address') }}: *{{ $t('contact.private_label') }}*</UButton>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>