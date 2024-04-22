<template>
    <div class="mt-[20px] bg-white px-4 mb-10 pt-14 pb-16 text-center" >
        <h1 data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="sm:text-[30px] md:text-[35px] mt-2 font-[500]">Subscribe to our newsletter to get updates <br class="sm:hidden md:block"/>to our latest packs</h1>
        <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="text-[#424242] font-poppins mt-2 sm:text-[14px] md:text-[16px]">Stay informed and inspired with our exclusive newsletter</p>
        <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="mt-8">
            <div class="sm:block md:flex items-center justify-center">
                <div class="flex bg-white border-[1px] rounded-lg">
                    <div class="flex items-center justify-center py-2 px-4 text-gray-400">
                    <i class="fas fa-envelope"></i>
                    </div>
                    <input type="email" placeholder="Enter your email" class="w-80 bg-white text-gray-700 py-2 px-4 rounded-r-lg focus:outline-none" />
                </div>
                <button class="block bg-black sm:mt-2 md:mt-0 sm:w-full md:w-auto text-white md:ml-2 py-2 px-8 rounded-lg hover:bg-gray-900 focus:outline-none">Subscribe</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SubscribeNews'  
}
</script>

<style scoped>

</style>