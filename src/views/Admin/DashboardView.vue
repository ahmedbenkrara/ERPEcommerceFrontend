<template>
    <div class="body-wrapper">
      <!--  Header Start -->
      <HeaderAdmin />
      <!--  Header End -->
      <div class="container-fluid">
        <!--  Row 1 -->
        <div class="row">
          <div class="col-lg-8 d-flex align-items-strech">
            <div class="card w-100">
              <div class="card-body">
                <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div class="mb-3 mb-sm-0">
                    <h5 class="card-title fw-semibold">Sales Overview</h5>
                  </div>
                </div>
                <canvas ref="ordersChart" class="max-h-[400px]"></canvas>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                <!-- Monthly Earnings -->
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-8">
                        <h5 class="card-title mb-9 fw-semibold"> Monthly Earnings </h5>
                        <h4 class="fw-semibold mb-3">${{ parseFloat(monthly).toFixed(2) }}</h4>
                        <div class="d-flex align-items-center pb-1">
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex justify-content-end">
                          <div
                            class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                            <i class="ti ti-currency-dollar fs-6"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div id="earning"></div> -->
                </div>
              </div>
              <div class="col-lg-12">
                <!-- Monthly Earnings -->
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-8">
                        <h5 class="card-title mb-9 fw-semibold"> Product Reviews </h5>
                        <h4 class="fw-semibold mb-3">{{ reviews }}</h4>
                        <div class="d-flex align-items-center pb-1">
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex justify-content-end">
                          <div
                            class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                            <i class="ti ti-brand-superhuman fs-6"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div id="earning"></div> -->
                </div>
              </div>
              <div class="col-lg-12">
                <!-- Monthly Earnings -->
                <div class="card">
                  <div class="card-body">
                    <div class="row alig n-items-start">
                      <div class="col-8">
                        <h5 class="card-title mb-9 fw-semibold"> Customers Number </h5>
                        <h4 class="fw-semibold mb-3">{{ users }}</h4>
                        <div class="d-flex align-items-center pb-1">
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="d-flex justify-content-end">
                          <div
                            class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                            <!-- <i class="ti ti-currency-dollar"></i> -->
                            <i class="ti ti-user fs-6"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div id="earning"></div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body p-4">
                <router-link to="/admin/orders/list"><h5 class="card-title fw-semibold mb-4">Recent Orders</h5></router-link>
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Number</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Customer</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Status</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Order Date</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Amount</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in recentOrders" :key="index">
                        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{{ item.id }}</h6></td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">{{ item.relationships.user.fname +' '+ item.relationships.user.lname }}</h6>
                            <span class="fw-normal">{{ item.relationships.user.email }}</span>                          
                        </td>
                        <td class="border-bottom-0">
                          <div class="d-flex align-items-center gap-2">
                            <span class="badge bg-primary rounded-3 fw-semibold">{{ item.status }}</span>
                          </div>
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">{{ item.orderdate }}</p>
                        </td>
                        <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-0 fs-4">${{ parseFloat(item.amount).toFixed(2) }}</h6>
                        </td>
                      </tr>                    
                    </tbody>
                  </table>
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
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import Chart from 'chart.js/auto'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { useHead } from '@vueuse/head'

export default {
    name : 'DashboardView',
    data(){
      return {
        orders : [],
        monthly : 0,
        reviews : 0,
        users : 0,
        recentOrders : []
      }
    },
    computed : {
      ...mapGetters('orderModule',['getData', 'getLoading']),
      ...mapGetters('reviewModule',['getCount', 'getCountSuccess']),
      ...mapGetters('userModule', ['getUserCount', 'getUserCountSuccess']),
    },
    watch : {
      getLoading(value){
        if(value == true){
          this.getData.forEach((item) => {
            item.relationships.items.forEach(i => {
              let x = i.quantity
              if(i.type.toLowerCase() == 'module'){
                x = x * i.module.price
              }else{
                x = x * i.package.price
              }
              item.amount = x
            })
          })
          this.orders = this.getData
          this.recentOrders = this.orders.slice(0, 5)
          this.setLoading(null)
          this.renderChart()
        }else if(value == false){
          this.setLoading(null)
        }
        console.log('here'+ value)
      },
      getCountSuccess(value){
        if(value == true){
          this.reviews = this.getCount
          this.setCountSuccess(null)
        }else if(value == false){
          this.setCountSuccess(null)
        }
      },
      getUserCountSuccess(value){
        if(value == true){
          this.users = this.getUserCount
          this.setUserCountSuccess(null)
        }else if(value == false){
          this.setUserCountSuccess(null)
        }
      }
    },
    methods: {
      ...mapActions('orderModule', ['readOrders']),
      ...mapMutations('orderModule', ['setLoading']),
      ...mapActions('reviewModule', ['countReviews']),
      ...mapMutations('reviewModule', ['setCountSuccess']),
      ...mapActions('userModule', ['countUsers']),
      ...mapMutations('userModule', ['setUserCountSuccess']),
      renderChart() {        
        const currentDate = new Date()
        const currentMonth = currentDate.getMonth()
        const currentYear = currentDate.getFullYear()
        
        const filteredOrders = this.orders.filter(order => {
          const orderDate = new Date(order.orderdate)
          return orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear
        })

        //start monthly earning
        filteredOrders.forEach(item => {
          this.monthly += item.amount
        })
        //end monthly earning

        const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate()
        const ordersData = Array.from({ length: totalDays }, (_, index) => {
          const day = index + 1
          const filteredOrdersForDay = filteredOrders.filter(order => {
            const orderDate = new Date(order.orderdate)
            return orderDate.getDate() === day
          })
          return filteredOrdersForDay.reduce((total, order) => total + order.amount, 0)
        })

        
        const dayLabels = Array.from({ length: totalDays }, (_, index) => (index + 1).toString())
        
        const ctx = this.$refs.ordersChart.getContext('2d')
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: dayLabels,
            datasets: [{
              label: 'Orders This Month',
              data: ordersData,
              backgroundColor: '#49beff',
              borderWidth: 1,
              borderRadius: 10
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                grid: {
                  display: false
                },
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Total Amount'
                }
              },
              x: {
                grid: {
                  display: false
                },
                offset: true,
                title: {
                  display: true,
                  text: 'Days'
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        })
      }
    },
    mounted() {
      useHead({
        title: `Dashboard | ${process.env.VUE_APP_TITLE}`,
        meta: [
            {
            name: 'description',
            content: 'This is my page.',
            },
        ],
      })
      this.readOrders()
      this.countReviews()
      this.countUsers()
    },
    components : {
        HeaderAdmin
    }
}
</script>