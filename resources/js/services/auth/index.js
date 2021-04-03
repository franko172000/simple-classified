import apiClient from '../axios'
import store from 'store'
const resources  = '/auth/';

export async function createUser(data) {
    return apiClient
        .post(resources+'register', data)
        .then(response => {
        if (response) {
            return response.data
        }
        return false
        })
        .catch(err => {})
    }

export async function login(email, password) {
    return new Promise((resolve,reject)=>{
        apiClient
        .post(resources+'login', {
        email,
        password,
        })
        .then(response => {
        //     console.log(response)
        if (response) {
            const { access_token } = response.data
            if (access_token) {
                store.set('accessToken', access_token)
            }
            resolve(response.data.data)
        }
        
        }).catch(err=>{
            reject(err.response.data.message)
        })
    })
}

export async function logout() {
    return await apiClient.post(resources+'logout')
}