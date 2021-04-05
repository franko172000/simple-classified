<template>
    <div class="container">
        <banner class="inner-banner" :showHomeButton="true">
            <h1>All Categories</h1>
        </banner>
        <section class="inner-content category-listing">
            <div class="listing">
                <category-card v-for="(category, index) in getCategories" :key="index" :category="category" />
            </div>
            <pagination :totalPages="getTotalPages" @onPageChange="repondToChange"></pagination>
            <!-- <div class="flex justify-center"><a href="#" class="btn btn-primary my-10"> View more categories</a></div> -->
        </section>
    </div>
</template>
<script>
import {getCategories} from '../../services/requests/public';
export default {
    data(){
        return {
            categories:[],
            limit:10,
            totalRec:0,
            page:1
        }
    },
    computed:{
        getCategories(){
            return this.categories;
        },
        getTotalPages(){
            return Math.ceil(this.totalRec / this.limit);
        },
    },
    methods:{
        loadCategories(page){
            getCategories(this.limit,page)
            .then(res=>{
                this.categories = res.data.data;
                this.totalRec = res.data.total_records;
            })
        },
        repondToChange(page){
            this.loadCategories(page);
        }
    },
    mounted(){
        this.loadCategories(1)
    }
}
</script>