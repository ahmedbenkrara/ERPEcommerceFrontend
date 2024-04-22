const userMutations = {
    setUsers(state, payload){
        state.data = payload 
    },
    setUser(state, payload){
        state.user.data = payload 
    },
    setUserSuccess(state, payload){
        state.user.success = payload 
    },
    setSuccess(state, payload){
        state.success = payload 
    },
    setUserCountSuccess(state, payload){
        state.countSuccess = payload
    },
    setUserCount(state, payload){
        state.count = payload
    }
}

export default userMutations