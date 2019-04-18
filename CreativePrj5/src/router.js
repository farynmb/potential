import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from './views/Register.vue';
import MyGratitude from './views/MyGratitude.vue';
import Login from './views/Login.vue';
import Entry from './components/Gratitude.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: '/mygratitude',
        name: 'mygratitude',
        component: MyGratitude,
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
 
//May need a path for comment here somewhere

      {
        path: '/login',
        name: 'login',
        component: Login
      }
    ]
  });
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     