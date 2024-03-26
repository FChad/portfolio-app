<template>
    <PageHeader :title="$t('contact.pageHeader')" />

    <div class="flex w-full max-sm:flex-wrap gap-8 m-auto">

        <div>
            <span
                class="flex items-center justify-center gap-2 text-xl font-semibold bg-blue-500 dark:bg-blue-900 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                {{ $t('contact.socials_title') }}
            </span>
            
            <div class="card">
                <div class="hidden">
                    <Icon name="i-mdi-linkedin"></Icon>
                    <Icon name="i-mdi-facebook-box"></Icon>
                    <Icon name="i-mdi-instagram"></Icon>
                    <Icon name="i-mdi-github"></Icon>
                </div>
                <UButton v-for="social in $tm('socials')" :to="extractValue(social.link)" target="_blank" color="gray" :icon="extractValue(social.icon)" variant="solid"
                class="m-2 justify-center transition duration-150 ease-in-out"> {{ extractValue(social.name) }}</UButton>
            </div>
        </div>

        <div>
            <span
                class="flex items-center justify-center gap-2 text-xl font-semibold bg-blue-500 dark:bg-blue-900 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                {{ $t('contact.private_title') }}
            </span>

            <div class="card">
                <UButton to="mailto:mail@chad.lu" color="gray" icon="i-heroicons-envelope-20-solid" variant="solid"
                    class="m-2 justify-center transition duration-150 ease-in-out"> {{ $t('contact.email') }}:
                    mail@chad.lu
                </UButton>
                <UButton color="gray" icon="i-heroicons-device-phone-mobile-20-solid" variant="solid" disabled
                    class="m-2 justify-center transition duration-150 ease-in-out"> {{ $t('contact.telephone') }}: *{{
        $t('contact.private_label') }}*</UButton>
                <UButton color="gray" icon="i-heroicons-map-solid" variant="solid" disabled
                    class="m-2 justify-center transition duration-150 ease-in-out"> {{ $t('contact.address') }}: *{{
        $t('contact.private_label') }}*</UButton>
            </div>
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