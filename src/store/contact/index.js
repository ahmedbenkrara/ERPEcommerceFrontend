import contactGetters from './getters'
import contactMutations from './mutations'
import contactActions from './actions'

const contactModule = {
    namespaced : true,
    state : {
        form : {
            fullname : '',
            subject : '',
            email : '',
            message : ''
        },
        loading : false,
        error : '',
        success : false
    },
    getters: contactGetters,
    mutations: contactMutations,
    actions: contactActions
}

export default contactModule