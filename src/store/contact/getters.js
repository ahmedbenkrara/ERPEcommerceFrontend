const contactGetters = {
    getLoading(state){
        return state.loading
    },
    getError(state){
        return state.error
    },
    getSuccess(state){
        return state.success
    }
}

export default contactGetters