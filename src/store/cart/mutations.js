const cartMutations = {
    setData(state, payload){
        state.data = payload
    },
    setError(state, payload){
        state.error = payload
    },
    setSuccess(state, payload){
        state.success = payload
    },
    setLocal(state, payload){
        state.local = [...payload]
    },
    pushLocal(state, payload){
        state.local.push(payload)
    },
    setLoading(state, payload){
        state.loading = payload
    }
}

export default cartMutations