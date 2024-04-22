<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Profile details</h5>
              <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                      <label for="fname" class="form-label">First Name</label>
                      <input type="text" v-model="data.fname" class="form-control" id="fname">
                    </div>
                    <div class="mb-3">
                      <label for="lname" class="form-label">Last Name</label>
                      <input type="text" v-model="data.lname" class="form-control" id="lname">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="text" v-model="data.email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">Current Password</label>
                      <input type="password" v-model="password.current" class="form-control" id="password">
                    </div>
                    <div class="mb-3">
                        <label for="newpass" class="form-label">New Password</label>
                        <input type="password" v-model="password.newpassword" class="form-control" id="newpass">
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
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import validator from 'validator'


export default {
    name : 'ProfileView',
    data(){
        return{
            data : {
                fname : '',
                lname : '',
                email : '',
            },
            password : {
                current : '',
                newpassword : ''
            }
        }
    },
    computed: {
        ...mapGetters('authModule', ['getUser', 'getPassword']),
        ...mapGetters('userModule', ['getUserSuccess']),
    },
    watch: {
        getUserSuccess(value){
            if(value == true){
                this.setUserSuccess(null)
                //now send pass 
                if(this.password.current != ''){
                    this.updatePassword({ current : this.password.current ,newpassword : this.password.newpassword })
                }else{
                    alert('Saved successfully !')
                }
            }else if(value == false){
                alert('Something went wrong, please try again later.')
                this.setUserSuccess(null)
            }
        },
        getPassword(value){
            if(value == true){
                alert('Saved successfully !')
                this.setPassword(null)
            }else if(value == false){
                alert('Password is wrong !')
                this.setPassword(null)
            }
        }
    },
    methods : {
        ...mapActions('userModule', ['editUser']),
        ...mapMutations('userModule', ['setUserSuccess']),
        ...mapActions('authModule', ['updatePassword']),
        ...mapMutations('authModule', ['setPassword']),
        send(){
            if(this.validation()){
                this.editUser({id : this.getUser.id ,data : this.data})
            }
        },
        validation(){
            let fname = document.getElementById('fname') 
            let lname = document.getElementById('lname') 
            let email = document.getElementById('email') 
            let current = document.getElementById('password') 
            let newpass = document.getElementById('newpass') 

            if(fname.value.trim().length < 3){
                this.errorStyle(fname, 'First name isn\' valid', true)
                return
            }else{
                this.errorStyle(fname, '', false)
            }

            if(lname.value.trim().length < 3){
                this.errorStyle(lname, 'Last name isn\' valid', true)
                return
            }else{
                this.errorStyle(lname, '', false)
            }

            if(!validator.isEmail(this.data.email)){
                this.errorStyle(email, 'Email isn\'t valid', true)
                return false
            }else{
                this.errorStyle(email, null, false)
            }

            if(this.password.current != ''){
                if(this.password.current.length < 8){
                    this.errorStyle(current, 'Password isn\'t valid', true)
                    return false
                }else{
                    this.errorStyle(current, null, false)

                    if(this.password.newpassword.length < 8){
                        this.errorStyle(newpass, 'New password isn\'t valid', true)
                        return false
                    }else{
                        this.errorStyle(newpass, null, false)
                    }
                }
            }else{
                this.errorStyle(current, null, false)
                this.errorStyle(newpass, null, false)
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
            title: `Profile | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })

        if(this.getUser != null){
            this.data.fname = this.getUser.fname
            this.data.lname = this.getUser.lname
            this.data.email = this.getUser.email
        }
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