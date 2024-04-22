import store from '@/store'
const admin = async () => {
    //check if token is valid
    await store.dispatch('authModule/userRoleByToken')
    const admin = store.getters['authModule/getUser']
    if(admin != null){
        //auth
        if(admin.role.toLowerCase() != 'admin'){
            return '/'
        }
    }else{
        return '/'
    }
}

export default admin