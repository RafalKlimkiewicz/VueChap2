<template>
    <div>
        <table class="table table-sm table-bordered" v-bind:class="{ 'table-striped': useStripedTable }">
            <tr>
                <th>ID</th>
                <th>Nazwa</th>
                <th>Category</th>
                <th>Cena</th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price }}</td>
                    <td>
                        <router-link v-bind:to=" '/edit/' + p.id "  v-bind:class="editClass" class="btn btn-sm"> Edit </router-link>
                        <button class="btn btn-sm" v-bind:class="deleteClass" v-on:click="deleteProduct(p)">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr v-if="products.length == 0">
                    <td colspan="5" class="text-center">No data</td>
                </tr>
            </tbody>
        </table>

        <div class="text-center">
            <router-link to="/create" class="btn btn-primary">Create New</router-link>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

export default {
    computed: {
        ...mapState(["products"]),
        ...mapState({
            useStripedTable: state => state.prefs.stripedTable
        }),
        ...mapGetters({
            tableClass: "prefs/tableClass",
            editClass: "prefs/editClass",
            deleteClass: "prefs/deleteClass"
        })
    },
    methods: {
        editProduct(product) {
            this.selectProduct(product);
            //this.selectComponent("editor");
            this.$router.push("/edit");
        },
        createNew() {
            this.selectProduct();
            //this.selectComponent("editor");
            this.$router.push("/edit");
        },
        ...mapMutations({
            selectProduct: "selectProduct",
            //selectComponent: "nav/selectComponent",

            //editProduct: "selectProduct",
            //createNew: "selectProduct",
            setEditButtonColor: "prefs/setEditButtonColor",
            setDeleteButtonColor: "prefs/setDeleteButtonColor"
        }),
        ...mapActions({
            getProducts: "getProductsAction",
            deleteProducts: "deleteProductAction"
        })
    },
    created() {
        //this.getProducts();
        this.setEditButtonColor(true);
        this.setDeleteButtonColor(false);
    }
}
</script>
