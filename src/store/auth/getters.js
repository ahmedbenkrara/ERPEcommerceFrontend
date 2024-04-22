const authGetters = {
    getToken(state){
        return state.login.token
    },
    getLoading(state){
        return state.login.loading
    },
    getError(state){
        return state.login.error 
    },
    getMessage(state){
        return state.login.message 
    },
    getIsTokenValid(state){
        return state.isTokenValid
    },
    getRegisterErrors(state){
        return state.registerErrors
    },
    getUser(state){
        return state.user
    },
    getPassword(state){
        return state.password
    },
    getUpdate(state){
        return state.update
    }
}

export default authGetters
