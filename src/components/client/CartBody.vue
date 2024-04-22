<template>
    <div class="font-inter">
        <h1 class="sm:text-[20px] md:text-[35px] sm:px-2 md:px-[50px] mt-8 font-[700] mb-2 sm:w-full md:w-[80%] lg:w-full mx-auto">Shopping Cart</h1>
        <div class="md:w-[80%] md:mx-auto lg:w-full grid sm:grid-cols-1 lg:grid-cols-2 py-8 sm:px-4 md:px-[50px] gap-y-[60px]">
            <div>
                <div class="sm:py-[2rem] md:py-[2.5rem] border-t border-b flex justify-between w-full h-fit">
                    <div class="flex">
                        <img class="block rounded-[6px] sm:w-[120px] sm:h-[170px] md:w-[170px] md:h-[200px]" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                        <div class="sm:ml-2 md:ml-4">
                            <p class="sm:text-[12px] md:text-[14px] text-[#374151] font-[500]">Order Management</p>
                            <p class="sm:text-[12px] md:text-[14px] text-[#6b7280] font-[500]">Package</p>
                            <p class="sm:text-[12px] md:text-[14px] text-[#374151] font-[500]">$32.00</p>
                        </div>
                    </div>
                    <select name="" id="" class="block bg-white appearance-none h-fit py-[6px] px-[12px] text-[#374151] rounded-md outline-none border sm:text-[12px] md:text-[14px] font-[500]">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <div class="h-fit w-fit text-[#9ca3af] hover:text-[#858b95] cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div class="sm:py-[2rem] md:py-[2.5rem] border-b flex justify-between w-full h-fit">
                    <div class="flex">
                        <img class="block rounded-[6px] sm:w-[120px] sm:h-[170px] md:w-[170px] md:h-[200px]" src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                        <div class="sm:ml-2 md:ml-4">
                            <p class="sm:text-[12px] md:text-[14px] text-[#374151] font-[500]">Order Management</p>
                            <p class="sm:text-[12px] md:text-[14px] text-[#6b7280] font-[500]">Package</p>
                            <p class="sm:text-[12px] md:text-[14px] text-[#374151] font-[500]">$32.00</p>
                        </div>
                    </div>
                    <select name="" id="" class="block bg-white appearance-none h-fit py-[6px] px-[12px] text-[#374151] rounded-md outline-none border sm:text-[12px] md:text-[14px] font-[500]">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <div class="h-fit w-fit text-[#9ca3af] hover:text-[#858b95] cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
            <div class="lg:pl-[100px]">
                <div class="w-full h-fit p-[2rem] bg-[#f9fafb] rounded-[8px]">
                    <h1 class="text-[18px] sm:font-bold md:font-[500] mb-2">Order Summary</h1>
                    <div class="flex justify-between h-fit w-full py-4 border-b">
                        <p class="text-[#4b5563] sm:text-[13px] md:text-[14px]">Subtotal</p>
                        <p class="sm:text-[13px] md:text-[14px] font-[500]">$32.00</p>
                    </div>
                    <div class="flex justify-between h-fit w-full py-4 border-b">
                        <p class="text-[#4b5563] sm:text-[13px] md:text-[14px]">Shipping</p>
                        <p class="sm:text-[13px] md:text-[14px] font-[500]">$0</p>
                    </div>
                    <div class="flex justify-between h-fit w-full py-4">
                        <p class="sm:text-[15px] md:text-[16px] font-[500]">Order Total</p>
                        <p class="sm:text-[15px] md:text-[16px] font-[500]">$32.00</p>
                    </div>
                    <button class="w-full h-fit sm:px-4 sm:py-2 md:px-[16px] md:py-[10px] text-white bg-black rounded-[6px] mt-4 sm:text-[14px] md:text-[16px] font-[500]">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'CartBody',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5em 1.5em;
        padding-right: 2.5rem;
        -webkit-print-color-adjust: exact;
    }
</style>

