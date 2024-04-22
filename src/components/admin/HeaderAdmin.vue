<template>
    <header class="app-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item d-block d-xl-none">
              <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i class="ti ti-menu-2"></i>
              </a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                <i class="ti ti-bell-ringing"></i>
                <div class="notification bg-primary rounded-circle"></div>
              </a>
            </li> -->
          </ul>
          <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <!-- <a href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/" target="_blank" class="btn btn-primary">Download Free</a> -->
              <li class="nav-item dropdown">
                <a class="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img src="@/assets/images/profile/user-1.jpg" alt="" width="35" height="35" class="rounded-circle">
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div class="message-body">
                    <router-link to="/admin/profile" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-user fs-6"></i>
                      <p class="mb-0 fs-3">My Profile</p>
                    </router-link>
                    <router-link to="/admin/settings" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-settings-2 fs-6"></i>
                      <p class="mb-0 fs-3">Settings</p>
                    </router-link>
                    <button @click="logout()" class="btn btn-outline-primary mx-3 mt-2 d-block">Logout</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name : 'HeaderAdmin',
    methods : {
      ...mapActions('authModule', ['logout']),
    },
    mounted(){
        const script1 = document.createElement('script');
      script1.src = 'https://themewagon.github.io/Modernize/src/assets/libs/jquery/dist/jquery.min.js';
      script1.async = false;
      script1.type = 'text/javascript';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://themewagon.github.io/Modernize/src/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js';
      script2.async = false;
      script2.type = 'text/javascript';
      document.head.appendChild(script2);

      const script3 = document.createElement('script');
      script3.src = 'https://themewagon.github.io/Modernize/src/assets/js/sidebarmenu.js';
      script3.async = false;
      script3.type = 'text/javascript';
      document.head.appendChild(script3);

      const script4 = document.createElement('script');
      script4.src = 'https://themewagon.github.io/Modernize/src/assets/js/app.min.js';
      script4.async = false;
      script4.type = 'text/javascript';
      document.head.appendChild(script4);

      const script5 = document.createElement('script');
      script5.src = 'https://themewagon.github.io/Modernize/src/assets/libs/apexcharts/dist/apexcharts.min.js';
      script5.async = false;
      script5.type = 'text/javascript';
      document.head.appendChild(script5);

      const script6 = document.createElement('script');
      script6.src = 'https://themewagon.github.io/Modernize/src/assets/libs/simplebar/dist/simplebar.js';
      script6.async = false;
      script6.type = 'text/javascript';
      document.head.appendChild(script6);

      const script7 = document.createElement('script');
      script7.src = 'https://themewagon.github.io/Modernize/src/assets/js/dashboard.js';
      script7.async = false;
      script7.type = 'text/javascript';
      document.head.appendChild(script7);

      const script8 = document.createElement('link');
      script8.href = 'https://themewagon.github.io/Modernize/src/assets/css/styles.min.css';
      script8.async = false;
      script8.rel = 'stylesheet';
      document.head.appendChild(script8);
    }
}
</script>