import Vue from "vue";
import VueRouter from "vue-router";

import basicRoutes from "./basicRoutes";
import sideBySideRoutes from "./sideBySideRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        ...basicRoutes,
        sideBySideRoutes,
        {
            path: "*",
            redirect: "/products/list"
        }
    ]
});

export default router;

router.beforeEach((to, from, next) =>{
    if(to.path == "/preferences" && from.path.startsWith("/named")){
        next(false);
    }else{
        next();
    }
});

router.beforeEach((to, from, next) =>{
    if(to.path == "/named/tableright"){
        next("/products");
    }else{
        next();
    }
});