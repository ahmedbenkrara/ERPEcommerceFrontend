import axios from 'axios'

const favoriteActions = {
    async addFavorite({ rootGetters, dispatch, commit }, payload){
        const user = rootGetters['authModule/getUser']
        const accessToken = rootGetters['authModule/getToken']
        if(user != null){
            try{
                await axios.post(`${process.env.VUE_APP_BASE_URL}/favorite`, payload, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
                //dispatch('authModule/userRoleByToken')
                dispatch('authModule/userRoleByToken', null, { root: true })
                commit('setSuccess', true)
            }catch(err){
                commit('setSuccess', false)
            }
        }else{
            commit('setSuccess', false)
        }
    }
}

export default favoriteActions