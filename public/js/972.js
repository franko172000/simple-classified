(self.webpackChunk=self.webpackChunk||[]).push([[972],{1323:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});var n=e(10642);const i={data:function(){return{listings:[],categories:[]}},computed:{popularListing:function(){return this.listings},getCategories:function(){return this.categories}},methods:{getPopularListing:function(){var t=this;(0,n.Y9)(20,1).then((function(s){t.listings=s.data.data}))}},mounted:function(){var t=this;this.getPopularListing(),(0,n.CP)(10,1).then((function(s){t.categories=s.data.data})),this.$store.dispatch("misc/loadCategories")}};const a=(0,e(51900).Z)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("banner",{staticClass:"main-banner"},[e("h1",[t._v("You can Buy, Sell, Rent, Book anything from here ")]),t._v(" "),e("p",[t._v("Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more in the world.")]),t._v(" "),e("router-link",{staticClass:"btn btn-default btn-sm my-10",attrs:{to:{name:"listings"}}},[e("i",{staticClass:"fas fa-eye"}),t._v(" Show all ads ")])],1),t._v(" "),e("section",{staticClass:"inner-content popular-listing"},[t._m(0),t._v(" "),e("div",{staticClass:"listing"},t._l(t.popularListing,(function(t,s){return e("listing-card",{key:s,attrs:{listing:t}})})),1),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("router-link",{staticClass:"btn btn-primary my-10",attrs:{to:{name:"listings"}}},[t._v(" View more ads")])],1)]),t._v(" "),e("section",{staticClass:"inner-content category-listing"},[t._m(1),t._v(" "),e("div",{staticClass:"listing"},t._l(t.getCategories,(function(t,s){return e("category-card",{key:s,attrs:{category:t}})})),1),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("router-link",{staticClass:"btn btn-primary my-10",attrs:{to:{name:"categories"}}},[t._v(" View more categories")])],1)])],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",[t._v(" Popular Trending "),e("span",[t._v("Ads")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",[t._v(" Top Categories by "),e("span",[t._v("Ads")])])}],!1,null,null,null).exports}}]);