const packageGetters = {
    getData(state){
        return state.data
    },
    getLoading(state){
        return state.loading
    },
    getError(state){
        return state.error
    },
    getSuccess(state){
        return state.success
    },
    getPackageData(state){
        return state.package.data 
    },
    getPackageLoading(state){
        return state.package.loading 
    },
    getPackageSuccess(state){
        return state.package.success 
    },
    getDelete(state){
        return state.delete
    }
}

export default packageGetters