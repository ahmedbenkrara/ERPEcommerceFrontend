<template>
    <div>
        <AboutHeader/>
        <AboutBody/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutHeader from '@/components/client/AboutHeader.vue'
import AboutBody from '@/components/client/AboutBody.vue'

export default {
    name : 'AboutView', 
    mounted() {
        AOS.init({
            once : true
        })

        useHead({
            title: `About Us | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
    components: {
        AboutHeader, AboutBody
    }
}
</script>