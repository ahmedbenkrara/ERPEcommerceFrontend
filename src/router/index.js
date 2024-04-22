import { createRouter, createWebHistory } from 'vue-router'
import MainClientView from '../views/MainClientView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotView from '../views/ForgotView.vue'
import ContactView from '../views/ContactView.vue'
import ModuleView from '../views/ModuleView.vue'
import PacksView from '../views/PacksView.vue'
import AboutView from '../views/AboutView.vue'
import ModuleDetailsView from '../views/ModuleDetailsView.vue'
import PackDetailsView from '../views/PackDetailsView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AccountView from '../views/AccountView.vue'
import AccountDetailsView from '../views/AccountDetailsView.vue'
import PasswordView from '../views/PasswordView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import TestView from '../views/TestView.vue'

//Admin
import MainAdminView from '@/views/Admin/MainAdminView.vue'
import DashboardView from '@/views/Admin/DashboardView.vue'

import CreateModuleView from '@/views/Admin/Modules/CreateModuleView.vue'
import ModulesListView from '@/views/Admin/Modules/ModulesListView.vue'
import EditModuleView from '@/views/Admin/Modules/EditModuleView.vue'

import CreatePackageView from '@/views/Admin/Packages/CreatePackageView.vue'
import PackagesListView from '@/views/Admin/Packages/PackagesListView.vue'
import EditPackageView from '@/views/Admin/Packages/EditPackageView.vue'

import CreateUserView from '@/views/Admin/Users/CreateUserView.vue'
import UsersListView from '@/views/Admin/Users/UsersListView.vue'
import EditUserView from '@/views/Admin/Users/EditUserView.vue'

import OrdersListView from '@/views/Admin/Orders/OrdersListView.vue'
import OrderDetailsView from '@/views/Admin/Orders/OrderDetailsView.vue'
import ProfileView from '@/views/Admin/ProfileView.vue'
import SettingsView from '@/views/Admin/SettingsView.vue'


//Guards
import guest from '@/guards/guestGuard'
import user from '@/guards/userGuard'
import admin from '@/guards/adminGuard'
import checkout from '@/guards/checkoutGuard'
import packageGuard from '@/guards/Before/packageGuard'
import moduleGuard from '@/guards/Before/moduleGuard'
import editUserGuard from '@/guards/Before/EditUserGuard'
import orderGuard from '@/guards/Before/OrderGuard'

const routes = [
  // {
  //   path : '/login',
  //   component : LoginView,
  //   beforeEnter : guest
  // },
  // {
  //   path : '/register',
  //   component : RegisterView,
  //   beforeEnter : guest
  // },
  {
    path : '/test',
    component : TestView
  },
  {
    path : '/forgot',
    component : ForgotView
  },
  {
    path : '/',
    redirect : '/home'
  },
  {
    path : '/account',
    redirect : '/account/profile'
  },
  {
    path : '/admin',
    redirect : '/admin/dashboard'
  },
  {
    path: '/',
    name: 'main',
    component: MainClientView,
    children : [
      {
        path : 'home',
        component : HomeView
      },
      {
        path : 'login',
        component : LoginView,
        beforeEnter : guest
      },
      {
        path : 'register',
        component : RegisterView,
        beforeEnter : guest
      },
      {
        path : 'contact',
        component : ContactView
      },
      {
        path : 'modules',
        component : ModuleView
      },
      {
        path : 'packages',
        component : PacksView
      },
      {
        path : 'about',
        component : AboutView
      },
      {
        path : 'module/:id/:slug',
        component : ModuleDetailsView
      },
      {
        path : 'package/:id/:slug',
        component : PackDetailsView
      },
      {
        path : 'cart',
        component : CartView
      },
      {
        path : 'checkout',
        component : CheckoutView,
        beforeEnter : checkout
      },
      {
        path : '/account',
        component : AccountView,
        beforeEnter : user,
        children : [
          {
            path : 'profile',
            component : AccountDetailsView,
          },
          {
            path : 'password',
            component : PasswordView
          },
          {
            path : 'favorite',
            component : FavoriteView
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    name: 'adminmain',
    component: MainAdminView,
    beforeEnter : admin,
    children : [
      {
        path : 'dashboard',
        component : DashboardView
      },
      {
        path : 'module/create',
        component : CreateModuleView
      },
      {
        path : 'modules/list',
        component : ModulesListView
      },
      {
        path : 'module/edit/:id',
        component : EditModuleView,
        beforeEnter : moduleGuard
      },
      {
        path : 'package/create',
        component : CreatePackageView
      },
      {
        path : 'packages/list',
        component : PackagesListView
      },
      {
        path : 'package/edit/:id',
        component : EditPackageView,
        beforeEnter : packageGuard
      },
      {
        path : 'users/list',
        component : UsersListView
      },
      {
        path : 'user/create',
        component : CreateUserView
      },
      {
        path : 'user/edit/:id',
        component : EditUserView,
        beforeEnter : editUserGuard
      },
      {
        path : 'orders/list',
        component : OrdersListView
      },
      {
        path : 'order/:id',
        component : OrderDetailsView,
        beforeEnter : orderGuard
      },
      {
        path : 'profile',
        component : ProfileView
      },
      {
        path : 'settings',
        component : SettingsView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    var link = window.location.href
    if(link.indexOf('#') != -1){
      var elm = document.getElementById(link.split('#')[1])
      if(elm != undefined){
        elm.scrollIntoView({
          behavior:'smooth'
        })
      }
    }
  }
})

export default router
