import store from '@/store'
const orderGuard = async (to) => {
    await store.dispatch('orderModule/orderById', to.params.id)
    const order = store.getters['orderModule/getOrder']
    if(order == null){
        return '/admin'
    }
}

export default orderGuard