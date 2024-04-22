<template>
    <div>
        <div id="services" class="mt-[50px] object-cover w-full py-[100px] plx sm:px-4 md:px-[100px] lg:px-[150px] bg-[#0c0716f5] text-center text-white font-poppins">
            <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="sm:text-[20px] md:text-[30px]">Our Services</p>
            <h1 data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="sm:text-[20px] md:text-[30px] mt-2 font-[200]">Unleash the Power of Integrated ERP Solutions for Smarter, Simpler, and More Profitable Business Operations.</h1>
            <div class="mt-[60px] w-full grid grid-cols-3 gap-x-4 gap-y-[40px]">
                <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="font-[200] text-[14px] text-center">
                    <div>
                        <i class="fa-brands fa-shopify icon"></i> Sales and CRM
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="font-[200] text-[14px] text-center">
                    <div>
                        <i class="main fa-solid fa-coins icon"></i> Financial Management
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="font-[200] text-[14px] text-center">
                    <div>
                        <i class="fa-solid fa-boxes-stacked icon"></i> Inventory
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="font-[200] text-[14px] text-center">
                    <div>
                        <i class="fa-solid fa-building icon"></i> Human Resources
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="font-[200] text-[14px] text-center">
                    <div>
                        <i class="fa-brands fa-r-project icon"></i> Project Management
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="font-[200] text-[14px] text-center">
                    <div>
                        <i class="fa-solid fa-chart-pie icon"></i> Reporting and Analytics
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    export default {
        name : 'OurServices',
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
        background-blend-mode: multiply;
        background-position: center; 
    }

    .icon{
        @apply text-[35px] block mb-2;
    }

    .float{
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float{
        0%{
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.11);
            transform: translatey(0px);
        }

        50%{
            box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.11);
            transform: translatey(-7px);
        }

        100%{
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.11);
            transform: translatey(0px);
        }
    }
</style>