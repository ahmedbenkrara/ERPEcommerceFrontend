import store from '@/store'
const checkout = async () => {
    //check if token is valid
    await store.dispatch('authModule/userRoleByToken')
    const user = store.getters['authModule/getUser']
    if(user != null){
        //auth
        if(user.role.toLowerCase() != 'user'){
            return '/'
        }
        await store.dispatch('cartModule/readData')
        // let test = store.getters['cartModule/getLoading']
        // while(test == '' || test == true){
        //     test = store.getters['cartModule/getLoading']
        // }

        if(store.getters['cartModule/getData'] == null){
            return '/'
        }else{
            if(store.getters['cartModule/getData'][0].items.length == 0){
                return '/'
            }
        }
    }else{
        return '/login'
    }
}

export default checkout