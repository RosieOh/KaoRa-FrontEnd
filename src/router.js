import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Board from "./views/Board.vue";
import Cafe from "./views/Cafe.vue";
import Contact from "./views/Contact.vue";
import QnA from "./views/QnA.vue";
import Faq from "./views/Faq.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/board",
      name: "board",
      components: {
        header: AppHeader,
        default: Board,
        footer: AppFooter
      }
    },
    {
      path: "/cafe",
      name: "cafe",
      components: {
        header: AppHeader,
        default: Cafe,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/qna",
      name: "qna",
      components: {
        header: AppHeader,
        default: QnA,
        footer: AppFooter
      }
    },
    {
      path: "/faq",
      name: "faq",
      components: {
        header: AppHeader,
        default: Faq,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
