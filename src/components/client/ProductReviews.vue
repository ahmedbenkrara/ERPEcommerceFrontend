<template>
    <div class="w-full h-fit sm:px-2 md:px-[50px] mt-[50px]">
        <h1 class="mb-8 font-[500] text-[20px]">Rating & Reviews</h1>
        <div v-if="reviews != null && reviews.length > 0">
            <div class="mb-8 pb-8 border-b" v-for="item in reviews" :key="item.id">
                <div class="mb-2" >
                    <i v-for="(i, index) in item.rate" :key="index" class="fa-solid fa-star text-[#ffc107]"></i>
                    <i v-for="(i, index) in (5 - item.rate)" :key="index" class="fa-solid fa-star text-[#dbdbdb]"></i>
                    <!-- <i class="fa-solid fa-star text-[#ffc107]"></i>
                    <i class="fa-solid fa-star text-[#ffc107]"></i>
                    <i class="fa-solid fa-star text-[#ffc107]"></i>
                    <i class="fa-solid fa-star text-[#ffc107]"></i> -->
                </div>
                <p class="font-poppins text-[16px] font-[300]">{{ item.title }}</p>
                <p class="font-poppins text-[14px] font-[300] mt-2 sm:w-full md:max-w-[900px]">{{ item.message }}</p>
                <p class="mt-2 font-poppins text-[12px] text-[gray] font-[500]">By {{ item.fullname }}</p>
            </div>
        </div>
        <div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-4">
                <input id="fullname" v-model="data.fullname" type="text" placeholder="Full Name" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <input id="email" v-model="data.email" type="text" placeholder="Email" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
            </div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-4">
                <input id="title" v-model="data.title" type="text" placeholder="Review Title" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                <select id="rate" v-model="data.rate" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                    <option value="" disabled selected>Rate</option>
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                </select>
            </div>
            <textarea id="message" v-model="data.message" placeholder="Review Message" class="bg-[#fafafa] resize-none text-[15px] outline-none px-4 py-[14px] h-[150px] border w-full block mb-4"></textarea>
            <button @click="send()" class="text-white bg-black font-[300] text-[14px] px-[20px] py-2">Submit Review</button>
        </div>
    </div>
</template>

<script>
import validator from 'validator'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name : 'ProductReviews',
    props: ['reviews', 'type', 'id'],
    data(){
        return{
            data : {
                fullname : '',
                title : '',
                rate : '',
                email : '',
                message : '',
                type : this.type,
            }
        }
    },
    computed: {
        ...mapGetters('reviewModule', ['getLoading', 'getError', 'getSuccess']),
        ...mapGetters('moduleModule', ['getModuleData']),
        ...mapGetters('packageModule', ['getPackageData']),
    },
    watch: {
        getError(newValue){
            if(newValue != ''){
                alert(newValue)
            }
        },
        getSuccess(newValue){
            if(newValue){
                this.data.fullname = '';
                this.data.title = '';
                this.data.rate = '';
                this.data.email = '';
                this.data.message = '';
                
                this.setSuccess(false);

                if(this.type.toLowerCase() == 'module'){
                    (async () => {
                        await this.getModule(this.id);
                        this.rate();
                    })();
                }else{
                    (async () => {
                        await this.getPackage(this.id);
                        this.rate();
                    })();
                }
            }
        }
    }, 
    methods : {
        ...mapActions('reviewModule', ['sendReview']),
        ...mapMutations('reviewModule', ['setSuccess']),
        ...mapActions('moduleModule', ['getModule']),
        ...mapMutations('moduleModule', ['setModuleData']),
        ...mapActions('packageModule', ['getPackage']),
        ...mapMutations('packageModule', ['setPackageData']),
        send(){
            if(this.validation()){
                if(this.type.toLowerCase() == 'module'){
                    this.data.modele_id = this.id
                }else{
                    this.data.package_id = this.id
                }

                this.sendReview(this.data)
            }
        },
        validation(){
            let fullname = document.getElementById('fullname')
            let rate = document.getElementById('rate')
            let title = document.getElementById('title')
            let email = document.getElementById('email')
            let message = document.getElementById('message')

            if(this.data.fullname.length < 3 || !validator.isAlpha(this.data.fullname.replace(/\s/g, ''))){
                this.errorStyle(fullname, 'Full Name isn\'t valid', true)
                return false
            }else{
                this.errorStyle(fullname, null, false)
            }

            if(!validator.isEmail(this.data.email)){
                this.errorStyle(email, 'Email isn\'t valid', true)
                return false
            }else{
                this.errorStyle(email, null, false)
            }

            if(this.data.title.length < 3 || !validator.isAlpha(this.data.title.replace(/\s/g, ''))){
                this.errorStyle(title, 'title isn\'t valid', true)
                return false
            }else{
                this.errorStyle(title, null, false)
            }

            if(this.data.rate == null || this.data.rate == ''){
                this.errorStyle(rate, 'rate is required', true)
                return false
            }else{
                this.errorStyle(rate, null, false)
                console.log(this.data.rate)
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
        },
        rate(){
            let rate = 0
            if(this.type.toLowerCase() == 'module'){
                this.getModuleData.relationships.reviews.forEach(item => {
                    rate += item.rate
                })
    
                if(rate > 0){
                    rate = rate / this.getModuleData.relationships.reviews.length
                }
                this.getModuleData.rate = rate
                this.setModuleData(this.getModuleData)
            }else{
                this.getPackageData.relationships.reviews.forEach(item => {
                    rate += item.rate
                })
    
                if(rate > 0){
                    rate = rate / this.getPackageData.relationships.reviews.length
                }
                this.getPackageData.rate = rate
                this.setPackageData(this.getPackageData)
            }
        }
    }
}
</script>

<style scoped>
    .error{
        @apply border-[red]
    }
</style>