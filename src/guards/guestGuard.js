import store from '@/store'
const guest = async () => {
    //check if token is valid
    await store.dispatch('authModule/userRoleByToken')
    if(store.getters['authModule/getIsTokenValid']){
        //auth
        await store.dispatch('authModule/userRoleByToken')
        const user = store.getters['authModule/getUser']
        if(user != null){
            if(user.role.toLowerCase() == 'user'){
                return '/'
            }else if(user.role.toLowerCase() == 'admin'){
                return '/admin'
            }
        }
        return '/'
    }
}

export default guest