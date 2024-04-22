const moduleMutations = {
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
    setModuleData(state, payload){
        state.module.data = payload
    },
    setModuleLoading(state, payload){
        state.module.loading = payload
    },
    setModuleSuccess(state, payload){
        state.module.success = payload
    },
    setDelete(state, payload){
        state.delete = payload
    }
}

export default moduleMutations