import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import tmpPhotos from './tmp_photo'
import misc from './misc'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    tmpPhotos,
    misc
  },
  state: {},
  mutations: {},
  actions: {},
})
