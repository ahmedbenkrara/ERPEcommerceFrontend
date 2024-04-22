import store from '@/store'
const packageGuard = async (to) => {
    console.log('here')
    await store.dispatch('packageModule/getPackage', to.params.id)
    const pack = store.getters['packageModule/getPackageData']
    if(pack == null){
        return '/admin'
    }
}

export default packageGuard