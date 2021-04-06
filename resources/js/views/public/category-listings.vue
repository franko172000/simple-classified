<template>
    <div class="container">
        <banner class="inner-banner" :showHomeButton="true">
            <h1>Category Listings</h1>
        </banner>
        <section class="inner-content popular-listing">
            <div class="listing">
                <listing-card v-for="(listing, index) in popularListing" :key="index" :listing="listing" />
            </div>
            <pagination :totalPages="getTotalPages" @onPageChange="repondToChange"></pagination>
            <!-- <div class="flex justify-center"><a href="#" @click.prevent="previousPage" class="btn btn-primary my-10 mr-3" v-show="page > 1"> <i class="fas fa-backward"></i> Previous ads </a>  <a href="#" @click.prevent="nextPage" v-show="page === getTotalPages ? false : true" class="btn btn-primary my-10"> Next ads <i class="fas fa-forward"></i></a></div> -->
        </section>
    </div>
</template>
<script>
import pagination from '../../components/utilities/pagination.vue';
import {getCategoryListings} from '../../services/requests/public';
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
        getPopularListing(page){
             const id = this.$route.params.id;
            getCategoryListings(id,this.limit,page)
            .then(res=>{
                this.listings = res.data.data;
                this.totalRec = res.data.total_records;
            });
        },
        repondToChange(page){
            this.getPopularListing(page);
        }
    },
    mounted(){
        this.getPopularListing(1);
    }
}
</script>