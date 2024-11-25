import Vue from "vue";
import Router from "vue-router";
import SimpleDisplay from "../components/SimpleDisplay.vue";
import ListMaker from "../components/ListMaker.vue";
import Numbers from "../components/NumbersDisplay.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/display", component: SimpleDisplay },
        { path: "/list", component: ListMaker },
        { path: "/numbers", component: Numbers },
        { path: "*", redirect: "/display" }
    ]
})