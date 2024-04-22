<template>
    <div id="cart" class="scroll fixed sm:w-full md:w-[400px] h-full bg-white top-0 right-[-100%] z-[1000] p-[20px] font-reemkufi overflow-y-scroll ">
        <div class="text-[#434343] w-full flex justify-between items-center py-8">
            <p class="text-[25px] font-[500]">my cart</p>
            <div class="cursor-pointer text-[20px]" @click="closemenu()">
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
        <!-- <div v-if="getLocal.length == 0 && getData == null">
            <p class="font-ibm text-[13px]">Your cart is currently empty.</p>
        </div> -->
        <div v-if="getLocal.length > 0 || getData != null">
            <div>
                <div class="mt-2 flex" v-for="item in getLocal" :key="item.id">
                    <img :src="item.image" alt="" class="bg-black w-[67px] h-[100px] block object-cover" />
                    <div class="px-[20px]">
                        <p class="text-[13px] font-ibm font-[300] underline text-[#5f5f5f] cursor-pointer">{{ item.name }}</p>
                        <p class="font-ibm font-[300] text-[13px]">{{ item.type }}</p>
                        <p class="font-ibm font-bold text-[13px] text-[#5f5f5f] mt-[5px] ">Unit Price (<span class="text-[red]">{{ item.price }}$</span>)</p>
                        <div class="flex mt-4">
                            <div @click="localQuantityMinus(item.id, item.type)" class="w-[40px] hover:border border-black h-[40px] flex items-center font-ibm font-bold text-[13px] text-[black] justify-center cursor-pointer">−</div>
                            <div class="w-[40px] h-[40px] flex items-center font-ibm font-bold text-[13px] text-black justify-center">{{ item.quantity }}</div>
                            <div @click="localQuantityPlus(item.id, item.type)" class="w-[40px] hover:border border-black h-[40px] flex items-center font-ibm font-bold text-[13px] text-[black] justify-center cursor-pointer">+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div  v-for="item in getData" :key="item.id">
                    <div class="mt-2 flex" v-for="i in item.items" :key="i.id">
                        <img :src="i.type.toLowerCase() == 'module' ? i.module.images[0].url : i.package.modules[0].images[0].url" alt="" class="bg-black w-[67px] h-[100px] block object-cover" />
                        <div class="px-[20px]">
                            <p class="text-[13px] font-ibm font-[300] underline text-[#5f5f5f] cursor-pointer">{{ i.type.toLowerCase() == 'module' ? i.module.name : i.package.name }}</p>
                            <p class="font-ibm font-[300] text-[13px]">{{ i.type }}</p>
                            <p class="font-ibm font-bold text-[13px] text-[#5f5f5f] mt-[5px] ">Unit Price (<span class="text-[red]">{{ i.type.toLowerCase() == 'module' ? i.module.price : i.package.price }}$</span>)</p>
                            <div class="flex mt-4">
                                <div @click="plus({ id : i.id, quantity : (i.quantity*1-1) })" class="w-[40px] hover:border border-black h-[40px] flex items-center font-ibm font-bold text-[13px] text-[black] justify-center cursor-pointer">−</div>
                                <div class="w-[40px] h-[40px] flex items-center font-ibm font-bold text-[13px] text-black justify-center">{{ i.quantity }}</div>
                                <div @click="plus({ id : i.id, quantity : (i.quantity*1+1) })" class="w-[40px] hover:border border-black h-[40px] flex items-center font-ibm font-bold text-[13px] text-[black] justify-center cursor-pointer">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-between border-[#d5d5d5] border-b border-t py-[10px] mt-[25px]">
                <p class="text-[13px] text-[#434343] leading-[25px] font-karla font-[700] tracking-[3px] ">SUBTOTAL</p>
                <p class="text-[13px] text-[red] leading-[25px] font-karla font-[800] tracking-[3px] ">${{ parseFloat(subtotal).toFixed(2) }}</p>
            </div>
            <div class="w-full flex justify-between mt-[25px] py-4 px-[8px]">
                <p class="text-[16px] text-[black] font-ibm font-[700]">Total</p>
                <p class="text-[16px] text-[black] font-ibm font-[700]">${{ parseFloat(subtotal).toFixed(2) }}</p>
            </div>
            <router-link :to="'/checkout'">
                <button class="uppercase mt-[12px] outline-none text-white bg-[#333f48] hover:bg-black px-[20px] py-[14px] w-full text-[12px] tracking-[2px] font-karla font-bold block">check out</button>
            </router-link>
            <p class="text-center font-ibm text-[13px] mt-6">Seamless ERP Solutions for Success</p>
            <p class="text-center font-ibm text-[11px] mt-2">ERP Empowerment</p>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name : 'CartMenu',
    data(){
        return {
            subtotal : 0
        }
    },
    computed : {
        ...mapGetters('cartModule',['getLocal','getData']),
    },
    watch:{
        getLocal: {
            handler() {
                this.calcul()
            },
            deep: true
        },
        getData: {
            handler() {
                this.calcul()
            },
            deep: true
        }
        // getData(){
        //     //this.calcul()
        // }
    },
    methods: {
        ...mapActions('cartModule', ['plusLocal','minusLocal', 'plus']),
        closemenu(){
            let cart = document.getElementById('cart')
            cart.classList.remove('cartopen')
            cart.classList.add('cartclose')
        },
        localQuantityPlus(id, type){
            this.plusLocal({id, type})
        },
        localQuantityMinus(id, type){
            this.minusLocal({id, type})
        },
        calcul(){
            this.subtotal = 0
            if(this.getData != null){
                this.getData[0].items.forEach((item) => {
                    if(item.type.toLowerCase() == 'module'){
                        this.subtotal += parseInt(item.quantity) * parseFloat(item.module.price)
                    }else{
                        this.subtotal += parseInt(item.quantity) * parseFloat(item.package.price)
                    }
                })
            }else{
                this.subtotal = 0
                if(this.getLocal != null){
                    if(this.getLocal.length > 0){
                        this.getLocal.forEach(item => {
                            this.subtotal += parseInt(item.quantity) * parseFloat(item.price)
                        })
                    }
                }
            }
        }
    },mounted(){
        this.calcul()
    },
    created(){
        //this.$watch('local', this.arrayChanged, { deep: true })
    }
}
</script>

<style scoped>
.scroll::-webkit-scrollbar{
    width:0;
}

.cartclose{
    animation: cartclose 1s ease-in-out forwards;
}

@keyframes cartclose{
    from{
        right: 0;
    }
    to{
        right: -100%;
    }
}
</style>