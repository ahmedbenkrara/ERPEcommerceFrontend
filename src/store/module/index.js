import moduleGetters from './getters'
import moduleMutations from './mutations'
import moduleActions from './actions'

const moduleModule = {
    namespaced : true,
    state : {
        data : null,
        loading : false,
        error : '',
        success : '',
        module : {
            data : null,
            loading : false,
            success : ''
        },
        delete : ''
    },
    getters: moduleGetters,
    mutations: moduleMutations,
    actions: moduleActions
}

export default moduleModule