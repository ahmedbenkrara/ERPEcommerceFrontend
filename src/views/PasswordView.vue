<template>
    <div class="w-full">
        <h3 class="font-inter text-[18px] font-[500] pb-2 border-b mb-8">Change Password</h3>
        <div class="grid md:grid-cols-2 gap-x-2 gap-y-6">
            <div>
                <p class="text-[#6b7280] font-inter font-[500]">We prioritize security to ensure that we provide a secure online shopping experience, safeguarding your information and transactions.</p>
            </div>
            <div>
                <input id="current" v-model="data.current" type="password" placeholder="Current Password" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input id="newpassword" v-model="data.newpassword" type="password" placeholder="New Password" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input id="confirm" v-model="data.confirm" type="password" placeholder="Password Confirmation" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <button @click="send()" class="text-white bg-black font-[300] text-[14px] px-[40px] py-2">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name : 'PasswordView',
    data(){
        return{
            data : {
                current : '',
                newpassword : '',
                confirm : ''
            }
        }
    },
    computed : {
        ...mapGetters('authModule',['getPassword'])
    },
    watch : {
        getPassword(value){
            if(value == true){
                alert('Password updated successfully !')
            }else if(value == false){
                alert('something went wrong !')
                this.setPassword(null)
            }
        }
    },
    methods : {
        ...mapActions('authModule',['updatePassword']),
        ...mapMutations('authModule',['setPassword']),
        send(){
            if(this.validation()){
                this.updatePassword(this.data)
            }
        },
        validation(){
            let current = document.getElementById('current')
            let newpassword = document.getElementById('newpassword')
            let confirm = document.getElementById('confirm')

            if(this.data.current.trim().length < 8){
                this.errorStyle(current, 'Current password isn\'t valid', true)
                return false
            }else{
                this.errorStyle(current, null, false)
            }

            if(this.data.newpassword.trim().length < 8){
                this.errorStyle(newpassword, 'New password is weak', true)
                return false
            }else{
                this.errorStyle(newpassword, null, false)
            }

            if(this.data.newpassword.trim() != this.data.confirm.trim()){
                this.errorStyle(confirm, 'Password confirmation isn\'t like new password !', true)
                return false
            }else{
                this.errorStyle(confirm, null, false)
            }

            return true
        },
        errorStyle(e, message, hasError){
            if(hasError){
                e.classList.add('error')
                e.setAttribute('title', message)
            }else{
                e.classList.remove('error')
                e.removeAttribute('title')
            }
        }
    },
    mounted(){
        useHead({
            title: `Password | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
}
</script>

<style scoped>
    .error{
        @apply border-[red]
    }
</style>