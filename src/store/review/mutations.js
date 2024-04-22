const reviewMutations = {
    setForm(state, payload){
        state.form = payload
    },
    setLoading(state, payload){
        state.loading = payload
    },
    setError(state, payload){
        state.error = payload
    },
    setSuccess(state, payload){
        state.success = payload
    },
    setCountSuccess(state, payload){
        state.countSuccess = payload
    },
    setCount(state, payload){
        state.count = payload
    }
}

export default reviewMutations