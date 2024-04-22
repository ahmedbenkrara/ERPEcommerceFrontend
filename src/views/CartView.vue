<template>
    <div>
        <CartHeader/>
        <CartBody/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import CartHeader from '@/components/client/CartHeader.vue';
import CartBody from '@/components/client/CartBody.vue';

export default {
    name : 'CartView',
    mounted(){
        useHead({
            title: `Cart | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
    components: {
        CartHeader, CartBody
    }
}

</script>

<style scoped>

</style>