<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Create Package</h5>
              <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                      <label for="name" class="form-label">Package Title</label>
                      <input v-model="data.name" type="text" class="form-control" id="name">
                      <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                    </div>
                    <div class="mb-3">
                      <label for="price" class="form-label">Package Price</label>
                      <input v-model="data.price" type="number" min="0" class="form-control" id="price">
                    </div>
                    <div class="mb-3">
                      <label for="description" class="form-label">Package Description</label>
                      <textarea v-model="data.description" class="form-control" id="description"></textarea>
                    </div>
                    <button @click="send()" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-6 px-6 text-center">
          <p class="mb-0 fs-4">2022 - 2023 © ProVisionX . All rights Reserved</p>
        </div>
      </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name : 'CreatePackageView',
    data(){
        return{
            data : {
                name : '',
                price : '',
                description : ''
            }
        }
    },
    computed: {
        ...mapGetters('packageModule',['getSuccess'])
    },
    watch: {
        getSuccess(value){
            if(value == true){
                this.data.name = ''
                this.data.price = ''
                this.data.description = ''
                alert('Package created successfully !')
                this.setSuccess(null)
            }else if(value == false){
                alert('Something went wrong, please try again later.')
                this.setSuccess(null)
            }
        }
    },
    methods : {
        ...mapActions('packageModule', ['postPackage']),
        ...mapMutations('packageModule', ['setSuccess']),
        send(){
            if(this.validation()){
                this.postPackage(this.data)
            }
        },
        validation(){
            let name = document.getElementById('name') 
            let price = document.getElementById('price') 
            let description = document.getElementById('description') 

            if(name.value.trim().length < 3){
                this.errorStyle(name, 'Package Title isn\' valid', true)
                return
            }else{
                this.errorStyle(name, '', false)

            }

            if(parseFloat(price.value) < 1 || price.value == '' || price.value == null){
                this.errorStyle(price, 'Package Price isn\' valid', true)
                return
            }else{
                this.errorStyle(price, '', false)
            }

            if(description.value.trim().length < 200){
                console.log(description.value.trim().length)
                this.errorStyle(description, 'Package Description should at least contain 200 characters', true)
                return
            }else{
                this.errorStyle(description, '', false)
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
            title: `Create Package | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })
    },
    components : {
        HeaderAdmin
    }
}
</script>

<style scoped>
    #description{
        min-height: 200px;
        resize: none;
    }

    .error{
        @apply border-[red];
    }
</style>