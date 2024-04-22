const reviewGetters = {
    getLoading(state){
        return state.loading
    },
    getError(state){
        return state.error
    },
    getSuccess(state){
        return state.success
    },
    getCountSuccess(state){
        return state.countSuccess
    },
    getCount(state){
        return state.count
    }
}

export default reviewGetters