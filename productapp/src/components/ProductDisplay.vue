<template>
    <div>
        <table class="table table-sm table-stroped table-bordered">
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
                        <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
                            Edit
                        </button>
                        <button class="btn btn-sm btn-danger" v-on:click="deleteProduct(p)">
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
            <button class="btn btn-primary" v-on:click="createNew">
                Create New
            </button>
        </div>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    computed:{
        products(){
            return this.$store.getters.filteredProducts(175);
        }
    },
    methods: {
        createNew() {
        },
        editProduct(product) {
        },
        deleteProduct(product) {
            this.$store.commit("deleteProduct", product);
        },
    }
}
</script>
