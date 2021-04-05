<template>
    <div>
        <banner class="inner-banner" :showHomeButton="true">
            <h1>My Listings</h1>
        </banner>

        <div class="h-100 w-full flex items-center justify-center bg-teal-lightest">
            <div class="bg-white p-6 m-4 w-full lg:w-2/4 ">
                    <div v-for="(listing,index) in getListings" :key="index" class="bg-white w-full my-3 border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg bottom-border-style">
                      <div id="header" class="flex"> 
                         <img alt="mountain" class="w-auto h-44 rounded-md border-2 border-gray-300" :src="listing.images[0].photo" />
                         <div id="body" class="flex flex-col ml-5">
                            <h4 id="name" class="text-xl font-semibold mb-2">{{listing.title}}</h4>
                            <p id="job" class="text-gray-800 mt-2">{{listing.excerpt}}</p>
                            <div class="flex mt-5">
                               <span class="mr-3 text-primary"><router-link :to="'/user/edit-ad/'+listing.slug"><i class="fas fa-edit mx-1"></i>Edit</router-link></span>
                               <span class="mx-3 text-red-600"><a href="#" @click.prevent="deleteUserListing(listing)"><i class="fas fa-trash mx-1"></i>Delete</a></span>
                            </div>
                            <div class="flex mt-5">
                                <!-- Rounded switch -->
                                <label class="switch">
                                  <input type="checkbox" :checked="listing.status === 'offline' ? false : true" @click="changeStatus($event,listing)">
                                  <span class="slider round"></span>
                                </label>
                                <span class="ml-2">{{listing.status === 'offline' ? 'Offline' : 'Published'}}</span>
                            </div>
                         </div>
                      </div>
                   </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getUserListings, updateListingStatus, deleteListing} from '../../services/requests/user';
export default {
    data(){
        return{
            listings: []
        }
    },
    computed:{
        getListings(){
            return this.listings;
        }
    },
    methods:{
        async loadListings(){
            getUserListings()
            .then(res=>{
                this.listings = res.data.data;
            });
        },
        changeStatus(ele, item){
            const status = ele.target.checked ? 'online' : 'offline';
            const index = this.listings.indexOf(item);
            item.status = status;
            this.listings.splice(index,1,item);
            updateListingStatus(item.id,status).then(res=>{
                this.$notification.success({
                    message: 'Status updated'
                });
            })
        },
        deleteUserListing(item){
            const __this = this;
            this.$modal.confirm({
                title: "Delete listing?",
                confirmLoading: true,
                async onOk() {
                    deleteListing(item.id).then(res=>{
                        const index = __this.listings.indexOf(item);
                        __this.listings.splice(index,1);
                         __this.$notification.success({
                            message: 'Listing deleted'
                        });
                    })
                }
            })
            
        }
    },
    created(){
        this.loadListings();
    }
    
}
</script>