<template>
    <div class="bg-black w-full py-[6px] px-4 sm:text-[10px] md:text-[15px] font-inter text-white text-center">
        Welcome to our Online Store - Where Quality Meets Convenience!
    </div>
    <nav class="w-full sm:py-[14px] bg-re sm:px-[10px] md:py-[16px] md:px-[20px] font-inter flex justify-between items-center">
        <div class="sm:flex lg:hidden">
            <router-link to="/contact"><img class="block mx-2 sm:w-[20px] md:w-[22px] cursor-pointer" src="@/assets/icons/mail.svg" alt=""></router-link>
            <img class="block mx-2 sm:w-[20px] md:w-[22px] cursor-pointer" @click="showmenu()" src="@/assets/icons/menu.svg" alt="">
        </div>
        <h1 class="title font-semibold sm:text-[20px] md:text-[22px] cursor-pointer">{{ title }}</h1>
        <ul class="sm:hidden lg:flex text-[16px]">
            <li class="mx-2 cursor-pointer" ><router-link to="/">Home</router-link></li>
            <li class="mx-2 cursor-pointer" ><router-link to="/packages">Packages</router-link></li>
            <li class="mx-2 cursor-pointer" ><router-link to="/modules">Modules</router-link></li>
            <li class="mx-2 cursor-pointer" ><router-link to="/home#services">Services</router-link></li>
            <li class="mx-2 cursor-pointer" ><router-link to="/about">About Us</router-link></li>
            <li class="mx-2 cursor-pointer" ><router-link to="/contact">Contact</router-link></li>
        </ul>
        <div class="flex items-center text-[20px]">
            <img class="block mx-2 sm:w-[20px] md:w-[22px] cursor-pointer cart" @click="showcart()" src="@/assets/icons/cart.svg" alt="">
            <router-link to="/account/favorite"><img class="block mx-2 sm:w-[20px] md:w-[22px] cursor-pointer" src="@/assets/icons/heart.svg" alt=""></router-link>
            <div class="mx-2 relative">
                <i class="cursor-pointer fa-regular fa-user" @click="toggle($event)"></i>
                <ul class="topbar-link-wrapper font-poppins font-[300] text-[13px] tracking-[2px]">
                    <div v-if="getUser == null">
                        <li class="mb-[6px] cursor-pointer w-full"><router-link to="/login">Login</router-link></li>
                        <li class=" cursor-pointer w-full"><router-link to="/register">Register</router-link></li>
                    </div>
                    <div v-if="getUser != null">
                        <li class="mb-[6px] cursor-pointer w-full"><router-link to="/account/profile">Profile</router-link></li>
                        <li class="mb-[6px] cursor-pointer w-full"><router-link to="/account/password">Settings</router-link></li>
                        <li class="mb-[6px] cursor-pointer w-full"><router-link to="/account/favorite">Favorites</router-link></li>
                        <li @click="logout()" class=" cursor-pointer w-full">Logout</li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    <div id="smnav" class="sm:text-[14px] md:text-[16px] py-[20px] px-[10px] lg:hidden sm:w-[250px] md:w-[400px] right-[-100%] top-0 h-full z-[10] fixed bg-white shadow-md">
        <img @click="closemenu()" class="block close ml-auto mx-2 sm:w-[28px]  md:w-[30px] cursor-pointer" src="@/assets/icons/close.svg" alt="">
        <ul class="font-poppins font-[300] tracking-[2px] mt-6">
            <li class="mx-2 my-4 cursor-pointer"><router-link to="/">Home</router-link></li>
            <li class="mx-2 my-4 cursor-pointer"><router-link to="/packages">Packages</router-link></li>
            <li class="mx-2 my-4 cursor-pointer"><router-link to="/modules">Modules</router-link></li>
            <li class="mx-2 my-4 cursor-pointer"><router-link to="/home#services">Services</router-link></li>
            <li class="mx-2 my-4" >
                <div class="flex justify-between">
                    <p>Features</p>
                    <i class="text-[#656565] fa-solid fa-plus block" @click="toggleitem($event)"></i>
                </div>
                <ul class="pl-[16px] h-0 overflow-hidden">
                    <li class="my-4 cursor-pointer">FAQs</li>
                    <li class="mt-4 cursor-pointer">Privacy Policy</li>
                </ul>
            </li>
            <li class="mx-2 my-4 cursor-pointer" ><router-link to="/about">About Us</router-link></li>
            <li class="mx-2 my-4 cursor-pointer" ><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
    <CartMenu />
</template>

<script>
import CartMenu from './CartMenu.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name : 'NavComponent',
    data(){
        return{
            title : ''
        }
    },
    computed: {
        ...mapGetters('authModule', ['getUser'])
    },
    methods: {
        ...mapActions('authModule', ['logout']),
        showcart(){
            let cart = document.getElementById('cart')
            cart.classList.remove('cartclose')
            cart.classList.add('cartopen')
        },
        showmenu(){
            let nav = document.getElementById('smnav')
            nav.classList.remove('navclose')
            nav.classList.add('navopen')
        },
        closemenu(){
            let nav = document.getElementById('smnav')
            nav.classList.remove('navopen')
            nav.classList.add('navclose')
        },
        toggle(e){
            let next = e.target.nextElementSibling
            if(next){
                if(next.classList.contains('slidedown')){
                    next.classList.remove('slidedown')
                    next.classList.add('slideup')
                }else{
                    next.classList.remove('slideup')
                    next.classList.add('slidedown')
                }
            }
        },
        toggleitem(e){
            let item = e.target
            let parent = item.parentElement
            let target = parent.nextElementSibling
            if(item.classList.contains('fa-plus')){
                item.classList.remove('fa-plus')
                item.classList.add('fa-minus')
                target.classList.remove('up')
                target.classList.add('down')
            }else{
                item.classList.remove('fa-minus')
                item.classList.add('fa-plus')
                target.classList.remove('down')
                target.classList.add('up')
            }
        }
    },
    mounted(){
        this.title = process.env.VUE_APP_TITLE
    },
    components: {
        CartMenu
    }
}
</script>

<style scoped>
.cartopen{
    animation: navopen 1s ease-in-out forwards;
}

.navopen{
    animation: navopen 1s ease-in-out forwards;
}

@keyframes navopen{
    from{
        right: -100%;
    }
    to{
        right:0;
    }
}

.navclose{
    animation: navclose 1s ease-in-out forwards;
}

@keyframes navclose{
    from{
        right: 0;
    }
    to{
        right: -100%;
    }
}

.topbar-link-wrapper {
    background-color: #ffffff;
    position: absolute;
    right: 0;
    padding: 0px 20px;
    z-index: 9;
    width: 120px;
    text-align: left;
    top: 40px;
    overflow-y: hidden;
    /* border: 1px solid #f0f0f2; */
    @apply shadow-md;
    height:0;
}

.slideup{
    animation: slideup 500ms ease-in-out forwards;
}

@keyframes slideup{
    from{
        height: fit-content;
        padding: 15px 20px;
        display: block;
    }
    to{
        height: 0;
        padding: 0 20px;
        display: none;
    }
}

.slidedown{
    animation: slidedown 500ms ease-in-out forwards;
}

@keyframes slidedown{
    from{
        height: 0;
        padding: 0 20px;
    }
    to{
        height: fit-content;
        padding: 15px 20px;
    }
}

.up{
    animation: up 500ms ease-in-out forwards;
}

@keyframes up{
    from{
        height: fit-content;
    }
    to{
        height: 0;
    }
}

.down{
    animation: down 500ms ease-in-out forwards;
}

@keyframes down{
    from{
        height: 0;
    }
    to{
        height: fit-content;
    }
}

</style>