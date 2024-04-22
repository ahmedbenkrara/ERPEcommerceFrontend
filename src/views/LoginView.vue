<template>
    <div class="font-inter">
        <LoaderComponent v-if="getLoading"/>
        <div class="bg-white w-full min-h-screen sm:backgroundsm md:backgroundmd lg:backgroundlg font-thin flex lg:flex-row sm:flex-col sm:py-[100px] lg:py-8 gap-y-10">
            <div class="flex-1 lg:flex lg:justify-center lg:items-center">
                <div class="sm:mx-auto sm:w-[90%] md:w-[80%] lg:w-[80%] h-fit px-4">
                    <h1 data-aos="zoom-in-up" data-aos-duration="800" data-aos-easing="ease-in-sine" class="text-white font-semibold sm:text-[26px] md:text-[40px]">Welcome To {{ websitename }}</h1>
                    <p data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="text-white mt-3 text-[16px]">{{ websitename }} provides innovative ERP modules for businesses of all sizes. We offer customizable solutions to streamline operations, enhance customer experience, and maximize potential. Our expert team provides top-notch support and guidance to help you achieve your goals. Join us today to take your business to the next level.</p>
                </div>
            </div>
            <div class="flex-1 lg:flex lg:justify-center lg:items-center">
                <div data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" class="sm:mx-auto sm:w-[90%] md:w-[80%] lg:w-[80%] h-fit px-8 py-10 rounded-lg bg-[white]">
                    <h1 class="text-2xl font-medium text-gray-700">Hello There,</h1>
    
                    <p class="mt-4 text-gray-500">
                        We're glad to see you! Kindly provide your login information to access your customized ERP module hub.
                    </p>
    
                    <div class="mt-6">
                        <div class="flex-1 mt-6">
                            <label class="block mb-2 text-sm text-gray-600">Email</label>
                            <input type="email" v-model="credentials.email" id="email" placeholder="Email" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#00000082] focus:ring-[#000000] focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
    
                        <div class="flex-1 mt-6">
                            <label class="block mb-2 text-sm text-gray-600">Password</label>
                            <input type="password" v-model="credentials.password" id="password" placeholder="Password" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#00000082] focus:ring-[#000000] focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
                        <div class="flex-1 mt-6">
                            <p @click="sendToRegister()" class="underline text-[black] cursor-pointer block w-fit" >You don't have an account ?</p>
                        </div>
    
                        <button @click="log()" id="login" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md focus:outline-none focus:ring focus:ring-[#00000082] focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import router from '@/router'
import { mapActions, mapGetters } from 'vuex'
import LoaderComponent from '@/components/loading.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name : 'HomeView',  
    data(){
        return{
            websitename : '',
            credentials : {
                email : '',
                password : ''
            }
        }
    },
    computed : {
        ...mapGetters('authModule',['getToken','getMessage', 'getLoading']),
    },
    methods:{
        sendToRegister(){
            router.push({ path : '/register' })
        },
        ...mapActions('authModule',['login']),
        async log(){
            if(this.validation()){
                const formdata = new FormData()
                formdata.append('email', this.credentials.email)
                formdata.append('password', this.credentials.password)
                await this.login(formdata)
                if(this.getMessage){
                    alert(this.getMessage)
                }else{
                    this.$router.push('/register')
                }
            }
        },
        validation(){
            var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if(!validRegex.test(this.credentials.email)){
                alert('Email isn\'t valid !')
                return false
            }else{
                if(this.credentials.password.trim().length < 6){
                    alert('Password should contain at least 6 characters !')
                    return false
                }else{
                    return true
                }
            }
        }
    },
    components : {
        LoaderComponent
    },
    mounted() {
        AOS.init({
            once: true
        })
        this.websitename = process.env.VUE_APP_TITLE
        useHead({
        title: `Login | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
        })
    }
}
</script>

<style scoped>

</style>