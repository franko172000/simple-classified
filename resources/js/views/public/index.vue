<template>
    <div class="main">
        <main-header />
        <router-view/>
        <main-footer />
        
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
          data(){
            return{
              form: this.$form.createForm(this),
              search:{
                keyword: "",
                category: "Categories"
              }
            }
          },
          computed: {
            ...mapState(['misc']),
            ...mapState(['user'])
          },
          methods:{
                handleSearch(){
                  if(this.search.keyword !== ""){
                    let {category, keyword} = this.search;
                    category = category === 'Categories' ? 0 : category;
                    if(this.$route.name === 'search'){
                      const query =  new URLSearchParams({category,keyword});
                      window.location.href = '/listings/search?'+query;
                    }else{
                      this.$router.push({name:'search', query:{category,keyword}});
                    }
                  }
              },
              logout(){
                this.$store.dispatch('user/logout');
              }
          }
    }
</script>