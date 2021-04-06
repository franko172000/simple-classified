import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'
import {uploadPhoto, deleteTempPhoto} from '../../services/requests/user'


Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    listingPhotos: [],
    deletegProgress: false,
    uploadImgProgress: false
  },
  mutations: {
    SET_STATE(state, payload) {
      Object.assign(state, {
        ...payload,
      })
    },
  },
  actions: {
    processPhoto({commit},{ payload }){
        commit('SET_STATE', {
            uploadImgProgress: true,
          })

        uploadPhoto(payload)
        .then(res=>{
            Vue.prototype.$notification.success({
                message: 'Photo updated successfully'
            })

            let tempPhotos = !store.get('temp_photos') ? [] : store.get('temp_photos');

            tempPhotos.push(res.data.data);
            store.set('temp_photos',tempPhotos);

            commit('SET_STATE', {
                listingPhotos: tempPhotos,
            })
            
            commit('SET_STATE', {
                uploadImgProgress: false,
            })
        }).catch(err=>{
            commit('SET_STATE', {
                uploadImgProgress: false,
            })
        })
    },
    deletePhoto({commit},{ payload }){
        commit('SET_STATE', {
            deletegProgress: true,
          })
          
        deleteTempPhoto(payload.id)
        .then(res=>{
            Vue.prototype.$notification.success({
                message: 'Photo deleted successfully'
            })

            let tempPhotos = !store.get('temp_photos') ? [] : store.get('temp_photos');

            tempPhotos.map((val, key)=>{
                if(val.id === payload.id ){
                  tempPhotos.splice(key,1);
                }
            })

            store.set('temp_photos',tempPhotos);

            commit('SET_STATE', {
                listingPhotos: tempPhotos,
            })
            
            commit('SET_STATE', {
                deletegProgress: false,
            })
        }).catch(err=>{
            commit('SET_STATE', {
                deletegProgress: false,
            })
        })
    },
    loadTempImages({ commit, rootState }) {
        if(store.get('temp_photos')){
          commit('SET_STATE', {
            listingPhotos: store.get('temp_photos'),
          });
        }
        
      },
    removeTempImages({ commit, rootState }) {
        if(store.get('temp_photos')){

          store.remove('temp_photos'),

          commit('SET_STATE', {
            listingPhotos: [],
          });
        }
      },
  },
  getters: {
    tmp_photos: state => state,
  },
}
