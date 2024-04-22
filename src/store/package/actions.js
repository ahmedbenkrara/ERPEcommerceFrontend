import axios from 'axios'

const packageActions = {
    async getPackages({commit}){
        try{
            commit('setLoading', true)
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/packages`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })

            commit('setData', response.data.data)
            commit('setLoading', false)
            commit('setError', '')
            commit('setSuccess', true)
        }catch(err){
            commit('setLoading', false)
            commit('setSuccess', false)
            //status test
            if(err.response){
                if(err.response.status == 500){
                    commit('setError', 'Oops it seems there is a problem with connection !')
                    return
                }else if(err.response.status == 401){
                    commit('setError', 'UnAuthorized !')
                    return
                }
            }
            commit('setError', 'Something went wrong please try again later !')
        }
    },
    async getPackage({ commit }, payload){
        try{
            commit('setLoading', true)
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/packages/${payload}`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    // 'Authorization': `Bearer ${accessToken}`,
                }
            })

            commit('setPackageData', response.data.data)
            commit('setPackageLoading', false)
            commit('setPackageSuccess', true)
        }catch(err){
            commit('setPackageLoading', false)
            commit('setPackageSuccess', false)
        }
    },
    async postPackage({ rootGetters, commit }, payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            await axios.post(`${process.env.VUE_APP_BASE_URL}/packages`, payload, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            commit('setSuccess', true)
        }catch(err){
            commit('setSuccess', false)
        }
    },
    async editPackage({ rootGetters, commit }, payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            await axios.patch(`${process.env.VUE_APP_BASE_URL}/packages/${payload.id}`, payload.data, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            commit('setSuccess', true)
        }catch(err){
            commit('setSuccess', false)
        }
    },
    async deletePackage({state, commit, rootGetters}, payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            await axios.delete(`${process.env.VUE_APP_BASE_URL}/packages/${payload}`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })

            let index = state.data.findIndex(item => item.id == payload)
            if(index >= 0){
                state.data.splice(index, 1)
            }
            commit('setDelete', true)
        }catch(err){
            commit('setDelete', false)
        }
    }
}

export default packageActions