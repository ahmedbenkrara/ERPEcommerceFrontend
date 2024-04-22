import store from '@/store'
const user = async () => {
    //check if token is valid
    await store.dispatch('authModule/userRoleByToken')
    const user = store.getters['authModule/getUser']
    if(user != null){
        //auth
        if(user.role.toLowerCase() != 'user'){
            return '/'
        }
    }else{
        return '/'
    }
}

export default user