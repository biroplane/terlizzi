import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "default",
      auth: true
    },
    component: Home
  },
  {
    path: "/store",
    name: "store",
    component: () =>
      import(/* webpackChunkName: "store" */ "../views/StoreLocator.vue"),
    meta: {
      layout: "default",
      auth: true
    }
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "custom",
      auth: false
    },
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Login.vue")
  },
  {
    path: "/signin",
    name: "signin",
    meta: {
      layout: "custom",
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/SignIn.vue")
  },
  {
    path: "/news",
    name: "addnews",
    meta: {
      layout: "custom",
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AddNews.vue")
  },
  {
    path: "/logout",
    name: "logout",
    beforeEnter: async (to, from, next) => {
      try {
        await firebase.auth().signOut();

        return next("/");
      } catch (error) {
        console.error("errore di signOut");
      }
    }
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
