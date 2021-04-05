<template>
    <div class="container">
        <banner class="inner-banner" :showHomeButton="true">
            <h1>Advert Detail</h1>
        </banner>
        <section class="inner-content">
            <div class="listing-detail">
                <card className="details-card mb-3">
                    <h2>{{listing.title}}</h2>
                    <p class="flex justify-between my-3"><span><b>Posted:</b> {{getFormatDate(listing.posted_at)}}</span> <span><b>Category:</b> {{listing.category}}</span> <span><b>Location:</b> {{listing.location}}</span></p>
                    <!-- <agile>
                        <div class="slide" v-for="(image,index) in images" :key="index">
                            <img :src="image.photo" alt="">
                        </div>
                    </agile> -->
                    <carousel :autoplay="true">
                        <slide v-for="(image,index) in images" :key="index">
                            <img :src="image.photo" alt="">
                        </slide>
                      </carousel>
                    <!-- <div class="slide" v-for="(image,index) in images" :key="index">
                        <img :src="image.photo" alt="">
                    </div> -->
                     <h2 class="my-2">Description</h2>
                     <div>
                         {{listing.description}}
                     </div>
                </card>
                
                <div class="widget-card">
                    <card className="w-full bg-primary">
                        <h2 class="text-white" v-html="getAmount(listing.price)"></h2>
                    </card>

                    <card className="w-full flex flex-col items-center">
                        <h3> Seller Info </h3>
                        <div class="rounded-full h-24 w-24 flex items-center justify-center bg-gray-200 my-5"><i class="fas fa-user"></i></div>
                        <p class="text-xl font-medium">{{user.name}}</p>
                    </card>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {getListingDetail} from '../../services/requests/public';
import {formatAmount, formatDate} from '../../helpers';
export default {
    data(){
        return {
            listing:{},
            user:{},
            images: [
                'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
            ]
        }
    },
    computed:{
        popularListing(){
            return this.listing;
        }
    },
    methods:{
        getAmount(amount, currency){
            return formatAmount(amount, currency);
        },
        getFormatDate(postedAt){
            return formatDate(postedAt);
        },
        getPopularListing(){
            getListings()
            .then(res=>{
                this.listings = res.data.data;
            });
        },
        async loadListing(){
            const slug = this.$route.params.slug;
            const res = await getListingDetail(slug);
            const data = res.data.data;
            this.listing = data;
            this.images = data.images;
            this.user = res.data.user;
        },
    },
    mounted(){
        this.loadListing();
    }
}
</script>