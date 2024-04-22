<template>
    <div>
        <ContactHeader/>
        <ContactForm/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import ContactHeader from '@/components/client/ContactHeader.vue'
import ContactForm from '@/components/client/ContactForm.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name : 'ContactView',
    mounted() {
        AOS.init({
            once : true
        })
        useHead({
        title: `Contact Us | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    },
    components: {
        ContactHeader, ContactForm
    }
}
</script>

<style scoped>
</style>