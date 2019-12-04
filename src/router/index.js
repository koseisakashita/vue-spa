import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/addresses",
    name: "addresses",
    component: () => import("../views/Addresses.vue")
  },
  {
    path: "/addresses/:address_id?/edit",
    name: "address_edit",
    component: () => import("../views/AddressForm.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
