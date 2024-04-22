<template>
    <div class="sm:px-0 md:px-8 py-[100px]">
        <div class="grid gap-y-8 md:gap-x-4 md:grid-cols-2 font-poppins sm:px-[20px] md:px-[20px] lg:px-[80px]">
            <div class="md:py-8">
                <p class="text-[15px]">Don't be stranger!</p>
                <h1 class="font-[500] text-[30px] mt-[-4px]">You tell us. We listen.</h1>
                <p class="text-[15px] mt-4 md:max-w-[400px]">
                    We'd love to hear from you! At {{ title }}, we value your feedback, questions, and suggestions. Our dedicated team is here to assist you and provide the best possible shopping experience.
                </p>
            </div>
            <div>
                <div>
                    <input type="text" id="fullname" v-model="data.fullname" placeholder="Full Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <input type="text" id="subject" v-model="data.subject" placeholder="Subject" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <input type="text" id="email" v-model="data.email" placeholder="Email" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <textarea id="message" v-model="data.message" placeholder="Message" class="bg-[#fafafa] resize-none text-[15px] outline-none px-4 py-[14px] h-[150px] border w-full block mb-4"></textarea>
                    <button @click="send()" class="text-white bg-black font-[300] text-[14px] px-[20px] py-2">Send Message</button>
                </div>
            </div>
        </div>
        <div class="px-4">
            <iframe class="block w-full mt-8 h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.5462544499433!2d-9.25951752515078!3d32.32404190699872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac21fd4d71d483%3A0xa6607a0a8de6ee00!2sBC%20SKILLS!5e0!3m2!1sfr!2sma!4v1684146079030!5m2!1sfr!2sma" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import validator from 'validator'

export default {
    name : 'ContactForm',
    data(){
        return{
            title : '',
            data : {
                fullname : '',
                subject : '',
                email : '',
                message : '' 
            }
        }
    },
    computed: {
        ...mapGetters('contactModule', ['getLoading', 'getError', 'getSuccess']),
    },
    watch: {
        getError(newValue){
            if(newValue != ''){
                alert(newValue)
            }
        },
        getSuccess(newValue){
            if(newValue){
                alert('Message sent successfully')
                this.data.fullname = ''
                this.data.subject = ''
                this.data.email = ''
                this.data.message = ''
                this.setSuccess(false)
            }
        }
    },    
    methods : {
        ...mapActions('contactModule', ['sendMail']),
        ...mapMutations('contactModule', ['setSuccess']),
        send(){
            if(this.validation()){
                this.sendMail(this.data)
            }
        },
        validation(){
            let fullname = document.getElementById('fullname')
            let subject = document.getElementById('subject')
            let email = document.getElementById('email')
            let message = document.getElementById('message')

            if(this.data.fullname.length < 3 || !validator.isAlpha(this.data.fullname.replace(/\s/g, ''))){
                this.errorStyle(fullname, 'Full Name isn\'t valid', true)
                return false
            }else{
                this.errorStyle(fullname, null, false)
            }

            if(!validator.isAlpha(this.data.subject.replace(/\s/g, ''))){
                this.errorStyle(subject, 'Subject isn\'t valid', true)
                return false
            }else{
                this.errorStyle(subject, null, false)
            }

            if(!validator.isEmail(this.data.email)){
                this.errorStyle(email, 'Email isn\'t valid', true)
                return false
            }else{
                this.errorStyle(email, null, false)
            }

            if(this.data.message.trim().length < 10){
                this.errorStyle(message, 'Message isn\'t valid', true)
                return false
            }else{
                this.errorStyle(message, null, false)
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
        this.title = process.env.VUE_APP_TITLE
    }
}
</script>

<style scoped>
    .error{
        @apply border-[red]
    }

</style>