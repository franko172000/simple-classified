import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'
import {getAllCategories} from '../../services/requests/public'


Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    categories: [],
    progress: false,
  },
  mutations: {
    SET_STATE(state, payload) {
      Object.assign(state, {
        ...payload,
      })
    },
  },
  actions: {
    loadCategories({commit}){
        if(!store.get('categories')){
            commit('SET_STATE', {
                progress: true,
              })
            getAllCategories()
            .then(res=>{
                store.set('categories',res.data.data);

                commit('SET_STATE', {
                    categories: res.data.data,
                })
            
                commit('SET_STATE', {
                    progress: false,
                })
            }).catch(err=>{
                commit('SET_STATE', {
                    progress: false,
                })
            })
        }
    },
  
    loadMisc({ commit, rootState }) {
        if(store.get('categories')){
          commit('SET_STATE', {
            categories: store.get('categories'),
          });
        }
        
      },
  },
  getters: {
    misc: state => state,
  },
}
