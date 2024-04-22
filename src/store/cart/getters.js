const cartGetters = {
    getData(state){
        return state.data
    },
    getError(state){
        return state.error
    },
    getSuccess(state){
        return state.success
    },
    getLocal(state){
        return state.local
    },
    getLoading(state){
        return state.loading
    }
}

export default cartGetters