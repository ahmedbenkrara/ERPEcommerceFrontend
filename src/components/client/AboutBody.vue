<template>
    <div>
        <div class="w-full grid lg:grid-cols-2 sm:py-6 md:py-8 lg:py-16 lg:px-16 my-16">
            <div class="w-full sm:py-4 lg:py-8 px-4 flex items-center min-h-[400px]">
                <div>
                    <div class="w-[90px] h-[4px] bg-black mb-4"></div>
                    <h1 class="text-[40px] font-poppins font-[500]">Who We Are</h1>
                    <p class="font-poppins text-[16px] mt-[20px]">
                        At {{ title }}, we are passionate about helping businesses streamline their operations and unlock their full potential. As a leading provider of cutting-edge ERP (Enterprise Resource Planning) solutions, we understand the unique challenges that businesses face in today's dynamic and fast-paced marketplace. That's why we have developed a wide range of ERP Modules designed to optimize and enhance every aspect of your business.
                    </p>
                </div>
            </div>
            <div class="w-full px-4 h-full">
                <img class="w-full h-[400px] object-cover" src="https://images.pexels.com/photos/7710118/pexels-photo-7710118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
        </div>
        <div class="w-full h-fit plx bg-[#0c0716f5] mb-12">
            <div class="bg-white mx-auto px-4 sm:w-full lg:w-[400px] sm:py-4 lg:py-[150px]">
                <div class="w-[90px] h-[4px] bg-black mb-4 mx-auto"></div>
                <h1 class="text-[40px] font-poppins font-[500] text-center">Follow Us</h1>
                <div class="text-black text-[25px] flex justify-center w-full pt-6">
                    <i class="block cursor-pointer mx-2 fa-brands fa-facebook-f"></i>
                    <i class="block cursor-pointer mx-2 fa-brands fa-linkedin"></i>
                    <i class="block cursor-pointer mx-2 fa-brands fa-twitter"></i>
                    <i class="block cursor-pointer mx-2 fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
        <div class="w-full grid lg:grid-cols-2 sm:py-6 md:py-8 lg:py-16 lg:px-16">
            <div class="w-full px-4 h-full">
                <img class="w-full h-[400px] object-cover" src="https://images.pexels.com/photos/7213606/pexels-photo-7213606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
            <div class="w-full sm:py-4 lg:py-8 px-4 flex items-center min-h-[400px]">
                <div>
                    <div class="w-[90px] h-[4px] bg-black mb-4"></div>
                    <h1 class="text-[40px] font-poppins font-[500]">Why Choose Us</h1>
                    <p class="font-poppins text-[16px] mt-[20px]">
                        Each member of our team brings a wealth of knowledge and expertise in the field of enterprise resource planning (ERP). We have worked extensively with various businesses, helping them streamline their operations, optimize their processes, and achieve greater efficiency and profitability. We pride ourselves on our ability to deliver customized ERP modules that seamlessly integrate with your ecommerce platform. Whether you're looking for inventory management, order processing, customer relationship management, or any other essential functionality, our team has the skills and experience to develop the right solution for you.
                    </p>
                </div>
            </div>
        </div>
        <div class="pb-12 py-8">
            <div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-0 max-w-[1317px] mx-auto">
                <div class="flex items-center font-poppins mx-auto">
                    <div class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center text-[20px] mr-4">
                        <i aria-hidden="true" class="fa-solid fa-at"></i>
                    </div>
                    <div>
                        <h5 class="text-lg">Best online support</h5>
                        <p class="text-sm">24/7 availability and assistance</p>
                    </div>
                </div>
                <div class="flex items-center font-poppins mx-auto">
                    <div class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center text-[20px] mr-4">
                        <i aria-hidden="true" class="fa-solid fa-credit-card"></i>
                    </div>
                    <div>
                        <h5 class="text-lg">Super Secure</h5>
                        <p class="text-sm">Secure payments made simple</p>
                    </div>
                </div>
                <div class="flex items-center font-poppins mx-auto">
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
    </div>
</template>

<script>

export default {
    name : 'AboutBody',
    data(){
        return{
            title : ''
        }
    },
    mounted(){
        this.title = process.env.VUE_APP_TITLE
    },
    components : {
        
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
</style>