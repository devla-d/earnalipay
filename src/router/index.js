import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import RoadMap from "@/views/RoadmapView.vue";
import CustomerView from "@/views/CustomerView.vue";
import FaqView from "@/views/FaqView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      showChat: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/roadmap",
    name: "roadmap",
    component: RoadMap,
  },
  {
    path: "/customer",
    name: "customer",
    component: CustomerView,
  },
  {
    path: "/faq",
    name: "faq",
    component: FaqView,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/LoginView.vue"),
  },
  {
    path: "/sign-up",
    name: "signup",
    component: () => import("@/views/auth/RegisterView.vue"),
  },

  {
    path: "/forgot-password",
    name: "forgotpassword",
    component: () => import("@/views/auth/ForgotPassword.vue"),
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/users/DashboardView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/withdraw-funds",
    name: "withdrawal",
    component: () => import("@/views/users/WithdrawView.vue"),
    meta: {
      requiredAuth: true,
    },
  },

  {
    path: "/transaction-history",
    name: "transactions",
    component: () => import("@/views/users/TransactionView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/account-settings",
    name: "settings",
    component: () => import("@/views/users/SettingView.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/create-investment/",
    name: "createinvest",
    component: () => import("@/views/users/CreateInvest.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/404",
    name: "notfound",
    component: () => import("@/views/404.vue"),
  },
  //{ path: '*', redirect: '/404' },
  {
    path: "/admin-login/",
    name: "adminlogin",
    component: () => import("@/views/auth/AdminLogin.vue"),
  },
  {
    path: "/reset-password/",
    name: "resetPassword",
    component: () => import("@/views/auth/ResetPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //  window.tidioChatApi &&
  //     window.tidioChatApi.display(to.meta.showChat);
  if (!to.matched.length) {
    next("/404");
  } else {
    if (to.matched.some((record) => record.meta.requiredAuth)) {
      if (localStorage.getItem("token") == null) {
        next("/login/");
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

export default router;
