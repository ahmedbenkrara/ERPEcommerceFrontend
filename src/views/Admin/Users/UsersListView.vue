<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <div class="container-fluid">
            <div class="card w-100">
              <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Users List</h5>
                <div class="mb-4 mt-10 flex items-center">
                      <label for="name" class="form-label mr-4">Email</label>
                      <input v-model="searchQuery" type="text" class="form-control searchbox" id="name">
                    </div>
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">#</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">First Name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Last Name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Email</h6>
                        </th>                        
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Role</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Actions</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in paginatedItems" :key="item.id">
                        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{{ item.id }}</h6></td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{{ item.fname }}</h6>                         
                        </td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{{ item.lname }}</h6>                         
                        </td>
                        <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-1">{{ item.email }}</h6>
                        </td>
                        <td class="border-bottom-0">
                            <p class="mb-0 fw-normal">{{ item.role }}</p>
                        </td>
                        <td class="border-bottom-0">
                          <div class="flex">
                            <router-link :to="'/admin/user/edit/'+item.id"><p class="mb-0 text-blue-500  fw-normal">edit</p></router-link>
                            <!-- <p class="cursor-pointer mb-0 ml-2 text-[red] fw-normal">delete</p> -->
                          </div>
                        </td>
                      </tr>                      
                    </tbody>
                  </table>
                </div>
                <div class="pagination">
                  <button class="mr-4" @click="previousPage" :disabled="currentPage === 1">Previous</button>
                  <span>{{ currentPage }}</span>
                  <button class="mx-4" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
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
import { mapGetters, mapActions, /*mapMutations*/ } from 'vuex'

export default {
    name : 'UsersListView',
    data(){
        return{
          searchQuery: '',
          currentPage: 1,
          itemsPerPage: 20,
        }
    },
    computed: {
        ...mapGetters('userModule',['getUsers', 'getSuccess', 'getDelete']),
        filteredItems() {
          return this.getUsers != null && this.getUsers.length > 0 ? this.getUsers.filter((item) =>
            item.email.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : []
        },
        paginatedItems() {
          const startIndex = (this.currentPage - 1) * this.itemsPerPage;
          const endIndex = startIndex + this.itemsPerPage;
          return this.filteredItems.slice(startIndex, endIndex);
        },
        totalPages() {
          return Math.ceil(this.filteredItems.length / this.itemsPerPage);
        },
    },
    watch : {
    //   getDelete(value){
    //       if(value == true){
    //           alert('Deleted successfully')
    //           this.setDelete(null)
    //       } 
    //       if(value == false){
    //           alert('Something went wrong please try again later')
    //           this.setDelete(null)
    //       }
    //   }
    },
    methods : {
        ...mapActions('userModule', ['readUsers']),
        // ...mapMutations('userModule', ['setSuccess']),
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        deletemd(){
            if(confirm('Are you sure you want to delete this user ?')){
                // this.deletePackage(id)
                alert('yes')
            }
        }
    },
    mounted(){
        useHead({
            title: `Users | ${process.env.VUE_APP_TITLE}`,
            meta: [
                {
                name: 'description',
                content: 'This is my page.',
                },
            ],
        })

        this.readUsers()
    },
    components : {
        HeaderAdmin
    }
}
</script>

<style scoped>
  .break{
    overflow-wrap: break-word !important;
  }

  .searchbox{
    width:200px !important;
  }
</style>