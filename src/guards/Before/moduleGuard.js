import store from '@/store'
const moduleGuard = async (to) => {
    await store.dispatch('moduleModule/getModule', to.params.id)
    const module = store.getters['moduleModule/getModuleData']
    if(module == null){
        return '/admin'
    }
}

export default moduleGuard