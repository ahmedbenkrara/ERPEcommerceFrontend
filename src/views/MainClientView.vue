<template>
    <div>
        <div class="xs:flex sm:hidden bg-black fixed z-[1100] top-0 left-0 w-full h-full justify-center items-center">
          <h1 class="text-white font-poppins text-[16px] font-[500]">Sorry but your device isn't supported !</h1>
        </div>
        <NavComponent/>
        <router-view/>
        <ClientFooter/>
    </div>
</template>

<script>
import NavComponent from '@/components/client/NavComponent.vue'
import ClientFooter from '@/components/client/ClientFooter.vue'

export default {
  name: 'MainClientView',
  components: {
    NavComponent, ClientFooter
  },
}
</script>