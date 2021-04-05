import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router'
import store from 'store'
import {createUser, login, logout} from '../../services/auth'


Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    name: '',
    userPhoto: '',
    userEmail: '',
    authorized: false, // false is default value
    loading: false,
    id:''
  },
  mutations: {
    SET_STATE(state, payload) {
      Object.assign(state, {
        ...payload,
      })
    },
  },
  actions: {
    updatePhoto({commit},photo){
      const user = store.get('user')
      user.userPhoto = photo;
      store.set('user',user);
      commit('SET_STATE', {
        userPhoto: photo,
      })
    },
    updateName({commit},name){
      const user = store.get('user')
      user.name = name;
      store.set('user',user);
      commit('SET_STATE', {
        name,
      })
    },
    loginUser({ commit, dispatch, rootState }, { payload }) {
      const { email, password } = payload
      commit('SET_STATE', {
        loading: true,
      })

      login(email, password).then(res => {
        
          Vue.prototype.$notification.success({
            message: 'You have successfully logged in'
          })

          //let data = res.data;
          let user = res;
          
          user['id'] = user.id;
          
          commit('SET_STATE', {
            ...user,
            authorized: true,
          })

          store.set('user', user);
          
          //redirect to homepage
          router.push('/');
       
      }).catch(err=>{
          commit('SET_STATE', {
            loading: false,
          })
      })
    },
    register({ commit, dispatch, rootState }, { payload }) {
      //const { email, password, name } = payload
      commit('SET_STATE', {
        loading: true,
      })

      createUser(payload).then(success => {
        if (success) {
          Vue.prototype.$notification.success({
            message: 'You have successfully registered, you can now login.'
          })
          commit('SET_STATE', {
            loading: false,
          })
          router.push('/auth/login')
        }
        if (!success) {
          commit('SET_STATE', {
            loading: false,
          })
        }
      })
    },
    load_current_account({ commit, rootState }) {
      if(store.get('accessToken')){
        commit('SET_STATE', {
          loading: true,
        })
        
        let user = store.get('user');

        commit('SET_STATE', {
          ...user,
          authorized: true,
        })

        commit('SET_STATE', {
          loading: false,
        })
      }
      
    },
    logout({ commit, rootState }) {
      logout().then(() => {
        store.remove('user');
        store.remove('accessToken')
        if(store.get('temp_photos')){
          store.remove('temp_photos')         
        }
        commit('SET_STATE', {
          name: '',
          userType: '',
          userPhoto: '',
          userEmail: '',
          authorized: false,
          loading: false,
        })
        router.push('/')
      })
    },
  },
  getters: {
    user: state => state,
  },
}
