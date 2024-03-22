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
        <template v-for="link in head.link" :key="link.id">
            <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
            <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
    </Head>

    <Body>
        <header>
            <Navigation :navigation-list="navigationList"></Navigation>
            <ScrollOnTop></ScrollOnTop>
        </header>

        <main>
            <div class="content-wrapper">
                <slot />
            </div>
        </main>

        <footer>
            <LayoutFooter :navigation-list="navigationList"/>
        </footer>

        <UNotifications />
    </Body>

    </Html>
</template>

<style scoped></style>