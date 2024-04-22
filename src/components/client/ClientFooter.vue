<template>
    <!-- bg-[#eaeef2] -->
    <footer class="w-full h-fit pt-14 pb-6 px-10 font-poppins text-white bg-black">
        <div class="sm:block md:hidden my-4">
            <h1 class="title font-bold sm:text-[20px] md:text-[25px] cursor-pointer">{{ title }}</h1>
            <p class=" leading-5 mt-2 text-[14px] font-[500]">Streamline your business with our comprehensive ERP modules. Shop now for efficient management solutions on our eCommerce website.</p>
        </div>
        <div class="w-full h-fit grid sm:grid-cols-2 md:grid-cols-4 md:gap-x-[10px] ld:gap-x-[100px]">
            <div class="sm:hidden md:block my-4">
                <h1 class="title font-bold sm:text-[20px] md:text-[25px] cursor-pointer">{{ title }}</h1>
                <p class=" leading-5 mt-2 text-[14px] font-[500]">Streamline your business with our comprehensive ERP modules. Shop now for efficient management solutions on our eCommerce website.</p>
            </div>
            <div class="md:pl-6 sm:text-left md:text-left my-4">
                <h1 class="font-semibold text-[16px] mb-2">Useful Links</h1>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Home</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Packages</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Modules</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Contact</p>
            </div>
            <div class="sm:text-left md:text-left my-4">
                <h1 class="font-semibold text-[16px] mb-2">Other Links</h1>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">About Us</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Services</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">FAQs</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Privacy & Policy</p>
            </div>
            <div class="sm:text-left md:text-left my-4">
                <h1 class="font-semibold text-[16px] mb-2">Social Media</h1>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">LinkedIn</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Twitter</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Facebook</p>
                <p class="text-[14px] mb-[2px] font-[400] cursor-pointer">Instagram</p>
            </div>
        </div>
        <div class="sm:text-[12px] md:text-[14px] text-center mt-10 pt-[10px]">
            {{ new Date().getFullYear() - 1 }} - {{ new Date().getFullYear().toString() }} &copy; {{ title }} . All rights Reserved
        </div>
    </footer>
</template>

<script>

export default {
    name : 'ClientFooter',
    data(){
        return{
            title  : ''
        }
    },
    mounted(){
        this.title = process.env.VUE_APP_TITLE
    }
}
</script>

<style scoped>

</style>