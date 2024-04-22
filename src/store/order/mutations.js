const orderMutations = {
    setSuccess(state, payload){
        state.success = payload
    },
    setLoading(state, payload){
        state.loading = payload
    },
    setData(state, payload){
        state.data = payload
    },
    setOrder(state, payload){
        state.order = payload
    }
}

export default orderMutations