<template>
    <div>        
        <LoaderComponent v-if="getRegisterErrors.loading" />
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
                        Welcome! Please provide your details to register for access to your very own customized ERP module hub.
                    </p>
    
                    <div class="mt-6">
                        <!--Step 1-->
                        <div class="flex-1 mt-3">
                            <input type="text" :title="getRegisterErrors.errors.fname && error ? getRegisterErrors.errors.fname.toString().replaceAll('lname','last name') : ''" :class="{'error' : error && getRegisterErrors.errors.fname}" v-model="informations.fname" id="fname" placeholder="First Name" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#00000082] focus:ring-[#000000] focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
    
                        <div class="flex-1 mt-3">
                            <input type="text" :title="getRegisterErrors.errors.lname && error ? getRegisterErrors.errors.lname.toString().replaceAll('lname','last name') : ''" :class="{'error' : error && getRegisterErrors.errors.lname}" v-model="informations.lname" id="lname" placeholder="Last Name" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#00000082] focus:ring-[#000000] focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
    
                        <div class="flex-1 mt-3">
                            <input type="email" :title="getRegisterErrors.errors.email && error ? getRegisterErrors.errors.email : ''" :class="{'error' : error && getRegisterErrors.errors.email}" v-model="informations.email" id="email" placeholder="Email" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#00000082] focus:ring-[#000000] focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
    
                        <div class="flex-1 mt-3">
                            <input type="password" :title="getRegisterErrors.errors.password && error ? getRegisterErrors.errors.password : ''" :class="{'error' : error && getRegisterErrors.errors.password}" v-model="informations.password" id="password" placeholder="Password" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#00000082] focus:ring-[#000000] focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
    
                        <div class="flex-1 mt-3">
                            <input type="password" v-model="informations.confirm" id="confirm" placeholder="Confirm Password" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#00000082] focus:ring-[#000000] focus:ring-opacity-40 focus:outline-none focus:rings" />
                        </div>
                        
                        <div class="flex-1 mt-6">
                            <p @click="sendToLogin()" class="underline text-[black] cursor-pointer block w-fit" >Already registered ?</p>
                        </div>
    
                        <button id="login" @click="signup()" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000000] rounded-md focus:outline-none focus:ring focus:ring-[#00000082] focus:ring-opacity-50">
                            Sign Up
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
    name : 'RegisterView',  
    data(){
        return{
            websitename : '',
            informations : {
                fname : '',
                lname : '',
                email : '',
                password : '',
                confirm : ''
            },
            error : false
        }
    },
    computed : {
        ...mapGetters('authModule', ['getRegisterErrors']),
        success(){
            return this.getRegisterErrors.success
        }
    },
    watch:{
        success(newValue){
            if(newValue == true){
                router.push({ path:'/login' })
                this.error = false
            }else{
                this.error = true
            }
        }
    },
    methods:{
        sendToLogin(){
            router.push({ path:'/login' })
        },
        ...mapActions('authModule', ['register']),
        showErrors(element, title, isError){
            if(isError){
                element.setAttribute('title', title)
                element.classList.add('error')
            }else{
                element.removeAttribute('title')
                element.classList.remove('error')
            }
        },
        validation(){
            let fname = document.getElementById('fname')
            let lname = document.getElementById('lname')
            let email = document.getElementById('email')
            let password = document.getElementById('password')
            let confirm = document.getElementById('confirm')
            let isvalid = true

            if(this.informations.fname.trim().length == 0){
                this.showErrors(fname, 'First name is required !', true)
                isvalid = false
            }else{
                this.showErrors(fname, null, false)
            }

            if(this.informations.lname.trim().length == 0){
                this.showErrors(lname, 'Last name is required !', true)
                isvalid = false
            }else{
                this.showErrors(lname, null, false)
            }
            var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if(!validRegex.test(this.informations.email)){
                this.showErrors(email, 'Email is not valid !', true)
                isvalid = false
            }else{
                this.showErrors(email, null, false)
            }

            if(this.informations.password.trim().length < 6){
                this.showErrors(password, 'Password should contain at least characters !', true)
                isvalid = false
            }else{
                this.showErrors(password, null, false)
            }

            if(this.informations.password.trim() != this.informations.confirm.trim()){
                this.showErrors(confirm, 'Wrong password confirmation !', true)
                isvalid = false
            }else{
                this.showErrors(confirm, null, false)
            }

            return isvalid
        },
        async signup(){
            if(this.validation()){
                const formdata = new FormData()
                formdata.append('fname', this.informations.fname)
                formdata.append('lname', this.informations.lname)
                formdata.append('email', this.informations.email)
                formdata.append('password', this.informations.password)
                formdata.append('password_confirmation', this.informations.confirm)
                formdata.append('role', 'user')
                await this.register(formdata)
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
        title: `Register | ${process.env.VUE_APP_TITLE}`,
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
    .error{
        @apply border-[red] focus:border-[red] focus:ring-red-300 ;
    }
</style>