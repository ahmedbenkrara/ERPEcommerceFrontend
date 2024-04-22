const userGetters = {
    getUsers(state){
        return state.data
    },
    getUser(state){
        return state.user.data
    },
    getUserSuccess(state){
        return state.user.success
    },
    getSuccess(state){
        return state.success
    },
    getUserCountSuccess(state){
        return state.countSuccess
    },
    getUserCount(state){
        return state.count
    }
}

export default userGetters