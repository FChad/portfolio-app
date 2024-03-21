<template>
    <PageHeader title="Fähigkeiten" />

    <div class="max-w-[600px]">
        <h3>Kompetenzen</h3>
        <p>In diesem Abschnitt können Sie meine Schullaufbahn sehen, in der ich wichtige Meilensteine
            erreicht habe.</p>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full gap-8 m-auto">
        <div>
            <span class="flex items-center justify-center gap-2 text-xl font-bold bg-blue-500 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                <Icon name="i-material-symbols-school" class="w-6 h-6"/> Bildung
            </span>
            <ul>
                <li v-for="item in $tm('skills.education.items')" :key="item.year" class="card">
                    <span class="flex items-center justify-start gap-1"><Icon name="i-material-symbols-calendar-month-rounded" class="w-5 h-5"/>{{ item.year.body.static }}</span>

                    <NuxtLink v-if="item.link" :to="item.link.body.static" target="_blank">
                        <Icon name="i-material-symbols-open-in-new-rounded" class="w-5 h-5 absolute top-0 right-0 m-2 cursor-pointer text-blue-500"/>
                    </NuxtLink>

                    <p>
                        <span class="font-medium" v-if="item.degree">{{ item.degree.body.static }}</span>
                        <span v-if="item.field"><br>{{ item.field.body.static }}</span>
                        <span v-if="item.school"><br>{{ item.school.body.static }}</span>
                        <span v-if="item.grade"><br>{{ item.grade.body.static }}</span>
                    </p>
                </li>
            </ul>

        </div>
        <div>
            <span class="flex items-center justify-center gap-2 text-xl font-bold bg-blue-500 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                <Icon name="i-material-symbols-language" class="w-6 h-6"/> Sprachen
            </span>
            <ul>
                <li v-for="item in $tm('skills.languages.items')" :key="item.language" class="card">
                    <div class="flex justify-between items-center mb-1">
                        <img :src="item.flag.body.static" alt="Luxemburgische Flagge" class="max-w-[30px] rounded-[6px]">
                        <span v-if="item.language">{{ item.language.body.static }}</span>
                        <span v-if="item.level">{{ item.level.body.static }}</span>
                    </div>
                    <UProgress v-if="item.percentage" :value="item.percentage" />
                </li>
            </ul>

        </div>
        <div class="education">
            <span class="flex items-center justify-center gap-2 text-xl font-bold bg-blue-500 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                <Icon name="i-material-symbols-verified-rounded" class="w-6 h-6"/> Zertifizierungen
            </span>
            <ul class="edu-list">

                <li v-for="item in $tm('skills.certifications.items')" :key="item.certification" class="card">
                    <span class="flex items-center justify-start gap-1"><Icon name="i-material-symbols-calendar-month-rounded" class="w-5 h-5"/>{{ item.year.body.static }}</span>

                    <NuxtLink v-if="item.link" :to="item.link.body.static" target="_blank">
                        <Icon name="i-material-symbols-open-in-new-rounded" class="w-5 h-5 absolute top-0 right-0 m-2 cursor-pointer text-blue-500"/>
                    </NuxtLink>

                    <p>
                        <span v-if="item.title" class="font-medium">{{ item.title.body.static }}</span>
                        <span v-if="item.details"><br>{{ item.details.body.static }}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>

    <div class="max-w-[600px]">
        <h3>Arbeit & Erfahrung</h3>
        <p>Mehrere Jahre lang konnte ich Berufserfahrung sammeln. Ich konnte sowohl selbstständig als auch in einem Team an Projekten arbeiten.</p>
    </div>
</template>

<script setup></script>

<style scoped></style>