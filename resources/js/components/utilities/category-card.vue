<template>
    <!-- component -->
    <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 border-solid border border-gray-200 bottom-border-style cursor-pointer">
            <div class="flex justify-center">
                <div class="rounded-full h-24 w-24 flex items-center justify-center bg-gray-200 my-5"><img :src="'/img/categories/'+category.icon" alt=""></div>
            </div>
            <div class="py-4 px-6 text-center">
                <h1 class="text-2xl font-semibold text-gray-800">{{category.name}}</h1>
                <div class="flex flex-col items-center mt-4 text-gray-700 ">
                    <h1 class="px-2 text-base text-center text-primary"><router-link :to="{name:'category-listing', params:{id: category.id, slug: category.slug }}">{{category.listings}} ads</router-link></h1>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'categoryCard',
    props:{
        category: Object
    }
}
</script>