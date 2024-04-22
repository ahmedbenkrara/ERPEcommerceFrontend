import axios from 'axios'

const orderActions = {
    async addOrder({ rootGetters, commit }, payload){
        const token = rootGetters['authModule/getToken']
        try{
            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/orders`, payload.order,{
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            let order_id = response.data.data.id
            for(let i = 0; i < payload.items.length; i++){
                let data = {
                    order_id: order_id,
                    quantity: payload.items[i].quantity,
                    type: payload.items[i].type,
                }

                if (data.type.toLowerCase() == 'module') {
                    data.modele_id = payload.items[i].module.id
                } else {
                    data.package_id = payload.items[i].package.id
                }
                await axios.post(`${process.env.VUE_APP_BASE_URL}/orderitems`, data,{
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${token}`,
                    }
                })
            }
            const cart = rootGetters['cartModule/getData']
            await axios.delete(`${process.env.VUE_APP_BASE_URL}/itemsbycart/${cart[0].id}`,{
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            const user = rootGetters['authModule/getUser']
            const orderData = {
                fname : user.fname,
                lname : user.lname,
                email : user.email,
                items : payload.items
            }

            await axios.post(`${process.env.VUE_APP_BASE_URL}/ordermail`, orderData,{
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })

            commit('cartModule/setData', null, { root: true })
            commit('setSuccess', true)
        }catch(err){
            commit('setSuccess', false)
        }
    },
    async readOrders({rootGetters, commit }){
        try{
            const token = rootGetters['authModule/getToken']
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/orders`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            commit('setData', response.data.data)
            commit('setLoading', true)
        }catch(err){
            commit('setLoading', false)
        }
    },
    async orderById({ rootGetters, commit },payload){
        try{
            const token = rootGetters['authModule/getToken']
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/orders/${payload}`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`,
                }
            })

            commit('setOrder', response.data.data)
        }catch(err){
            commit('setOrder', null)
        }
    }
}

export default orderActions