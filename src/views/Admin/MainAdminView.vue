<template>
    <div>
        <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
            <SideNav/>
            <router-view/>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/admin/SideNav.vue';

export default {
  name: 'MainAdminView',
  components: {
    SideNav
  },
}
</script>