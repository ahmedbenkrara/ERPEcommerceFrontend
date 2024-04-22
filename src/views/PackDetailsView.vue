<template>
    <div>
        <PackDetailsHeader :title="title"/>
        <PackDetails/>
        <SuggestPacks/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import PackDetails from '@/components/client/PackDetails.vue'
import PackDetailsHeader from '@/components/client/PackDetailsHeader.vue'
import SuggestPacks from '@/components/client/SuggestPacks.vue'

export default {
    name : 'PackDetailsView',
    data(){
        return{
            title : ''
        }
    },
    mounted(){
        this.title = this.$route.params.slug.split('-').join(' ')
        useHead({
            title: `${this.title} | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
    components: {
        PackDetails, PackDetailsHeader, SuggestPacks
    }
}
</script>

<style scoped>

</style>