<template>
    <PageHeader :title="$t('skills.pageHeader')" />

    <div class="max-w-[600px] my-12">
        <h3>{{ $t('skills.sectionCompetencies.title') }}</h3>
        <p>{{ $t('skills.sectionCompetencies.description') }}</p>
    </div>


    <div class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full gap-8 m-auto">
        <div>
            <span
                class="flex items-center justify-center gap-2 text-xl font-semibold bg-blue-500 dark:bg-blue-900 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                <Icon name="i-material-symbols-school" class="w-6 h-6" /> {{ $t('skills.education.title') }}
            </span>
            <ul>
                <li v-for="item in $tm('skills.education.items')" class="card">
                    <span class="flex items-center justify-start gap-1">
                        <Icon name="i-material-symbols-calendar-month-rounded" class="w-5 h-5" />{{
        extractValue(item.year) }}
                    </span>

                    <NuxtLink v-if="item.link" :to="extractValue(item.link)" target="_blank">
                        <Icon name="i-material-symbols-open-in-new-rounded"
                            class="w-5 h-5 absolute top-0 right-0 m-2 cursor-pointer text-blue-500" />
                    </NuxtLink>

                    <p>
                        <span class="font-medium" v-if="item.degree">{{ extractValue(item.degree) }}</span>
                        <span v-if="item.field"><br>{{ extractValue(item.field) }}</span>
                        <span v-if="item.school"><br>{{ extractValue(item.school) }}</span>
                        <span v-if="item.grade"><br>{{ extractValue(item.grade) }}</span>
                    </p>
                </li>
            </ul>

        </div>
        <div>
            <span
                class="flex items-center justify-center gap-2 text-xl font-semibold bg-blue-500 dark:bg-blue-900 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                <Icon name="i-material-symbols-language" class="w-6 h-6" /> {{ $t('skills.languages.title') }}
            </span>
            <ul>
                <li v-for="item in $tm('skills.languages.items')" class="card">
                    <div class="flex justify-between items-center mb-1">
                        <img :src="extractValue(item.flag)" alt="Luxemburgische Flagge"
                            class="max-w-[30px] rounded-[6px]">
                        <span v-if="item.language" class="font-medium">{{ extractValue(item.language) }}</span>
                        <span v-if="item.level" class="font-medium">{{ extractValue(item.level) }}</span>
                    </div>
                    <UProgress v-if="item.percentage" :value="item.percentage" color="blue"/>
                </li>
            </ul>

        </div>
        <div>
            <span
                class="flex items-center justify-center gap-2 text-xl font-semibold bg-blue-500 dark:bg-blue-900 text-white rounded-lg text-center p-2 my-2 shadow-lg">
                <Icon name="i-material-symbols-verified-rounded" class="w-6 h-6" /> {{ $t('skills.certifications.title')
                }}
            </span>
            <ul>

                <li v-for="item in $tm('skills.certifications.items')" class="card">
                    <span class="flex items-center justify-start gap-1">
                        <Icon name="i-material-symbols-calendar-month-rounded" class="w-5 h-5" />{{
        extractValue(item.year) }}
                    </span>

                    <NuxtLink v-if="item.link" :to="extractValue(item.link)" target="_blank">
                        <Icon name="i-material-symbols-open-in-new-rounded"
                            class="w-5 h-5 absolute top-0 right-0 m-2 cursor-pointer text-blue-500" />
                    </NuxtLink>

                    <p>
                        <span v-if="item.title" class="font-medium">{{ extractValue(item.title) }}</span>
                        <span v-if="item.details"><br>{{ extractValue(item.details) }}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>

    <div class="max-w-[600px] my-12">
        <h3>{{ $t('skills.sectionWork.title') }}</h3>
        <p>{{ $t('skills.sectionWork.description') }}</p>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full gap-8 m-auto">

        <div class="card" v-for="(item, index) in $tm('skills.work.items')">
            <div class="leading-[30px] flex justify-between items-center flex-wrap relative">
                <h4 class="text-xl font-bold w-full">{{ extractValue(item.title) }}</h4>
                <div class="w-full flex justify-between flex-wrap">
                    <span v-if="item.company" class="font-medium flex items-center justify-start gap-1">
                        <Icon name="i-material-symbols-work" class="w-5 h-5" /> {{ extractValue(item.company) }}
                    </span>
                    <span v-if="item.type" class="font-medium">{{ extractValue(item.type) }}</span>
                </div>
                <div class="w-full flex justify-between">
                    <span v-if="item.date" class="flex items-center justify-start gap-1">
                        <Icon name="i-material-symbols-calendar-month-rounded" class="w-5 h-5" /> {{
        extractValue(item.date) }}
                    </span>
                    <span v-if="item.duration">{{ extractValue(item.duration) }}</span>
                </div>
            </div>
            <div class="w-full h-[2px] bg-gray-300 mt-2 mb-[14px]"></div>
            <p v-if="item.description">{{ extractValue(item.description) }}</p>

            <UButton v-if="item.tasks" icon='i-heroicons-window-20-solid' color="gray" variant="solid" class="p-2 my-2"
                @click="openModal('job' + index)">
                {{ $t('skills.work.show_more') }}</UButton>

            <UModal v-if="item.tasks" :model-value="openModalIndex === 'job' + index" 
                @update:model-value="value => value ? openModal(index) : closeModal()" prevent-close>
                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <UButton color="gray" variant="solid" icon="i-heroicons-x-mark-20-solid" class="m-1 absolute right-0 top-0 z-50" @click="closeModal()" />
                    <div class="leading-[30px] flex justify-between items-center flex-wrap relative">
                        <h4 class="text-xl font-bold w-full text-center">{{ extractValue(item.title) }}</h4>

                        <div class="w-full flex justify-between flex-wrap">

                            <span v-if="item.company" class="font-medium flex items-center justify-start gap-1">
                                <Icon name="i-material-symbols-work" class="w-5 h-5" /> {{ $t('skills.work.company')
                                }}
                                {{ extractValue(item.company) }}
                            </span>
                            <span v-if="item.type" class="font-medium">{{ $t('skills.work.type') }} {{
        extractValue(item.type) }}</span>
                        </div>
                        <div class="w-full flex justify-between">
                            <span v-if="item.date" class="flex items-center justify-start gap-1">
                                <Icon name="i-material-symbols-calendar-month-rounded" class="w-5 h-5" />{{
        $t('skills.work.date') }} {{
        extractValue(item.date) }}
                            </span>
                            <span v-if="item.duration">{{ $t('skills.work.duration') }} {{
        extractValue(item.duration) }}</span>
                        </div>
                    </div>

                    <div class="w-full h-[2px] bg-gray-300 mt-2 mb-[14px]"></div>

                    <span class="font-medium">{{ $t('skills.work.description') }}</span>
                    <p v-if="item.description">{{ extractValue(item.description) }}</p>
                    <div class="w-full h-[2px] bg-gray-300 mt-2 mb-[14px]"></div>
                    <span class="font-medium">{{ $t('skills.work.tasks') }}</span>
                    <ul class="list-disc pl-6">
                        <li v-for="task in item.tasks">{{ extractValue(task.name) }}</li>
                    </ul>
                </UCard>
            </UModal>
        </div>
    </div>

    <div class="max-w-[600px] my-12">
        <h3>{{ $t('skills.sectionOtherSkills.title') }}</h3>
        <p>{{ $t('skills.sectionOtherSkills.description') }}</p>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full gap-8 m-auto">
        <div class="card" v-for="(item, index) in $tm('skills.otherSkills.items')">
            <div class="leading-[30px] flex justify-between items-center flex-wrap relative">
                <h4 class="flex items-center justify-start gap-1 text-xl font-bold w-full">
                    <Icon :name="extractValue(item.icon)" class="w-6 h-6" />{{ extractValue(item.title) }}
                </h4>
            </div>
            <div class="w-full h-[2px] bg-gray-300 mt-2 mb-[14px]"></div>
            <p>{{ extractValue(item.description) }}</p>

            <UButton v-if="item.details" icon='i-heroicons-window-20-solid' color="gray" variant="solid"
                class="p-2 my-2" @click="openModal('skill' + index)">
                {{ $t('skills.otherSkills.show_more') }}</UButton>

            <UModal v-if="item.details" :model-value="openModalIndex === 'skill' + index" prevent-close
                @update:model-value="value => value ? openModal(index) : closeModal()">
                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }" prevent-close>
                    <UButton color="gray" variant="solid" icon="i-heroicons-x-mark-20-solid" class="m-1 absolute right-0 top-0 z-50" @click="closeModal()" />

                    <div class="flex justify-between items-center flex-wrap relative">
                        <h4 class="flex items-center justify-start gap-1 text-xl font-bold w-full">
                            <Icon :name="extractValue(item.icon)" class="w-6 h-6" />{{ extractValue(item.title) }}
                        </h4>
                    </div>

                    <div class="w-full h-[2px] bg-gray-300 my-2"></div>

                    <p><span class="font-bold">{{ $t('skills.otherSkills.description') }}</span><br> {{
        extractValue(item.description) }}</p>

                    <template v-for="categoryItems in item.details">
                        <div class="w-full h-[2px] bg-gray-300 my-2"></div>
                        <p class="text-lg font-bold my-2">{{ extractValue(categoryItems.category) }}</p>
                        <ul class="list-disc pl-6">
                            <li v-for="detailItems in categoryItems.items"><span class="font-bold">{{
        extractValue(detailItems.type) }}:</span> {{ extractValue(detailItems.description)
                                }}</li>
                        </ul>
                    </template>
                </UCard>
            </UModal>
        </div>
    </div>
</template>

<script setup>

const openModalIndex = ref(null);

function openModal(index) {
    openModalIndex.value = index;
}

function closeModal() {
    openModalIndex.value = null;
}

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