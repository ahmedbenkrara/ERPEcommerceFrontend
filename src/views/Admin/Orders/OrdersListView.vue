<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <div class="container-fluid">
            <div class="card w-100">
              <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Orders List</h5>
                <div class="mb-4 mt-10 flex items-center">
                      <label for="name" class="form-label mr-4">Order Number</label>
                      <input v-model="searchQuery" type="text" class="form-control searchbox" id="name">
                      <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                    </div>
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Order Number</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Customer</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Status</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Order Date </h6>
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
                          <h6 class="fw-semibold mb-1">{{ item.relationships.user.fname +' '+ item.relationships.user.lname }}</h6>
                          <span class="fw-normal">{{ item.relationships.user.email }}</span>                        
                        </td>
                        <td class="border-bottom-0">
                            <div class="d-flex align-items-center gap-2">
                            <span class="badge bg-secondary rounded-3 fw-semibold">{{ item.status }}</span>
                          </div>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal max-w-[400px] whitespace-normal break-words">{{ item.orderdate }}</p>
                        </td>
                        <td class="border-bottom-0">
                          <div class="flex">
                            <router-link :to="'/admin/order/'+item.id"><p class="mb-0 text-blue-500  fw-normal">details</p></router-link>
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
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name : 'OrdersListView',
    data(){
        return{
          searchQuery: '',
          currentPage: 1,
          itemsPerPage: 20,
        }
    },
    computed: {
        ...mapGetters('orderModule',['getData', 'getLoading']),
        filteredItems() {
          return this.getData != null && this.getData.length > 0 ? this.getData.filter((item) =>
            item.id.toLowerCase().includes(this.searchQuery.toLowerCase())
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
      getLoading(){
        this.setLoading(null)
      }
    },
    methods : {
        ...mapActions('orderModule', ['readOrders']),
        ...mapMutations('orderModule', ['setLoading']),
        previousPage() {

        if (this.currentPage > 1) {
          this.currentPage--
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++
        }
      },
    },
    mounted(){
      useHead({
          title: `Orders | ${process.env.VUE_APP_TITLE}`,
          meta: [
              {
              name: 'description',
              content: 'This is my page.',
              },
          ],
      })

      this.readOrders()
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