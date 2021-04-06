<template>
    <div class="container">
        <banner class="main-banner">
            <h1>You can Buy, Sell, Rent, Book anything from here </h1>
            <p>Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more in the world.</p>
            <router-link :to="{name:'listings'}" class="btn btn-default btn-sm my-10"> <i class="fas fa-eye"></i> Show all ads </router-link>
        </banner>
        <section class="inner-content popular-listing">
            <h2> Popular Trending <span>Ads</span></h2>
            <div class="listing">
                <listing-card v-for="(listing, index) in popularListing" :key="index" :listing="listing" />
            </div>
            <div class="flex justify-center"><router-link :to="{name:'listings'}" class="btn btn-primary my-10"> View more ads</router-link></div>
            
        </section>
        <section class="inner-content category-listing">
            <h2> Top Categories by <span>Ads</span></h2>
            <div class="listing">
                <category-card v-for="(category, index) in getCategories" :key="index" :category="category" />
            </div>
            <div class="flex justify-center"><router-link :to="{name:'categories'}" class="btn btn-primary my-10"> View more categories</router-link></div>
        </section>
    </div>
</template>
<script>
import {getListings, getCategories} from '../../services/requests/public';
export default {
    data(){
        return {
            listings:[],
            categories:[]
        }
    },
    computed:{
        popularListing(){
            return this.listings;
        },
        getCategories(){
            return this.categories;
        },
    },
    methods:{
        getPopularListing(){
            getListings(20,1)
            .then(res=>{
                this.listings = res.data.data;
            });
        }
    },
    mounted(){
        this.getPopularListing();
        getCategories(10,1)
        .then(res=>{
            this.categories = res.data.data;
        })
        //store all categories
        this.$store.dispatch('misc/loadCategories');
    }
}
</script>