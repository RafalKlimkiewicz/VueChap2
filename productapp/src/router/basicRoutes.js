import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";
import Preferences from "../components/PreferencesComponent";
import Products from "../components/ProductsComponent";

export default [
    {
        path: "/preferences",
        component: Preferences
    },
    {
        path: "/products",
        component: Products,
        children:
            [
                {
                    name: "table",
                    path: "list",
                    component: ProductDisplay,
                },
                {
                    name: "editor",
                    path: "/:op(create|edit)/:id(\\d+)?",
                    component: ProductEditor
                },
                {
                    path: "",
                    redirect: "list"
                }
            ]
    },
    {
        path: "/edit/:id",
        redirect: to => `/products/edit/${to.params.id}`
    }
]