import axios from 'axios'

const cartActions = {
    readLocal({commit}){
        let local = localStorage.getItem('cart')
        if(local == null){
            commit('setLocal', [])
        }else{
            const data = JSON.parse(local)
            commit('setLocal', data)
        }
    },
    async addLocal({commit, getters, state, rootGetters}, payload){
        const token = rootGetters['authModule/getToken']
        if(token == null){          
            let index = getters.getLocal.findIndex(item => item.id == payload.id && item.type == payload.type)
            if(index == -1){
                payload.quantity = 1
                commit('pushLocal', payload)
                let data = JSON.stringify(getters.getLocal)
                localStorage.setItem('cart', data)
            }else{
                state.local[index].quantity++
                localStorage.setItem('cart', JSON.stringify(getters.getLocal))
            }
        }else{
            const user = await axios.get(`${process.env.VUE_APP_BASE_URL}/user`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })

            let send = {}
            if(payload.type.toLowerCase() == 'module'){
                send = {cart_id : getters.getData.filter(item => item.user_id == user.data.data.id)[0].id, quantity : 1, type : payload.type, modele_id : payload.id}
            }else{
                send = {cart_id : getters.getData.filter(item => item.user_id == user.data.data.id)[0].id, quantity : 1, type : payload.type, package_id : payload.id}
            }

            await axios.post(`${process.env.VUE_APP_BASE_URL}/cartitems`, send,{
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            let response = await axios.get(`${process.env.VUE_APP_BASE_URL}/cart`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            commit('setData', response.data.data.filter(item => item.user_id == user.data.data.id))
        }
    },
    deleteLocal({commit, getters}, index){
        let local = getters.getLocal
        local.splice(index, 1)
        if(local.length == 0){
            localStorage.removeItem('cart')
        }else{
            commit('setLocal', local)
            localStorage.setItem('cart', JSON.stringify(local))
        }
    },
    plusLocal({getters, state}, payload){
        let index = getters.getLocal.findIndex(item => item.id == payload.id && item.type == payload.type)
        state.local[index].quantity++
        localStorage.setItem('cart', JSON.stringify(getters.getLocal))
    },
    minusLocal({getters, state, dispatch}, payload){
        let index = getters.getLocal.findIndex(item => item.id == payload.id && item.type == payload.type)
        if(state.local[index].quantity == 1){
            dispatch('deleteLocal', index)
        }else{
            state.local[index].quantity--
            localStorage.setItem('cart', JSON.stringify(getters.getLocal))
        }
    },
    async readData({rootGetters, commit, getters, dispatch}){
        commit('setLoading', true)
        const token = rootGetters['authModule/getToken']
        if(token != null){
            try{
                let response = await axios.get(`${process.env.VUE_APP_BASE_URL}/cart`, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${token}`,
                    }
                })

                const user = await axios.get(`${process.env.VUE_APP_BASE_URL}/user`, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${token}`,
                    }
                })

                if(response.data.data.filter(item => item.user_id == user.data.data.id).length == 0){
                    const newcart = await axios.post(`${process.env.VUE_APP_BASE_URL}/cart`, { user_id : user.data.data.id }, {
                        headers : {
                            'Accept': 'application/vnd.api+json',
                            'Content-Type': 'application/vnd.api+json',
                            'Authorization': `Bearer ${token}`,
                        }
                    })

                    response.data.data.push(newcart)
                }

                commit('setData', response.data.data.filter(item => item.user_id == user.data.data.id))
                commit('setSuccess', true)
                let data = [...response.data.data.filter(item => item.user_id == user.data.data.id)]
                const local = getters.getLocal
                response.data.data.filter(item => item.user_id == user.data.data.id).forEach((item, index) => {
                    let cartItem = null
                    let dataIndex = index
                    item.items.forEach(async (item, index) => {
                        if(item.type.toLowerCase() == 'module'){
                            cartItem = local.find(x => x.type == item.type && item.modele_id == x.id)
                        }else{
                            cartItem = local.find(x => x.type == item.type && item.package_id == x.id)
                        }

                        if(cartItem != null && cartItem != undefined){
                            //found and should be modified
                            await axios.patch(`${process.env.VUE_APP_BASE_URL}/cartitems/${item.id}`, {quantity : cartItem.quantity} ,{
                                headers : {
                                    'Accept': 'application/vnd.api+json',
                                    'Content-Type': 'application/vnd.api+json',
                                    'Authorization': `Bearer ${token}`,
                                }
                            })
                            
                            data[dataIndex].items[index].quantity = cartItem.quantity
                            dispatch('deleteLocal', getters.getLocal.findIndex(x => x.id == cartItem.id && x.type == cartItem.type))
                            commit('setData', data)
                            commit('setSuccess', true)
                        }
                    })
                })

                if(response.data.data.filter(item => item.user_id == user.data.data.id).length > 0){
                    let data = [...response.data.data.filter(item => item.user_id == user.data.data.id)]
                    let id = data[0].id
                    local.forEach(async (item, index) => {
                        let payload = {}
                        if(item.type.toLowerCase() == 'module'){
                            payload = {cart_id : id ,quantity : item.quantity, type : item.type, modele_id : item.id}
                        }else{
                            payload = {cart_id : id, quantity : item.quantity, type : item.type, package_id : item.id}
                        }
                        await axios.post(`${process.env.VUE_APP_BASE_URL}/cartitems`, payload,{
                            headers : {
                                'Accept': 'application/vnd.api+json',
                                'Content-Type': 'application/vnd.api+json',
                                'Authorization': `Bearer ${token}`,
                            }
                        })
                        //data[0].items.push(res.data.data)
                        const x = await axios.get(`${process.env.VUE_APP_BASE_URL}/cart`, {
                            headers : {
                                'Accept': 'application/vnd.api+json',
                                'Content-Type': 'application/vnd.api+json',
                                'Authorization': `Bearer ${token}`,
                            }
                        })
                        commit('setData', x.data.data)
                        dispatch('deleteLocal', index)
                    })
                }
                commit('setLocal',[])
                commit('setLoading', false)
            }catch(err){
                commit('setLoading', false)
                commit('setSuccess', false)
            }
        }
    },
    async plus({ commit,rootGetters }, payload){
        const token = rootGetters['authModule/getToken']
        const user = await axios.get(`${process.env.VUE_APP_BASE_URL}/user`, {
            headers : {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': `Bearer ${token}`,
            }
        })
        if(payload.quantity > 0){
            await axios.patch(`${process.env.VUE_APP_BASE_URL}/cartitems/${payload.id}`, { quantity : payload.quantity }, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })
        }else{
            await axios.delete(`${process.env.VUE_APP_BASE_URL}/cartitems/${payload.id}`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })
        }

        let response = await axios.get(`${process.env.VUE_APP_BASE_URL}/cart`, {
            headers : {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': `Bearer ${token}`,
            }
        })
        commit('setData', response.data.data.filter(item => item.user_id == user.data.data.id))
    }
}

export default cartActions