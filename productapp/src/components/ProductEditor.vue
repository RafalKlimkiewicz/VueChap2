<template>
    <div>
        <div class="form-group">
            <label>id</label>
            <input class="form-control" v-model="product.id" />
        </div>
        <div class="form-group">
            <label>name</label>
            <input class="form-control" v-model="product.name" />
        </div>
        <div class="form-group">
            <label>category</label>
            <input class="form-control" v-model="product.category" />
        </div>
        <div class="form-group">
            <label>price</label>
            <input class="form-control" v-model="product.price" />
        </div>

        <div class="text-center">
            <button class="btn btn-primary" v-on:click="save">
                {{ editing ? "Save" : "Create" }}
            </button>
            <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
        </div>
    </div>

</template>
<script>

export default {
    data: function () {
        return {
            editing: false,
            product: {}
        }
    },
    methods: {
        save() {
            this.$store.commit("saveProduct", this.product)
            this.product = {};
        },
        cancel() {
        }
    }
}
</script>