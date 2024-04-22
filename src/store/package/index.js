import packageGetters from './getters'
import packageMutations from './mutations'
import packageActions from './actions'

const packageModule = {
    namespaced : true,
    state : {
        data : null,
        loading : false,
        error : '',
        success : '',
        package : {
            data : null,
            loading : false,
            success : ''
        },
        delete : ''
    },
    getters : packageGetters,
    mutations : packageMutations,
    actions : packageActions
}

export default packageModule