import userGetters from './getters'
import userMutations from './mutations'
import userActions from './actions'

const userModule = {
    namespaced : true,
    state : {
        data : null,
        success : '',
        user : {
            data : null,
            success : ''
        },
        delete : '',
        count : 0,
        countSuccess : null
    },
    getters : userGetters,
    mutations : userMutations,
    actions : userActions
}

export default userModule