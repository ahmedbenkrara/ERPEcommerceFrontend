const orderGetters = {
    getSuccess(state){
        return state.success
    },
    getLoading(state){
        return state.loading
    },
    getData(state){
        return state.data
    },
    getOrder(state){
        return state.order
    }
}

export default orderGetters