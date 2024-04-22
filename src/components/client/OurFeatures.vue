<template>
    <div class="mt-[30px] px-4">
        <h1 data-aos="zoom-in-down" data-aos-duration="800" data-aos-easing="ease-in-sine" class="toremove font-inter font-bold sm:text-[24px] sm:mb-3 md:text-[30px] text-center">We Provide <br/>Best Costumer Experiences.</h1>
        <div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[1317px] mx-auto">
            <div data-aos="zoom-in-right" data-aos-duration="800" data-aos-easing="ease-in-sine" class="flex items-center font-poppins mx-auto">
                <div class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center text-[20px] mr-4">
                    <i aria-hidden="true" class="fa-solid fa-at"></i>
                </div>
                <div>
                    <h5 class="text-lg">Best online support</h5>
                    <p class="text-sm">24/7 availability and assistance</p>
                </div>
            </div>
            <div data-aos="zoom-in-right" data-aos-duration="800" data-aos-easing="ease-in-sine" class="flex items-center font-poppins mx-auto">
                <div class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center text-[20px] mr-4">
                    <i aria-hidden="true" class="fa-solid fa-credit-card"></i>
                </div>
                <div>
                    <h5 class="text-lg">Super Secure</h5>
                    <p class="text-sm">Secure payments made simple</p>
                </div>
            </div>
            <div data-aos="zoom-in-right" data-aos-duration="800" data-aos-easing="ease-in-sine" class="flex items-center font-poppins mx-auto">
                <div class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center text-[20px] mr-4">
                    <i aria-hidden="true" class="fa-solid fa-truck-fast"></i>
                </div>
                <div>
                    <h5 class="text-lg">Best Quality</h5>
                    <p class="text-sm">Unmatched excellence in quality</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name : 'OurFeatures',
    data(){
        return{

        }
    },
    mounted(){
        AOS.init({
            once: true
        })
    }
}
</script>

<style scoped>

</style>