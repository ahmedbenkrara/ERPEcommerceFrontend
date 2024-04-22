import store from '@/store'
const editUserGuard = async (to) => {
    await store.dispatch('userModule/userById', to.params.id)
    const user = store.getters['userModule/getUser']
    if(user == null){
        return '/admin'
    }
}

export default editUserGuard