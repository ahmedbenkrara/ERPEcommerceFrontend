<template>
    <div class="mt-[20px] px-4 py-8">
        <!-- <h1 class="font-inter font-semibold sm:text-[24px] sm:mb-3 md:text-[20px]" v-if="ready && data.length > 0">Top Modules</h1> -->
        <!-- <h1 class="mb-8 font-[500] text-[20px]">Pack's modules</h1> -->
        
        <div class="w-full md:px-8">
            <swiper
                :slidesPerView="slidesPerView"
                :spaceBetween="5"
                :modules="modules"
                class="mySwiper cursor-grabbing "
            >
                <swiper-slide v-for="item in data" :key="item.id">
                    <div class="mt-4 overflow-hidden block" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden">
                            <img class="filt cursor-pointer sm:w-[160px] md:w-[200px] sm:h-[210px] md:h-[250px] object-cover block" :src="item.images[0].url" alt="">
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <a :href="`/module/${item.id}/${slug(item.name)}`" target="__blank">
                                    <p class="sm:text-[12px] md:text-[16px] mt-[-2px] font-poppins font-[400] cursor-pointer">
                                        {{ item.name.length <= 14 ? item.name : item.name.slice(0,11).concat("...") }}
                                    </p>
                                    <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">${{ item.price }}</p>
                                </a>
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
    import { mapActions } from 'vuex'
    import slugify from 'slugify'

    export default {
        name : "IncludedModules",
        props : ['data'],
        data(){
            return{
                modules: [Pagination],
                slidesPerView : 5,
            }
        },
        methods: {
            ...mapActions('cartModule', ['readLocal', 'addLocal', 'deleteLocal']),
            slug(name){
                return slugify(name, {lower : true, replacement: '-'})
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