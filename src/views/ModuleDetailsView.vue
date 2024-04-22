<template>
    <div>
        <DetailsHeader :title="title"/>
        <ModuleDetails/>
        <SuggestModules/>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import ModuleDetails from '@/components/client/ModuleDetails.vue'
import DetailsHeader from '@/components/client/DetailsHeader.vue'
import SuggestModules from '@/components/client/SuggestModules.vue'

export default {
    name : 'ModuleDetailsView',
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
        ModuleDetails, DetailsHeader, SuggestModules
    }
}
</script>

<style scoped>

</style>