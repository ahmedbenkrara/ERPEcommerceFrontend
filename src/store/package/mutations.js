const packageMutations = {
    setData(state, payload){
        state.data = payload
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
    setPackageData(state, payload){
        state.package.data = payload
    },
    setPackageLoading(state, payload){
        state.package.loading = payload
    },
    setPackageSuccess(state, payload){
        state.package.success = payload
    },
    setDelete(state, payload){
        state.delete = payload
    }
}

export default packageMutations