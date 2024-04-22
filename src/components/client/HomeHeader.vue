<template>
<div class="w-[calc(100%-20px)] h-[600px] overflow-hidden mx-auto">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item relative">
            <img class="filt w-full scale-x-[-1] h-[600px] object-cover lg:object-top" src="https://images.pexels.com/photos/4872023/pexels-photo-4872023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3">
            <div class="absolute sm:w-full sm:px-2 md:px-0 md:w-fit h-fit sm:left-0 top-0 bottom-0 md:left-[110px] sm:text-center md:text-left m-auto text-white font-poppins font-[300]">
                <h6 data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="sm:text-[16px] md:text-[18px] mb-[8px] test">Uncover our wide array of packages!</h6>
                <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="md:max-w-[400px] sm:text-[23px] md:text-[25px] font-semibold test">Optimize efficiency effortlessly with our tailored ERP module packages.</p>
                <router-link data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" to="/packages">View More <i class="fa-solid fa-arrow-right-long ml-[4px]"></i></router-link>
            </div>
        </div>
        <div class="carousel-item relative">
            <img class="filt w-full h-[600px] object-cover" src="https://images.pexels.com/photos/8133879/pexels-photo-8133879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2">
            <div class="absolute sm:w-full sm:px-2 md:px-0 md:w-fit h-fit sm:left-0 top-0 bottom-0 md:left-[110px] sm:text-center md:text-left m-auto text-white font-poppins font-[300]">
                <h6 data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine"  class="sm:text-[16px] md:text-[18px] mb-[8px] test">Custom ERP Modules: Boost Your Business!</h6>
                <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine"  class="md:max-w-[400px] sm:text-[23px] md:text-[25px] font-semibold test">Enhance Your Business with Customizable ERP Modules. Discover Our Products!</p>
                <router-link data-aos="zoom-in" data-aos-duration="800"  data-aos-easing="ease-in-sine" to="/modules">View More <i class="fa-solid fa-arrow-right-long ml-[4px]"></i></router-link>
            </div>
        </div>
        <div class="carousel-item relative">
            <img class="filt w-full h-[600px] object-cover lg:object-top" src="https://images.pexels.com/photos/4872020/pexels-photo-4872020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2">
            <div class="absolute sm:w-full sm:px-2 md:px-0 md:w-fit h-fit sm:left-0 top-0 bottom-0 md:left-[110px] sm:text-center md:text-left m-auto text-white font-poppins font-[300]">
                <h6 data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="sm:text-[16px] md:text-[18px] mb-[8px] test">Your Success is Our Priority!</h6>
                <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="md:max-w-[400px] sm:text-[23px] md:text-[25px] font-semibold test">Unleash Business Excellence with Our Expert Services. Take the First Step Now!</p>
                <router-link data-aos="zoom-in" data-aos-duration="800"  data-aos-easing="ease-in-sine" to="/contact">View More <i class="fa-solid fa-arrow-right-long ml-[4px]"></i></router-link>
            </div>
        </div>
        <!-- <div class="carousel-item relative">
            <img class="filt w-full h-[600px] object-cover lg:object-top" src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2">
            <div class="absolute sm:w-full sm:px-2 md:px-0 md:w-fit h-fit sm:left-0 top-0 bottom-0 md:left-[110px] sm:text-center md:text-left m-auto text-white font-poppins font-[300]">
                <h6 data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="sm:text-[16px] md:text-[18px] mb-[8px] test">Connect for Effective Communication!</h6>
                <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="md:max-w-[400px] sm:text-[23px] md:text-[25px] font-semibold test">Unlock Business Excellence with Our Expert Services. Take the First Step Now!</p>
                <router-link data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" to="/">View More <i class="fa-solid fa-arrow-right-long ml-[4px]"></i></router-link>
            </div>
        </div> -->
      </div>
      <div class="carousel-controls">
        <button class="bg-white text-black font-bold py-2 px-4 rounded-l" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="bg-white text-black font-bold py-2 px-4 rounded-r" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
</div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name : 'HomeHeader', 
    data() {
        return {
        currentIndex: 0,
        numItems: 3,
        };
    },
    methods: {
        showSlide(index) {
        if (index < 0 || index >= this.numItems) {
            return;
        }
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        this.currentIndex = index;
        },
        nextSlide() {
        const newIndex = this.currentIndex + 1;
        const nextIndex = newIndex >= this.numItems ? 0 : newIndex;
        this.showSlide(nextIndex);
        },
        prevSlide() {
        const newIndex = this.currentIndex - 1;
        const prevIndex = newIndex < 0 ? this.numItems - 1 : newIndex;
        this.showSlide(prevIndex);
        },
    }, 
    mounted() {
        //setInterval(this.nextSlide, 5000);
        AOS.init();
    }
}
</script>

<style scoped>
    .carousel {
        overflow: hidden;
        position: relative;
    }

    .carousel-inner {
        display: flex;
        transition: transform 0.3s ease;
    }

    .carousel-item {
        flex: 0 0 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.26);
        display: inline-block;
    }

    .carousel-controls {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem;
    }

    .test{
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .filt{
        mix-blend-mode: multiply;
    }

    .carousel-item a{
        @apply block md:mx-0 sm:mx-auto w-fit mt-4 text-white border-[2px] sm:text-[11px] md:text-[12px] font-bold font-poppins border-white pl-6 pr-[20px] py-[6px] rounded-full;
    }
</style>