<template>
    <div class="mt-[20px] px-4 py-8">
        <h1 class="font-inter font-semibold sm:text-[24px] sm:mb-3 md:text-[20px]">Packs For You</h1>
        <div class="w-full md:px-8" v-if="ready">
            <swiper
                :slidesPerView="slidesPerView"
                :spaceBetween="5"
                :modules="modules"
                class="mySwiper cursor-grabbing "
            >
                <swiper-slide v-for="item in data" :key="item.id">
                    <div class="mt-4 overflow-hidden" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[10px] overflow-hidden">
                            <img class="filt sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover" :src="item.relationships.modules[0].images[0].url" alt="">
                            <div class="absolute w-fit h-fit cursor-pointer bg-white text-black font-varela m-auto bottom-[11px] left-0 right-0 font-regular rounded-md sm:text-[10px] md:text-sm sm:pl-[8px] sm:pr-[12px] md:pl-[10px] md:pr-[14px] py-[6px]">
                                <router-link :to="`/package/${item.id}/${slug(item.name)}`">{{ item.name.length <= 14 ? item.name : item.name.slice(0,11).concat("...") }} <i class="fa-solid fa-arrow-right-long"></i></router-link>
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
        name : "UniquePacks",
        data(){
            return{
                modules: [Pagination],
                slidesPerView : 5,
                data : [],
                ready : false
            }
        },
        computed: {
            ...mapGetters('packageModule', ['getData', 'getLoading', 'getError', 'getSuccess']),

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
            ...mapActions('packageModule', ['getPackages']),
            slug(name){
                return slugify(name, {lower : true, replacement: '-'})
            },
            top10(data){
                const ratedPackages = data.filter(item => item.relationships.reviews.length > 0)
                let topRated = []
                ratedPackages.forEach(item => {
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
                this.getPackages()
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