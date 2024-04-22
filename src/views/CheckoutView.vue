<template>
    <div>
        <div class="w-full h-[1px] bg-gray-200"></div>
        <CheckoutBody/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import CheckoutBody from '@/components/client/CheckoutBody.vue';

export default {
    name : 'CheckoutView',    
    mounted(){
        useHead({
            title: `Checkout | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
    components: {
        CheckoutBody
    }
}
</script>

<style scoped>

</style>