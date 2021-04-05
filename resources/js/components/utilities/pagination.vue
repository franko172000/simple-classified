<template>
    <div class="flex justify-center"><a href="#" @click.prevent="previousPage" class="btn btn-primary my-10 mr-3" v-show="page > 1"> <i class="fas fa-backward"></i> Previous ads </a>  <a href="#" @click.prevent="nextPage" v-show="page === totalPages ? false : true" class="btn btn-primary my-10"> Next ads <i class="fas fa-forward"></i></a></div>
</template>
<script>
export default {
    name: 'Pagination',
    data(){
        return{
            page: 1
        }
    },
    
    props:{
        totalPages: Number
    },
    methods:{
        nextPage(){
            if(this.page < this.totalPages){
                this.page++;
                this.emitPageChange();
            }
        },
        previousPage(){
            if(this.page > 1){
                this.page--;
                this.emitPageChange();
            }
        },
        emitPageChange(){
            this.$emit('onPageChange',this.page)
        }
    }
}
</script>