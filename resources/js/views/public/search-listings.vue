<template>
    <div class="container">
        <banner class="inner-banner" :showHomeButton="true">
            <h1>Search Result</h1>
        </banner>
        <section class="inner-content popular-listing">
            <div class="listing">
                <listing-card v-for="(listing, index) in popularListing" :key="index" :listing="listing" />
            </div>
            <pagination :totalPages="getTotalPages" @onPageChange="repondToChange"></pagination>
        </section>
    </div>
</template>
<script>
import pagination from '../../components/utilities/pagination.vue';
import {searchListing} from '../../services/requests/public';
export default {
  components: { pagination },
    data(){
        return {
            listings:[],
            totalRec:0,
            limit:10,
            page:1
        }
    },
    computed:{
        popularListing(){
            return this.listings;
        },
        getCategories(){
            return this.categories;
        },
        getTotalPages(){
            return Math.ceil(this.totalRec / this.limit);
        },
    },
    methods:{
        getSearchedListing(page){
            const {keyword,category} = this.$route.query;
            searchListing(keyword,category,this.limit,page)
            .then(res=>{
                this.listings = res.data.data;
                this.totalRec = res.data.total_records;
            });
        },
        repondToChange(page){
            this.getSearchedListing(page);
        }
    },
    mounted(){
        this.getSearchedListing(1);
    }
}
</script>