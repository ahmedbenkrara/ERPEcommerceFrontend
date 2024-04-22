<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <!--  Row 1 -->
        <div class="row">
          <div class="d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Order Details</h5>
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">N Order</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Full Name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Email</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Status</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Products Number</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Payment</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">
                                {{ getOrder.id }}
                            </h6>
                        </td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-0">
                                {{ getOrder.relationships.user != null ? getOrder.relationships.user.fname +' '+ getOrder.relationships.user.lname : '' }}
                            </h6>                         
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">
                            {{ getOrder.relationships.user != null ? getOrder.relationships.user.email : '-' }}
                          </p>
                        </td>
                        <td class="border-bottom-0">
                          <div class="d-flex align-items-center gap-2">
                            <span class="badge bg-secondary rounded-3 fw-semibold">
                                {{ getOrder.status }}
                            </span>
                          </div>
                        </td>
                        <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-0 fs-4">
                            {{ getOrder.relationships.items != null ? getOrder.relationships.items.length : '-' }}
                          </h6>
                        </td>
                        <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-0 fs-4">Paypal</h6>
                        </td>
                      </tr>                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-xl-3" v-for="(item, index) in getOrder.relationships.items || []" :key="index">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a target="__blink" :href="item.type.toLowerCase() == 'module' ? '/module/'+item.module.id+'/'+slug(item.module.name) : '/package/'+item.package.id+'/'+slug(item.package.name)">
                    <img :src="item.type.toLowerCase() == 'module' ? item.module.images[0].url : item.package.modules[0].images[0].url" class="card-img-top rounded-0 h-[250px] object-cover" alt="...">
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">{{ item.type.toLowerCase() == 'module' ? item.module.name : item.package.name }}</h6>
                <h6 class="fw-normal text-muted">{{ item.type }} <span class="ml-2">x2</span></h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">${{ item.type.toLowerCase() == 'module' ? parseFloat(item.module.price).toFixed(2) : parseFloat(item.package.price).toFixed(2)}}</h6>
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
import { mapGetters } from 'vuex'
import slugify from 'slugify'

export default {
    name : 'OrdersDetailsView',
    data(){
        return{

        }
    },
    computed : {
        ...mapGetters('orderModule', ['getOrder'])
    },
    methods : {
      slug(name){
        return slugify(name, {lower : true, replacement: '-'})
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

    },
    components : {
        HeaderAdmin
    }
}
</script>
