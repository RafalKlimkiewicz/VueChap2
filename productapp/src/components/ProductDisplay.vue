<template>
    <div>
        <table class="table table-sm table-stroped table-bordered">
            <tr>
                <th>ID</th>
                <th>Nazwa</th>
                <th>Cena</th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.price | currency }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
                            Edit
                        </button>
                    </td>
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
export default {
    data: function () {
        return {
            products: [
                { id: 0, name: "Boat", price: 275 },
                { id: 1, name: "Life Chest", price: 48.95 },
                { id: 2, name: "Soccer ball", price: 19.50 },
                { id: 3, name: "Corner flag", price: 39.95 },
                { id: 4, name: "Stadium", price: 79500 },
            ]
        }
    },
    filters: {
        currency(value) {
            return `${value.toFixed(2)} $`;
        }
    },
    methods: {
        createNew() {

        },
        editProduct(product) {
            console.log(product);
        }
    }
}
</script>
