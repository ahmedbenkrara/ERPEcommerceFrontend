<template>
    <div>
        <aside class="left-sidebar">
            <!-- Sidebar scroll-->
            <div>
                <div class="brand-logo d-flex align-items-center justify-content-between">
                <a href="/admin" class="text-nowrap logo-img flex items-center">
                    <!-- <img src="@/assets/images/logos/dark-logo.svg" width="180" alt="" /> -->
                    <i class="ti ti-brand-nexo text-[30px] text-black"></i>
                    <span class="hide-menu font-bold text-[20px] text-[#3e5b58] ml-2">ProVisionX</span>
                </a>
                <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                    <i class="ti ti-x fs-8"></i>
                </div>
                </div>
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
                <ul id="sidebarnav">
                    <li class="nav-small-cap">
                        <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                        <span class="hide-menu">Home</span>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/dashboard" aria-expanded="false">
                        <span>
                        <i class="ti ti-layout-dashboard"></i>
                        </span>
                        <span class="hide-menu">Dashboard</span>
                    </router-link>
                    </li>
                    <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">Packages</span>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/packages/list" aria-expanded="false">
                        <span>
                        <i class="ti ti-article"></i>
                        </span>
                        <span class="hide-menu">Packages List</span>
                    </router-link>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/package/create" aria-expanded="false">
                        <span>
                            <i class="ti ti-square-plus"></i>
                        </span>
                        <span class="hide-menu">Create a package</span>
                    </router-link>
                    </li>
                    <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">Modules</span>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/modules/list" aria-expanded="false">
                        <span>
                        <i class="ti ti-article"></i>
                        </span>
                        <span class="hide-menu">Modules List</span>
                    </router-link>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/module/create" aria-expanded="false">
                        <span>
                            <i class="ti ti-square-plus"></i>
                        </span>
                        <span class="hide-menu">Create a module</span>
                    </router-link>
                    </li>
                    <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">Users</span>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/users/list" aria-expanded="false">
                        <span>
                            <i class="ti ti-article"></i>
                        </span>
                        <span class="hide-menu">Users List</span>
                    </router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link class="test" to="/admin/user/create" aria-expanded="false">
                        <span>
                            <i class="ti ti-square-plus"></i>
                        </span>
                        <span class="hide-menu">Create a user</span>
                    </router-link>
                    </li>
                    <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">Orders</span>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/orders/list" aria-expanded="false">
                        <span>
                            <i class="ti ti-article"></i>
                        </span>
                        <span class="hide-menu">Orders List</span>
                    </router-link>
                    </li>
                    <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">Settings</span>
                    </li>
                    <li class="sidebar-item">
                    <router-link class="test" to="/admin/settings" aria-expanded="false">
                        <span>
                            <i class="ti ti-settings-2"></i>
                        </span>
                        <span class="hide-menu">Settings</span>
                    </router-link>
                    </li>
                </ul>
                </nav>
            </div>
        </aside>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name : 'SideNav',
    methods : {
        ...mapActions('authModule', ['logout']),
    }
}
</script>

<style scoped>
.test{
    color:#2A3547;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    font-size:14px;
    white-space:nowrap;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    line-height:25px;
    position:relative;
    margin:0px 0px 2px;
    padding:10px;
    border-radius:7px;
    gap:15px;
    font-weight:400
}
.test span:first-child{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex
}
.test .ti{-ms-flex-negative:0;flex-shrink:0;font-size:21px}
.test:hover{background-color:rgba(93,135,255,0.1);color:#5D87FF}

li .router-link-exact-active{
    background-color:rgba(93,135,255,0.1);
    color:#5D87FF;
}
</style>