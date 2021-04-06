<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['tmpPhotos']),
    ...mapState(['misc']),
    ...mapState('user', ['authorized']),
    nextRoute() {
      return this.$route.query.redirect || '/'
    },
    currentRoute() {
      return this.$route.path
    },
  },
   mounted() {
     
    this.$store.dispatch('user/load_current_account')
    this.$store.dispatch('tmpPhotos/loadTempImages')
    this.$store.dispatch('misc/loadMisc')
  },
  watch: {
    // authorized(authorized) {
    //   if (authorized && this.currentRoute === '/auth/login') {
    //     this.$router.replace(this.nextRoute)
    //   }
    // },
  },
}
</script>
