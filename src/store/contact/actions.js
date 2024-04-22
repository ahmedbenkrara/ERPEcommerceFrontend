import axios from 'axios'

const contactActions = {
    async sendMail({commit}, payload){
        try{
            commit('setLoading', true)
            await axios.post(`${process.env.VUE_APP_BASE_URL}/contact`, payload, {
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
    }
}

export default contactActions