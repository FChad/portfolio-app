<script setup>

const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
})
const title = computed(() => t('layouts.title', { title: t(route.meta.title ?? 'TBD') }))

const navigationList = ref([
    {
        "title": "title_home",
        "_path": "/",
    },
    {
        "title": "title_about",
        "_path": "/about",
    },
    {
        "title": "title_skills",
        "_path": "/skills",
    },
    {
        "title": "title_projects",
        "_path": "/projects",
    },
    {
        "title": "title_contact",
        "_path": "/contact",
    }
]);
</script>

<template>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
        <Title>{{ title }}</Title>

        <Meta name="keywords" :content="$t('layouts.keywords')" />
        <Meta name="description" :content="$t('layouts.description')" />
        <Meta name="author" content="Chad Feierstein" />

        <Meta name="og:title" :content="title" />
        <Meta name="og:description" :content="$t('layouts.description')" />
        <Meta name="og:url" content="https://www.chad.lu/" />
        <Meta name="og:type" content="website" />

        <template v-for="link in head.link" :key="link.id">
            <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
            <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
    </Head>

    <Body>
        <div class="h-full flex flex-col min-h-screen">
            <header>
                <Navigation :navigation-list="navigationList"></Navigation>
                <ScrollOnTop></ScrollOnTop>
            </header>

            <main class="flex-1">
                <div class="content-wrapper">
                    <slot />
                </div>
            </main>

            <footer class="mt-auto">
                <LayoutFooter :navigation-list="navigationList" />
            </footer>

            <UNotifications />
        </div>
    </Body>

    </Html>
</template>

<style scoped></style>