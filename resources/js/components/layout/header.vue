<template>
    <div>
         <div class="mobile-menu" id="mobile-nav">
            <div class="menu-content slideOut">
                <div class="logo">
                  <logo/>
                  <span class="close"><a href="#"> <i class="fas fa-times"></i></a></span>
                </div>
                <div class="search-form">
                    <a-form @submit.prevent="handleSearch">
                    <a-form-item label="Keyword">
                        <a-input name="keyword" v-model="search.keyword"  placeholder="Find properties, electronics, mobile phones, cars..." size="large"/>
                    </a-form-item>
                    <a-form-item label="Category">
                        <a-select default-value="Categories" size="large" v-model="search.category" name="category">
                          <a-select-option :value="category.id" v-for="(category, index) in misc.categories" :key="index" >
                            {{category.name}}
                          </a-select-option>
                        </a-select>
                    </a-form-item>
                        <a-button
                          type="primary"
                          size="large"
                          class="text-center w-100"
                          htmlType="submit"
                          >
                          <strong>Search</strong>
                          </a-button>
                     </a-form>
                </div>
                <ul>
                    <li><a href="">Post Ad</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">All Listings</a></li>
                    <li><a href="">My Listings</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Register</a></li>
                </ul>
            </div>
        </div>
        <header>
            <div class="content">
                <ul>
                    <li class="show-mobile"> <a href="#" id="mobile-menu-toggle"> <i class="fas fa-align-left"></i></a> </li>
                    <li class="show-mobile"> <logo/> </li>
                    <li v-if="!user.authorized"> <router-link :to="{name: 'login'}"> <i class="fas fa-lock"></i> <span>Login</span></router-link> </li>
                    <li v-if="user.authorized"> <i class="fas fa-user"></i> <span>{{user.name}}</span></li>
                </ul>
                <div class="search-form">
                     <a-form @submit.prevent="handleSearch">
                      <a-input-group compact>
                        <a-select default-value="Categories" size="large" v-model="search.category" name="category">
                          <a-select-option :value="category.id" v-for="(category, index) in misc.categories" :key="index" >
                            {{category.name}}
                          </a-select-option>
                        </a-select>
                        <a-input style="width: 50%" name="category" v-model="search.keyword"  placeholder="Find properties, electronics, mobile phones, cars..." size="large"/>
                          <a-button
                          type="primary"
                          size="large"
                          class="text-center w-100"
                          htmlType="submit"
                          >
                          <strong>Search</strong>
                          </a-button>
                      </a-input-group>
                     </a-form>
                    
                </div>
                <div class="actions">
                    <a v-if="user.authorized" @click.prevent="logout"> <i class="fas fa-sign-out-alt"></i> Logout</a>
                    <router-link v-if="user.authorized" :to="{name:'user-listings'}" class="btn btn-primary btn-sm"> <i class="fas fa-list"></i> My Listings</router-link>
                    <router-link :to="{name: 'post-ad'}" class="btn btn-primary btn-sm"> <i class="fas fa-plus-circle"></i> Post Your Ad</router-link>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import jQuery from 'jquery';
export default {
    name: 'mainHeader',
      data(){
        return{
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
      },
      mounted(){
          jQuery('#mobile-menu-toggle').on('click',function(){
            jQuery('#mobile-nav').show()
            let nav = jQuery('#mobile-nav .menu-content');
            if(!nav.hasClass('slideIn')){
                nav.addClass('slideIn').removeClass('slideOut')
            }
            else{
                nav.removeClass('slideIn').addClass('slideOut')
            }
        })

        jQuery(document).on('mouseup',function(e){
            //$('#mobile-nav').toggle('slow','swing')
            jQuery('#mobile-nav').hide()
            let nav = jQuery('#mobile-nav .menu-content');

            if (!nav.is(e.target) && nav.has(e.target).length === 0){
                nav.addClass('slideOut').removeClass('slideIn')
            }
        })
      }
}
</script>