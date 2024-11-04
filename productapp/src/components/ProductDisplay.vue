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
import Axios from "axios";
const baseUrl = "http://localhost:3500/products/";

export default {
    data: function () {
        return {
            products: []
        }
    },
    methods: {
        createNew() {
            this.eventBus.$emit("create");
        },
        editProduct(product) {
            this.eventBus.$emit("edit", product);
        },
        processProducts(newProducts) { //trick to make sure vue detects changes..
            this.products.splice(0);
            this.products.push(...newProducts);
        }
    },
    inject: ["eventBus"],
    created() {
        Axios.get(baseUrl).then(resp => {
            console.log(`Response HTTP: ${resp.status}, ${resp.statusText}`);
            console.log(`Data response: ${resp.data.length} elements`);
            this.processProducts(resp.data);
        });
    }
}
</script>
