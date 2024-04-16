<template>
    <PageHeader :title="$t('about.pageHeader')" />

    <div class="flex justify-center items-center gap-10 max-lg:w-full max-lg:grid max-lg:gap-5 pb-10">
        <div class="relative">
            <img src="/img/about-img.webp" class="max-lg:min-w-0 max-lg:w-full max-w-full rounded-lg"
                alt="Chad Feierstein beim Fallschirmspringen" width="600" height="456">
        </div>
        <div class="max-lg:min-w-0 max-lg:w-full">
            <div class="max-w-[600px]">
                <h3 class="font-semibold mb-2">{{ $t('about.introduction.name') }}</h3>
                <h4 class="text-lg font-semibold mb-2">{{ $t('about.introduction.description') }}</h4>
                <p class="mb-3 pb-6 border-b-2 border-gray-300 dark:border-gray-600">{{
        $t('about.introduction.bio') }}</p>
            </div>
            <ul class="flex gap-x-8 max-lg:flex-col">
                <li class="max-lg:justify-start flex justify-center items-center gap-4 mb-5 list-none">
                    <h3 id="age" class="text-4xl font-bold">24</h3>
                    <span class="text-base">{{ $t('about.stats.age') }}</span>
                </li>
                <li class="max-lg:justify-start flex justify-center items-center gap-4 mb-5 list-none">
                    <h3 class="text-4xl font-bold">9</h3>
                    <span class="text-base">{{ $t('about.stats.school_years') }}</span>
                </li>
                <li class="max-lg:justify-start flex justify-center items-center gap-4 mb-5 list-none">
                    <h3 class="text-4xl font-bold">4</h3>
                    <span class="text-base">{{ $t('about.stats.training_years') }}</span>
                </li>
                <li class="max-lg:justify-start flex justify-center items-center gap-4 mb-5 list-none">
                    <h3 class="text-4xl font-bold">2</h3>
                    <span class="text-base">{{ $t('about.stats.study_years') }}</span>
                </li>
            </ul>
            <UButton :label="$t('about.contact_me')" :to="localePath('contact')" size="xl" color="blue"
                class="my-4 py-4 px-6 text-lg" />
        </div>
    </div>

    <PageHeader :title="$t('hobbies.pageHeader')" />

    <div class="w-full mb-4">
        <div class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full gap-8 m-auto min-h-[500px]">
            <div>
                <div class="relative group max-w-full h-[360px] rounded-lg overflow-hidden cursor-pointer">
                    <div
                        class="group-hover:z-10 group-hover:absolute group-hover:w-full group-hover:h-full group-hover:bg-black group-hover:bg-opacity-75 transition duration-500 ease-in-out">
                    </div>
                    <div
                        class="z-10 absolute bottom-0 left-0 m-5 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 text-slate-100 transition duration-1000 ease-in-out">
                        <h3 class="text-2xl font-bold">{{ $t('hobbies.list.programming.title') }}</h3>
                        <span class="text-xl">{{ $t('hobbies.list.programming.description') }}</span>
                    </div>
                    <img src="/img/hobbies/hobby-img1.webp" alt="Programmierung" width="500" height="360" class="w-full h-full object-cover">
                </div>
            </div>

            <div>
                <div class="relative group max-w-full h-[360px] rounded-lg overflow-hidden cursor-pointer">
                    <div
                        class="group-hover:z-10 group-hover:absolute group-hover:w-full group-hover:h-full group-hover:bg-black group-hover:bg-opacity-75 transition duration-500 ease-in-out">
                    </div>
                    <div
                        class="z-10 absolute bottom-0 left-0 m-5 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 text-slate-100 transition duration-1000 ease-in-out">
                        <h3 class="text-2xl font-bold">{{ $t('hobbies.list.learning.title') }}</h3>
                        <span class="text-xl">{{ $t('hobbies.list.learning.description') }}</span>
                    </div>
                    <img src="/img/hobbies/hobby-img2.webp" alt="Lernen" width="500" height="360" class="w-full h-full object-cover">
                </div>
            </div>

            <div>
                <div class="relative group max-w-full h-[360px] rounded-lg overflow-hidden cursor-pointer">
                    <div
                        class="group-hover:z-10 group-hover:absolute group-hover:w-full group-hover:h-full group-hover:bg-black group-hover:bg-opacity-75 transition duration-500 ease-in-out">
                    </div>
                    <div
                        class="z-10 absolute bottom-0 left-0 m-5 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 text-slate-100 transition duration-1000 ease-in-out">
                        <h3 class="text-2xl font-bold">{{ $t('hobbies.list.dogs.title') }}</h3>
                        <span class="text-xl">{{ $t('hobbies.list.dogs.description') }}</span>
                    </div>
                    <img src="/img/hobbies/hobby-img3.webp" alt="Meine Hunde" width="520" height="470" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>

</template>

<script setup></script>

<style scoped></style>