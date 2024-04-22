<template>
    <div class="w-full sm:h-[200px] md:h-[400px] plx flex justify-center items-center">
        <div class="w-fit text-center text-white font-poppins">
            <h1 class="sm:text-[35px] md:text-[40px] font-[500]">Our Modules</h1>
        </div>
    </div>    
</template>

<script>

export default {
    name : 'ModuleHeader',
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