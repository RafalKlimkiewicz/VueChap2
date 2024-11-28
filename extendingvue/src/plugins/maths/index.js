import filters from "./filters";
import directives from "./directives";
import globals from "./globals";
import componentFeatures from "./componentFeatures";
import OperationComponent from "./OperationComponent";

export default {
    install: function (Vue) {
        Vue.filter("currency", filters.currency);
        Vue.filter("noDecimal", filters.noDecimal);
        Vue.directive("bordersize", directives.bordersize);
        Vue.component("mathsComponent", OperationComponent);
        Vue.sumValues = globals.sumValues;
        Vue.getSymbol = globals.getSymbol;
        Vue.prototype.$calc = componentFeatures.$calc;
    }
}
