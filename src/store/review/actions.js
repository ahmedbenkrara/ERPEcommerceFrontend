import axios from 'axios'
const reviewActions = {
    async sendReview({commit}, payload){
        try{
            commit('setLoading', true)
            await axios.post(`${process.env.VUE_APP_BASE_URL}/reviews`, payload, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })
            commit('setError', '')
            commit('setSuccess', true)
            commit('setLoading', false)
        }catch(err){
            commit('setLoading', false)
            commit('setSuccess', false)
            commit('setError', 'something went wrong please try again later !')
        }
    },
    async countReviews({ commit }){
        try{
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/reviews/count`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })
            commit('setCount', response.data.data)
            commit('setCountSuccess', true)
        }catch(err){
            commit('setCountSuccess', false)
        }
    }
}

export default reviewActions