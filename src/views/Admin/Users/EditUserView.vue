<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Edit User</h5>
              <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                      <label for="fname" class="form-label">First name</label>
                      <input v-model="data.fname" type="text" class="form-control" id="fname">
                    </div>
                    <div class="mb-3">
                      <label for="lname" class="form-label">Last name</label>
                      <input v-model="data.lname" type="text" class="form-control" id="lname">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input v-model="data.email" type="text" class="form-control" id="email">
                    </div>
                    <div class="mb-4">
                        <label for="role" class="form-label">Role</label>
                        <select v-model="data.role" id="role" class="form-select">
                            <option selected disabled value="">Select a role</option>
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                            <option value="manager">manager</option>
                        </select>
                    </div>
                    <button @click="send()" class="btn btn-primary">Update</button>
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
    name : 'EditUserView',
    data(){
        return{
            id : '',
            data : {
                fname : '',
                lname : '',
                email : '',
                role : ''
            }
        }
    },
    computed: {
        ...mapGetters('userModule',['getUserSuccess', 'getUser'])
    },
    watch: {
        getUserSuccess(value){
            if(value == true){
                alert('User updated successfully !')
                this.setUserSuccess(null)
            }else if(value == false){
                alert('Something went wrong, please try again later.')
                this.setUserSuccess(null)
            }
        },
    },
    methods : {
        ...mapActions('userModule', ['userById', 'editUser']),
        ...mapMutations('userModule', ['setUserSuccess']),
        send(){
            if(this.validation()){
                this.editUser({data : this.data, id : this.id})
            }
        },
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
            let role = document.getElementById('role')
            let isvalid = true

            if(this.data.fname.trim().length == 0){
                this.showErrors(fname, 'First name is required !', true)
                isvalid = false
            }else{
                this.showErrors(fname, null, false)
            }

            if(this.data.lname.trim().length == 0){
                this.showErrors(lname, 'Last name is required !', true)
                isvalid = false
            }else{
                this.showErrors(lname, null, false)
            }
            var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if(!validRegex.test(this.data.email)){
                this.showErrors(email, 'Email is not valid !', true)
                isvalid = false
            }else{
                this.showErrors(email, null, false)
            }
            
            if(this.data.role == null || this.data.role.trim() == ''){
                this.showErrors(role, 'Role is required !', true)
                isvalid = false
            }else{
                this.showErrors(role, null, false)
            }

            return isvalid
        },
    },
    mounted(){
        useHead({
            title: `Update User | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                    name: 'description',
                    content: 'This is my page.',
                },
            ],
        })
        this.id = this.getUser.id
        this.data.fname = this.getUser.fname,
        this.data.lname = this.getUser.lname,
        this.data.email = this.getUser.email,
        this.data.role  = this.getUser.role
        this.setUserSuccess(null)
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