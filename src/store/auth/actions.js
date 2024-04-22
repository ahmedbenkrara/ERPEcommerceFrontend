import axios from 'axios'

const authActions = {
    async login({commit}, payload){
        try{
            commit('setLoading', true)
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/login`, payload, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })
            commit('setToken', response.data.data.token)
            commit('setLoading', false)
            commit('setError', false)
            commit('setMessage', '')
        }catch(err){
            commit('setLoading', false)
            commit('setError', true)
            if(err.response.status == 401){
                //email or password wrong
                commit('setMessage', 'Invalid email or password !')
            }else{
                commit('setMessage', 'Something went wrong please try again later.')
            }
        }
    },
    tokenFromLocalStorage({commit, dispatch}){
        const token = window.localStorage.getItem('token')
        if(token){
            commit('SET_TOKEN', token)
            dispatch('userRoleByToken')
        }
    },
    async userRoleByToken({getters, commit}){
        try{
            const res = await axios.get(`${process.env.VUE_APP_BASE_URL}/user`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${getters.getToken}`,
                }
            })
            commit('setIsTokenValid', true)
            commit('setUser', res.data.data)
        }catch(err){
            commit('setIsTokenValid', false)
            commit('clearToken')
        }
    },
    async register({commit}, payload){
        try{
            commit('setRegisterErrors',{errors : {}, loading : true})
            await axios.post(`${process.env.VUE_APP_BASE_URL}/register`, payload, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })

            commit('setRegisterErrors',{errors : {}, loading : false})
            commit('setRegisterSuccess',true)
        }catch(err){
            let keys = [
                'fname', 'lname', 'email', 'password'
            ]
            let errors = {}
            keys.forEach((key) => {
                if(err.response.data.data[key]){
                    errors[key] = err.response.data.data[key][0]
                }
            })
            let registerErrors = {
                errors,
                loading : false
            }
            commit('setRegisterErrors', registerErrors)
            commit('setRegisterSuccess', false)
        }
    },
    async updateUser({ dispatch, getters, commit }, payload){
        try{
            await axios.patch(`${process.env.VUE_APP_BASE_URL}/user/${payload.id}`, { fname : payload.fname, lname : payload.lname, email : payload.email }, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${getters.getToken}`,
                }
            })
            
            try{
                await axios.post(`${process.env.VUE_APP_BASE_URL}/clientdetails/${payload.id}`, { phone : payload.phone, address : payload.address, _method : 'PATCH' }, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${getters.getToken}`,
                    }
                })
            }catch(err){
                console.log(err)
            }
            dispatch('userRoleByToken')
            commit('setUpdate', true)
        }catch(err){
            commit('setUpdate', false)
        }
    },
    async updatePassword({ commit, getters } ,payload){
        try{
            await axios.patch(`${process.env.VUE_APP_BASE_URL}/password/${getters.getUser.id}`, { current : payload.current, newpassword : payload.newpassword}, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${getters.getToken}`,
                }
            })

            commit('setPassword', true)
        }catch(err){
            commit('setPassword', false)
        }
    },
    async logout({ getters, commit }){
        try{
            await axios.post(`${process.env.VUE_APP_BASE_URL}/logout`,{},{
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${getters.getToken}`,
                }
            })
            commit('clearToken')
            window.location.reload()
        }catch(err){
            console.log('error logout')
        }
    }
}

export default authActions