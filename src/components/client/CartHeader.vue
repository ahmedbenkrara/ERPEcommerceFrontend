<template>
    <div class="w-[calc(100%-20px)] mx-auto sm:h-[140px] md:h-[300px] plx flex items-center">
        <div class="sm:pl-0 md:pl-20 w-full">
            <h1 class="w-full sm:text-center md:text-left text-white font-poppins sm:text-[23px] md:text-[40px] font-[500]">Shopping Cart</h1>
            <p class="w-full sm:text-center md:text-left text-white sm:text-[12px] md:text-[16px]">Home . Cart</p>
        </div>
    </div>
</template>

<script>

export default {
    name : 'CartHeader'
}
</script>

<style scoped>
    .plx{
        background-image: url('https://images.pexels.com/photos/4872023/pexels-photo-4872023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: rgba(0, 0, 0, 0.247);
        background-blend-mode: multiply;
        background-position: top;
    }
</style>