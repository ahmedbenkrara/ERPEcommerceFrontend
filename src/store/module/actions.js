import axios from 'axios'

const moduleActions = {
    async getModules({commit}){
        try{
            commit('setLoading', true)
            // const accessToken = rootGetters['authModule/getToken']
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/modules`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    // 'Authorization': `Bearer ${accessToken}`,
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
    async getModule({ commit }, payload){
        try{
            commit('setLoading', true)
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/modules/${payload}`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    // 'Authorization': `Bearer ${accessToken}`,
                }
            })

            commit('setModuleData', response.data.data)
            commit('setModuleLoading', false)
            commit('setModuleSuccess', true)
        }catch(err){
            commit('setModuleLoading', false)
            commit('setModuleSuccess', false)
        }
    },
    async postModule({ commit, rootGetters  }, payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/modules`, payload.module, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            
            const module_id = response.data.data.id
            for(let i=0; i<payload.images.length; i++){
                let form = new FormData()
                form.append('url', payload.images[i])
                form.append('isposter', 0)
                form.append('modele_id', module_id)
                // console.log(form.get('url'))
                
                const res = await axios.post(`${process.env.VUE_APP_BASE_URL}/moduleimage`, form, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
                console.log(res)
            }

            commit('setSuccess', true)
        }catch(err){
            commit('setSuccess', false)
        }
    },
    async editModule({ commit, rootGetters  }, payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            await axios.patch(`${process.env.VUE_APP_BASE_URL}/modules/${payload.id}`, payload.module, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
            
            let form = new FormData()
            for(let i=0; i<payload.images.length; i++){

                form = new FormData()
                form.append('url', payload.images[i])
                form.append('isposter', 0)
                form.append('modele_id', payload.id)
                
                await axios.post(`${process.env.VUE_APP_BASE_URL}/moduleimage`, form, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
            }

            for(let i=0; i<payload.deleted.length; i++){                
                await axios.delete(`${process.env.VUE_APP_BASE_URL}/moduleimage/${payload.deleted[i]}`, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
            }

            commit('setSuccess', true)
        }catch(err){
            commit('setSuccess', false)
        }
    },
    async deleteModule({state, commit,rootGetters},payload){
        try{
            const accessToken = rootGetters['authModule/getToken']
            await axios.delete(`${process.env.VUE_APP_BASE_URL}/modules/${payload}`, {
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

export default moduleActions