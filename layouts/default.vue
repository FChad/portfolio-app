<template>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
            <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
            <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
    </Head>

    <Body>
        <header>
            <Navigation></Navigation>
            <ScrollOnTop></ScrollOnTop>
        </header>

        <main>
            <div class="content-wrapper">
                <slot />
            </div>
        </main>

        <footer>
            <div class="w-full bg-slate-300 dark:bg-slate-700 text-center min-h-24 flex items-center justify-center mt-4">
                <p>© 2024 von Chad Feierstein.
                    <br>Alle Rechte vorbehalten.
                    <br>Website gehostet auf Cloudflare
                </p>
            </div>
        </footer>

        <UNotifications />
    </Body>

    </Html>
</template>

<script setup>

const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
})
const title = computed(() => t('layouts.title', { title: t(route.meta.title ?? 'TBD') }))

</script>

<style scoped></style>