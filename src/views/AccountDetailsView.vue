<template>
    <div class="w-full">
        <h3 class="font-inter text-[18px] font-[500] pb-2 border-b mb-8">Personal information</h3>
        <div class="grid md:grid-cols-2 gap-x-2 gap-y-6">
            <div>
                <p class="text-[#6b7280] font-inter font-[500]">We assure you that we will accurately collect and secure your user details when placing orders, prioritizing data correctness and privacy.</p>
            </div>
            <div>
                <input id="fname" type="text" v-model="data.fname" placeholder="First Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input id="lname" type="text" v-model="data.lname" placeholder="Last Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input id="email" type="text" v-model="data.email" placeholder="Email" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input id="phone" type="text" v-model="data.phone" placeholder="Phone" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <textarea id="address" placeholder="Address" v-model="data.address" class="bg-[#fafafa] resize-none text-[15px] outline-none px-4 py-[14px] h-[150px] border w-full block mb-4"></textarea>
                <button @click="send()" class="text-white bg-black font-[300] text-[14px] px-[40px] py-2">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import validator from 'validator'

export default  {
    name : 'AccountDetailsView',
    data(){
        return{
            data : {}
        }
    },
    computed : {
        ...mapGetters('authModule',['getUser', 'getUpdate'])
    },
    watch : {
        getUser(value){
            if(value == null){
                window.location.reload()
            }
        },
        getUpdate(value){
            if(value == true){
                alert('updated successfully')
                this.setUpdate(null)
            }else if(value == false){
                this.setUpdate(null)
            }
        }
    },
    methods : {
        ...mapActions('authModule',['updateUser']),
        ...mapMutations('authModule',['setUpdate']),
        send(){
            if(this.validation()){
                this.updateUser(this.data)
            }
        },
        validation(){
            let fname = document.getElementById('fname')
            let lname = document.getElementById('lname')
            let email = document.getElementById('email')
            let phone = document.getElementById('phone')
            let address = document.getElementById('address')

            if(this.data.fname.length < 3 || !validator.isAlpha(this.data.fname.replace(/\s/g, ''))){
                this.errorStyle(fname, 'First Name isn\'t valid', true)
                return false
            }else{
                this.errorStyle(fname, null, false)
            }

            if(this.data.lname.length < 3 || !validator.isAlpha(this.data.lname.replace(/\s/g, ''))){
                this.errorStyle(lname, 'Last Name isn\'t valid', true)
                return false
            }else{
                this.errorStyle(lname, null, false)
            }

            
            if(!validator.isEmail(this.data.email)){
                this.errorStyle(email, 'Email isn\'t valid', true)
                return false
            }else{
                this.errorStyle(email, null, false)
            }

            if(this.data.phone.length < 3 || !validator.isNumeric(this.data.phone.replace(/\s/g, ''))){
                this.errorStyle(phone, 'Last Name isn\'t valid', true)
                return false
            }else{
                this.errorStyle(phone, null, false)
            }

            if(this.data.address.trim().length < 10){
                this.errorStyle(address, 'Address isn\'t valid', true)
                return false
            }else{
                this.errorStyle(address, null, false)
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
            title: `Account | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })

        this.data = {
            id : this.getUser.id,
            fname: this.getUser.fname,
            lname: this.getUser.lname,
            email: this.getUser.email,
            phone: this.getUser.details != null && this.getUser.details.phone != null && this.getUser.details.phone != '' ? this.getUser.details.phone : '',
            address: this.getUser.details != null && this.getUser.details.address != null && this.getUser.details.address != '' ? this.getUser.details.address : ''
        }
    },
}
</script>

<style scoped>
    .error{
        @apply border-[red]
    }
</style>