<template>
    <div class="sm:px-4 md:px-8 py-6 mb-16">
        <!-- <p class="font-poppins text-[14px] font-[400]">
            <span class="text-gray-700 cursor-pointer">Home</span> <span class="text-gray-700"> <i class="fa-solid fa-angle-right"></i> </span> <span class="text-gray-700 cursor-pointer">Modules</span> <span class="text-gray-700"> <i class="fa-solid fa-angle-right"></i> </span> <span class="">Module 1</span>
        </p> -->
        <div class=" w-full h-fit grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2" v-if="getPackageSuccess == true">
            <!--Left-->
            <div class="w-full h-fit sm:py-4 md:py-6 md:px-4">
                <div>
                    <img id="maingallery" class="w-full sm:h-[300px] md:h-[400px] rounded-[0px] object-cover" :src="getPackageData.relationships.modules[0].images[0].url" alt="">
                </div>
                <div class="mt-2 w-full h-fit">
                    <swiper
                        :slidesPerView="4"
                        :spaceBetween="5"
                        :modules="modules"
                        class="mySwiper cursor-pointer"
                    >
                        <swiper-slide v-for="item in getPackageData.relationships.modules[0].images" :key="item.id">
                            <img @click="setGalleryItem($event)" class="block sm:h-[60px] md:h-[90px] rounded-[0px] w-full object-cover" :src="item.url" alt="">
                        </swiper-slide>
                    </swiper>   
                </div>
            </div>
            <!--right-->
            <div class="w-full h-fit sm:py-4 md:py-6 md:px-4 font-rubik">
                <div class="flex justify-between items-center mb-2">
                    <h1 class="font-bold text-[25px]">{{ getPackageData.name }}</h1>
                    <!-- <div class="bg-[#1d242d] h-fit text-white flex justify-center items-center cursor-pointer px-[12px] py-[10px] rounded-[5px]">
                        <i class="fa-regular fa-heart block"></i>
                    </div> -->
                </div>
                <div class="mb-4">
                    <i v-for="(i, index) in getPackageData.rate" :key="index" class="fa-solid fa-star text-[#ffc107]"></i>
                    <i v-for="(i, index) in (5 - getPackageData.rate)" :key="index" class="fa-solid fa-star text-[#dbdbdb]"></i>
                    ({{ parseFloat(getPackageData.rate).toFixed(2)}}/{{ getPackageData.relationships.reviews.length }} reviews)
                </div>
                <h2 class="text-[18px] font-[500]">${{ parseFloat(getPackageData.price).toFixed(2) }}</h2>
                <h1 class="text-[16px] mt-6">Type</h1>
                <p class="mt-[5px] sm:text-[14px] md:text-[15px] font-poppins font-[300]">
                    {{ getPackageData.name.split(' ')[0] }}
                </p>
                <h1 class="text-[16px] mt-2">Description</h1>
                <p class="mt-[5px] sm:text-[14px] md:text-[15px] font-poppins font-[300]">
                    {{ getPackageData.description }}
                </p>
                <div class="flex mt-8 text-[14px]">
                    <!-- <button class="px-4 py-2 bg-[#1d242d] hover:bg-[#1d242d90] transition-all rounded-md text-[white]">Add to favorite</button> -->
                    <button @click="addToCart()" class="px-4 py-2 h-fit w-fit bg-[black] hover:bg-[#1d242d90] transition-all font-[300] font-poppins text-[white] mr-2">Add to cart</button>
                    <button v-if="getUser != null" @click="addToFavorite()" class="px-4 py-2 bg-[black] hover:bg-[#1d242d90] transition-all font-[300] font-poppins text-[white]"><i class="fa-solid fa-bookmark"></i></button>
                </div>
            </div>
        </div>
        <div class="tabs grid grid-cols-2 text-center mt-16" v-if="getPackageSuccess == true">
            <p @click="tabchange($event,0)" class="activetab border-b py-4 cursor-pointer text-[15px] text-[gray] font-poppins font-[500]">Included Modules</p>
            <p @click="tabchange($event,1)" class="border-b py-4 cursor-pointer text-[15px] text-[gray] font-poppins font-[500]">Rating & Reviews</p>
        </div>
        <ProductReviews type="package" :id="getPackageData.id" :reviews="getPackageData.relationships.reviews" v-if="tab == 1 && getPackageSuccess == true"/>
        <IncludedModules v-if="tab == 0 && getPackageSuccess == true" :data="getPackageData.relationships.modules"/>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import ProductReviews from './ProductReviews.vue'
import IncludedModules from './IncludedModules.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name : 'PackDetails',
    data(){
        return{
            modules : [Pagination],
            tab : 0
        }
    },
    computed : {
        ...mapGetters('packageModule', ['getPackageData', 'getPackageLoading', 'getPackageSuccess']),
        ...mapGetters('authModule', ['getUser']),
        ...mapGetters('favoriteModule', ['getSuccess']),
    },
    watch : {
        getPackageSuccess(x){
            if(!x){
                this.$router.push('/')
            }else{
                this.rate()
            }
        }
    },
    methods: {
        ...mapActions('packageModule', ['getPackage']),
        ...mapMutations('packageModule', ['setPackageData']),
        ...mapActions('cartModule', ['readLocal', 'addLocal', 'deleteLocal']),
        ...mapActions('favoriteModule', ['addFavorite']),
        setGalleryItem(e){
            document.getElementById('maingallery').src = e.target.src
        },
        tabchange(e, target){
            document.querySelectorAll('.activetab').forEach((item) => item.classList.remove('activetab'))
            e.target.classList.add('activetab')
            this.tab = target
        },
        rate(){
            let rate = 0
            this.getPackageData.relationships.reviews.forEach(item => {
                rate += item.rate
            })

            if(rate > 0){
                rate = rate / this.getPackageData.relationships.reviews.length
            }
            this.getPackageData.rate = rate
            this.setPackageData(this.getPackageData)
        },
        addToCart(){
            let item = {
                id : this.getPackageData.id,
                type : 'package',
                image : this.getPackageData.relationships.modules[0].images[0].url,
                price : this.getPackageData.price,
                name : this.getPackageData.name
            }
            this.addLocal(item)
            alert('item added successfully')
        },
        addToFavorite(){
            let fav = {
                user_id : this.getUser.id,
                type : 'package',
                package_id : this.getPackageData.id
            }

            this.addFavorite(fav)
            alert('item added successfully')
        }
    },
    components: {
        Swiper, SwiperSlide, ProductReviews, IncludedModules
    },
    async beforeEnter(to, from, next){
        try{
            await this.getPackage(this.$route.params.id)
            if(this.getPackageSuccess == false){
                next('/')
            }
            this.rate()
            next()
        }catch(err){
            next('/')
        }
    },
    async beforeMount(){
        try{
            await this.getPackage(this.$route.params.id)
            this.rate()
        }catch(err){
            console.log(err)
        }
    }
}
</script>

<style scoped>
    .activetab{
        @apply text-[black] border-black;
    }

    *{
        @apply break-words
    }
</style>