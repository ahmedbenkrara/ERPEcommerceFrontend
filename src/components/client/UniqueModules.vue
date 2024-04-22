<template>
    <div class="mt-[20px] px-4 py-8">
        <h1 class="font-inter font-semibold sm:text-[24px] sm:mb-3 md:text-[20px]">Currated Picks</h1>
        <div class="w-full md:px-8" v-if="ready">
            <swiper
                :slidesPerView="slidesPerView"
                :spaceBetween="5"
                :modules="modules"
                class="mySwiper"
            >

                <swiper-slide v-for="item in data" :key="item.id">
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt cursor-pointer sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" :src="item.relationships.images[0].url" alt="">
                            <div @click="addToCart(item.id)" class="absolute cursor-pointer top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <router-link :to="`/module/${item.id}/${slug(item.name)}`">
                                    <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400] cursor-pointer">
                                        {{ item.name.length <= 14 ? item.name : item.name.slice(0,11).concat("...") }}
                                    </p>
                                    <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">${{ item.price }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
            </swiper>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import { Pagination } from 'swiper'
    import AOS from 'aos'
    import 'aos/dist/aos.css'
    import { mapGetters, mapActions } from 'vuex'
    import slugify from 'slugify'

    export default {
        name : "UniqueModules",
        data(){
            return{
                modules: [Pagination],
                slidesPerView : 5,
                data : [],
                ready : false
            }
        },
        computed: {
            ...mapGetters('moduleModule', ['getData', 'getLoading', 'getError', 'getSuccess']),
            // ...mapGetters('cartModule', ['readLocal','addLocal'])
        },
        watch: {
            getSuccess(newValue){
                if(newValue){
                    this.data = [...this.getData]
                    this.top10(this.getData)
                }else{
                    console.log('error')
                }
            }
        },
        methods: {
            ...mapActions('moduleModule', ['getModules']),
            ...mapActions('cartModule', ['readLocal', 'addLocal', 'deleteLocal']),
            slug(name){
                return slugify(name, {lower : true, replacement: '-'})
            },
            top10(data){
                const ratedModules = data.filter(item => item.relationships.reviews.length > 0)
                let topRated = []
                ratedModules.forEach(item => {
                    let rate = 0
                    item.relationships.reviews.forEach(x => {
                        rate += x.rate
                    })
                    rate = rate / item.relationships.reviews.length
                    if(rate >= 3.2){
                        item.rate = rate
                        topRated.push(item)
                    }
                })
                topRated.sort((a, b) => b.rate - a.rate)
                topRated = topRated.slice(0,10)
                let length = 10 - topRated.length
                while(length > 0){
                    let random = Math.floor(Math.random() * data.length)
                    if(!topRated.some(x => x.id == data[random].id)){
                        topRated.push(data[random])
                        length--
                    }
                }
                this.data = topRated
                this.ready = true
            },
            handleResponsiveSlides() {
                if (window.innerWidth < 545) {
                    this.slidesPerView = 2;
                }else if (window.innerWidth < 710) {
                    this.slidesPerView = 3;
                }else if (window.innerWidth < 750) {
                    this.slidesPerView = 4;
                }else if (window.innerWidth < 879) {
                    this.slidesPerView = 3;
                }else if (window.innerWidth < 1024) {
                    this.slidesPerView = 4;
                }else if (window.innerWidth < 1084) {
                    this.slidesPerView = 4;
                }
                else {
                    this.slidesPerView = 5;
                }
            },
            addToCart(id){
                let module = this.data.find(item => item.id == id)
                let item = {
                    id : module.id,
                    type : 'module',
                    image : module.relationships.images[0].url,
                    price : module.price,
                    name : module.name
                }
                this.addLocal(item)
                alert('item added successfully')
            }
        },
        mounted() {
            this.handleResponsiveSlides();
            window.addEventListener("resize", this.handleResponsiveSlides);
            AOS.init({
                once: true
            })
            
            if(this.getData != null){
                this.data = [...this.getData]
                this.top10(this.getData)
                this.ready = true
            }else{
                this.getModules()
            }
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.handleResponsiveSlides);
        },
        components :{
            Swiper, SwiperSlide
        },
    }
</script>

<style scoped>
    .test{
        background-color: rgba(0, 0, 0, 0.158);
        display: inline-block;
    }

    .filt{
        mix-blend-mode: multiply;
    }


</style>