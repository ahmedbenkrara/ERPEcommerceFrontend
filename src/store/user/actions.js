import axios from 'axios'

const userActions = {
    async readUsers({ rootGetters, commit }){
        try{
            const accessToken = rootGetters['authModule/getToken']
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/allusers`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })

            commit('setUsers', response.data.data)
            commit('setSuccess', true)
        }catch(err){
            commit('setSuccess', false)
        }
    },
    async createUser({ rootGetters ,commit, dispatch }, payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            await axios.post(`${process.env.VUE_APP_BASE_URL}/register`, payload, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })

            dispatch('readUsers')
            commit('setUserSuccess', true)
        }catch(err){
            commit('setUserSuccess', false)
        }
    },
    async userById({ rootGetters ,commit } ,payload){
        const accessToken = rootGetters['authModule/getToken']
        try{
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/user/${payload}`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            commit('setUser', response.data.data)
            commit('setUserSuccess', true)
        }catch(err){
            console.log(err)
            commit('setUserSuccess', false)
        }
    },
    async editUser({ rootGetters, commit }, payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            await axios.patch(`${process.env.VUE_APP_BASE_URL}/user/${payload.id}`, payload.data, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            commit('setUserSuccess', true)
        }catch(err){
            commit('setUserSuccess', false)
        }
    },
    async countUsers({ rootGetters, commit }){
        try{
            const accessToken = rootGetters['authModule/getToken']
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/users/count`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            commit('setUserCount', response.data.data)
            commit('setUserCountSuccess', true)
        }catch(err){
            commit('setUserCountSuccess', false)
        }
    }
}

export default userActions