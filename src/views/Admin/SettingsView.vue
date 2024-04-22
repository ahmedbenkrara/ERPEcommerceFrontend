<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Settings</h5>
              <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                      <label for="facebook" class="form-label">Facebook</label>
                      <input type="text" v-model="formData.social.facebook" class="form-control" id="facebook">
                    </div>
                    <div class="mb-3">
                      <label for="linkedin" class="form-label">Linkedin</label>
                      <input type="text" v-model="formData.social.linkedin" class="form-control" id="linkedin">
                    </div>
                    <div class="mb-3">
                      <label for="instagram" class="form-label">Instagram</label>
                      <input type="text" v-model="formData.social.instagram" class="form-control" id="instagram">
                    </div>
                    <div class="mb-3">
                      <label for="twitter" class="form-label">Twitter</label>
                      <input type="text" v-model="formData.social.twitter" class="form-control" id="twitter">
                    </div>
                    <div class="mb-3">
                      <label for="map" class="form-label">Map link</label>
                      <input type="text" v-model="formData.map" class="form-control" id="map">
                    </div>
                    <div class="mb-3">
                      <label for="description" class="form-label">Website description</label>
                      <textarea class="form-control" v-model="formData.description" id="description"></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="who" class="form-label">Who are we</label>
                      <textarea class="form-control" v-model="formData.about.who" id="who"></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="why" class="form-label">Why choose us</label>
                      <textarea class="form-control" v-model="formData.about.why" id="why"></textarea>
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
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'


export default {
    name : 'SettingsView',
    data(){
        return{
            formData: {
                social: {
                    facebook: "",
                    linkedin: "",
                    twitter: "",
                    instagram: ""
                },
                about: {
                    who: "",
                    why: ""
                },
                map: "",
                description : ""
            }
        }
    },
    computed: {
        ...mapGetters('settingsModule', ['getSettings'])
    },
    methods : {
        ...mapActions('settingsModule', ['loadSettings']),
        send(){
            if(this.validation()){
                this.updateSettings()
            }
        },
        // async loadSettings() {
        //     try {
        //         const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/settings`, {
        //             headers : {
        //                 'Accept': 'application/vnd.api+json',
        //                 'Content-Type': 'application/vnd.api+json',
        //                 'Authorization': `Bearer ${this.getToken}`,
        //             }
        //         });
        //         this.formData = response.data
        //     } catch (error) {
        //         console.error('Error loading settings:', error);
        //     }
        // },
        async updateSettings() {
            try {
                await axios.post(`${process.env.VUE_APP_BASE_URL}/settings`, this.formData, {
                    headers : {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        'Authorization': `Bearer ${this.getToken}`,
                    }
                });
                alert('Settings updated successfully!');
            } catch (error) {
                console.error('Error updating settings:', error);
            }
        },
        validation(){
            let description = document.getElementById('description') 
            let map = document.getElementById('map') 
            let who = document.getElementById('who') 
            let why = document.getElementById('why') 

            if(this.formData.map.trim() == '' || this.formData.map.trim() == null){
                this.errorStyle(map, 'Map  is required', true)
                return
            }else{
                this.errorStyle(map, '', false)
            }

            if(this.formData.description.trim().length < 40 || this.formData.map.trim() == null){
                this.errorStyle(description, 'description  isn\'t valid', true)
                return
            }else{
                this.errorStyle(description, '', false)
            }

            if(this.formData.about.who.trim().length < 100 || this.formData.map.trim() == null){
                this.errorStyle(who, 'This field shouldn\'t be less than 100 characters', true)
                return
            }else{
                this.errorStyle(who, '', false)
            }

            if(this.formData.about.why.trim().length < 100 || this.formData.map.trim() == null){
                this.errorStyle(why, 'This field shouldn\'t be less than 100 characters', true)
                return
            }else{
                this.errorStyle(why, '', false)
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
            title: `Settings | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })

        this.formData = this.getSettings
    },
    components : {
        HeaderAdmin
    }
}
</script>

<style scoped>
    .error{
        @apply border-[red];
    }

    textarea{
        height: 200px !important;
        resize: none;
    }
</style>