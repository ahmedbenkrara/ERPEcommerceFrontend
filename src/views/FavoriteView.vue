<template>
    <div>
        <h3 class="font-inter text-[18px] font-[500] pb-2 border-b mb-8">Favorite Products</h3>
        <div v-if="getUser.favorites.length > 0" class="w-full grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-x-2">
            
            <div class="mt-4 overflow-hidden" v-for="item in getUser.favorites" :key="item.id">
                <router-link :to="`/${item.type.toLowerCase()}/${item.type.toLowerCase() == 'module' ? item.module.id : item.package.id}/${slug(item.type.toLowerCase() == 'module' ? item.module.name : item.package.name)}`">
                    <div class="relative h-fit w-fit test rounded-[10px] overflow-hidden">
                        <img class="filt sm:w-[160px] md:w-[200px] sm:h-[190px] md:h-[250px] object-cover" :src="item.type.toLowerCase() == 'module' ? item.module.images[0].url : item.package.modules[0].images[0].url" alt="">
                        <div v-if="item.type.toLowerCase() == 'module'" class="absolute w-fit h-fit cursor-pointer bg-white text-black font-varela m-auto bottom-[11px] left-0 right-0 font-regular rounded-md sm:text-[10px] md:text-sm sm:pl-[8px] sm:pr-[12px] md:pl-[10px] md:pr-[14px] py-[6px]">
                            {{ item.module.name.length <= 14 ? item.module.name : item.module.name.slice(0,11).concat("...") }} <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                        <div v-if="item.type.toLowerCase() == 'package'" class="absolute w-fit h-fit cursor-pointer bg-white text-black font-varela m-auto bottom-[11px] left-0 right-0 font-regular rounded-md sm:text-[10px] md:text-sm sm:pl-[8px] sm:pr-[12px] md:pl-[10px] md:pr-[14px] py-[6px]">
                            {{ item.package.name.length <= 14 ? item.package.name : item.package.name.slice(0,11).concat("...") }} <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </router-link>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { mapGetters } from 'vuex'
import slugify from 'slugify'

export default {
    name : 'FavoriteView',
    computed : {
        ...mapGetters('authModule',['getUser'])
    },
    methods : {
        slug(name){
            return slugify(name, {lower : true, replacement: '-'})
        }
    },
    mounted(){
        useHead({
            title: `Favorite | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
}
</script>

<style scoped>

</style>