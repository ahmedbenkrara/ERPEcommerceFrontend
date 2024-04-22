const contactMutations = {
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
    }
}

export default contactMutations