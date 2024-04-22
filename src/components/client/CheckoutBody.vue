<template>
    <div>
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 min-h-screen w-full font-inter">
            <!--Leeeeeeeeeeeeeeeeft-->
            <div class="py-[50px] sm:pr-2 sm:pl-2 md:pl-20 md:pr-20 lg:pl-8 lg:pr-20 sm:order-last lg:order-first ">
                <h1 class="text-[18px] text-[#4b5563] font-[500] mb-[26px] ">Contact Informations</h1>
                <div class="w-full h-fit">
                  <label for="email" class="text-[14px] font-poppins font-[500] block mb-2">Email address</label>
                  <!-- <input class=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="email" type="text"> -->
                  <input type="text" :value="getUser.email" placeholder="Email" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                </div>
                <div class="w-full h-fit mt-4">
                  <label for="email" class="text-[14px] font-poppins font-[500] block mb-2">Phone</label>
                  <!-- <input class=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="email" type="text"> -->
                  <input type="text" :value="getUser.details != null && getUser.details.phone != null ? getUser.details.phone : ''" placeholder="Phone" class="bg-[#fafafa] text-[15px] outline-none px-4 py-[10px] border w-full block mb-4">
                </div>
                <h1 class="text-[18px] text-[#4b5563] font-[500] my-[26px] ">Payment Methods</h1>
                <div ref="paypal"></div>
            </div>
            <!--Riiiiiiiiiiiiiiiiight-->
            <div class="bg-[#f9fafb] py-[50px] sm:pr-2 sm:pl-2 md:pr-20 md:pl-20 lg:pr-8 lg:pl-20 ">
                <h1 class="text-[18px] font-[500] mb-[26px] ">Order Summary</h1>
                <!--card-->
                <div v-if="getData != null && getData.length > 0">
                  <div class="w-full h-fit flex justify-between pb-6 mb-6 border-b" v-for="item in getData[0].items" :key="item.id">
                      <div class="flex">
                          <img class="block object-cover object-center w-[80px] h-[80px] rounded-[6px]" :src="item.type.toLowerCase() == 'module' ? item.module.images[0].url : item.package.modules[0].images[0].url" alt="">
                          <div class="ml-3 ">
                              <p class="sm:text-[12px] md:text-[14px] text-black font-[500]">{{ item.type.toLowerCase() == 'module' ? item.module.name : item.package.name }}</p>
                              <p class="sm:text-[12px] md:text-[14px] text-[#6b7280] font-[500]">{{ item.type }}</p>
                              <p class="sm:text-[12px] md:text-[14px] text-[#6b7280] font-[500]">x{{ item.quantity }}</p>
                          </div>
                      </div>
                      <p class="sm:text-[14px] md:text-[16px] text-black font-[500]">${{ item.type.toLowerCase() == 'module' ? (parseFloat(item.module.price)*item.quantity).toFixed(2) : (parseFloat(item.package.price)*item.quantity).toFixed(2) }}</p>
                  </div>
                  
                  <div class="w-full h-fit pb-6 border-b">
                      <div class="w-full h-fit flex justify-between py-[12px]">
                          <p class="sm:text-[12px] md:text-[14px] text-[#4b5563] font-[500]">Subtotal</p>
                          <p class="sm:text-[12px] md:text-[14px] text-[#4b5563] font-[500]">${{ parseFloat(subtotal).toFixed(2) }}</p>
                      </div>
                      <div class="w-full h-fit flex justify-between py-[12px]">
                          <p class="sm:text-[12px] md:text-[14px] text-[#4b5563] font-[500]">Shipping</p>
                          <p class="sm:text-[12px] md:text-[14px] text-[#4b5563] font-[500]">$0</p>
                      </div>
                  </div>
                  <div class="w-full h-fit flex justify-between mt-6">
                      <p class="sm:text-[14px] md:text-[16px] text-[black] font-[500]">Total</p>
                      <p class="sm:text-[14px] md:text-[16px] text-[black] font-[500]">${{ parseFloat(subtotal).toFixed(2) }}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CheckoutBody',
  data() {
    return {
      loaded: false,
      subtotal : 0,
    };
  },
  computed : {
    ...mapGetters('authModule',['getUser']),
    ...mapGetters('cartModule',['getData']),
    ...mapGetters('orderModule',['getSuccess']),
  },
  watch : {
    getData: {
      handler() {
          this.calcul()
      },
      deep: true
    },
    getSuccess(value){
      if(value == true){
        location.reload(true)
      }
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AX2s1hDAPCQxnHQ4YgspXtG5FTb3MT5ECmk9b_xAAGX3zBL7LAHsL4utiuMAtax5bSYsSmdVFYrv94eO&currency=USD';
    script.addEventListener('load', this.setLoaded);
    document.body.appendChild(script);

    this.calcul()
  },
  methods: {
    ...mapActions('orderModule',['addOrder']),
    setLoaded() {
      this.loaded = true;
      window.paypal.Buttons({
        style: {
            layout: 'vertical',
            height: 40,
            width: 40
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (parseFloat(this.subtotal).toFixed(2)).toString() // Replace with the actual order amount
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(() => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;

            let data = {
              order : {
                user_id : this.getUser.id,
                status : 'placed',
                orderdate : formattedDate,
                shipdate : null
              },
              items : this.getData[0].items
            }
            this.addOrder(data)
          });
        },
        onCancel: () => {
          alert('Payment canceled');
        },
        onError: () => {
          alert('An error occurred during payment');
        }
      }).render(this.$refs.paypal);
    },
    calcul(){
        this.subtotal = 0
        if(this.getData != null){
            this.getData[0].items.forEach((item) => {
                if(item.type.toLowerCase() == 'module'){
                    this.subtotal += parseInt(item.quantity) * parseFloat(item.module.price)
                }else{
                    this.subtotal += parseInt(item.quantity) * parseFloat(item.package.price)
                }
            })
        }
    }
  }
};
</script>


<style scoped>

</style>