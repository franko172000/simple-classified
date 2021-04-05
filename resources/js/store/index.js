import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import tmpPhotos from './tmp_photo' 

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    tmpPhotos
  },
  state: {},
  mutations: {},
  actions: {},
})
