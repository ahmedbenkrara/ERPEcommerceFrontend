<template>
    <div>
        <div class="mt-[50px] object-cover w-full py-[70px] plx px-4 bg-black text-center text-white font-poppins font-bold">
            <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="text-[40px]"><i class="fa-solid fa-quote-left"></i></p>
            <h1 data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="text-[30px]">Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.</h1>
            <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="text-[20px] mt-4">-Steve Jobs</p>
        </div>
    </div>
</template>

<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
        name : 'QuoteSection',
        mounted(){
            AOS.init({
                once: true
            })
        }
    }
</script>

<style scoped>
    .plx{
        background-image: url('https://images.pexels.com/photos/8133879/pexels-photo-8133879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: rgba(0, 0, 0, 0.247);
        background-blend-mode: multiply;
        background-position: center;
    }
</style>