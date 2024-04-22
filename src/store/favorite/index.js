import favoriteGetters from './getters'
import favoriteMutations from './mutations'
import favoriteActions from './actions'

const favoriteModule = {
    namespaced : true,
    state : {
        success : ''
    },
    getters: favoriteGetters,
    mutations: favoriteMutations,
    actions: favoriteActions
}

export default favoriteModule