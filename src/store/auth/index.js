import authGetters from './getters'
import authMutations from './mutations'
import authActions from './actions'

const authModule = {
    namespaced : true,
    state: {
        login : {
            token : null,
            loading : false,
            error : false,
            message : null
        },
        isTokenValid : false,
        registerErrors : {
            errors : {},
            loading : false,
            success : null
        },
        user : null,
        password : '',
        update : null
    },
    getters: authGetters,
    mutations: authMutations,
    actions: authActions
}

export default authModule