import cartGetters from './getters'
import cartMutations from './mutations'
import cartActions from './actions'

const cartModule = {
    namespaced : true,
    state : {
        data : null,
        local : [],
        error : '',
        success : false,
        loading : ''
    },
    getters : cartGetters,
    mutations : cartMutations,
    actions : cartActions
}

export default cartModule