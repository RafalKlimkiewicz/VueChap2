<template>
    <div>
        <h3 class="btn-primary text-center text-white p-2">
            {{ editing ? "Edit" : "Create" }}
        </h3>
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
            <router-link to="/" class="btn btn-secondary">Cancel</router-link>
        </div>
    </div>

</template>
<script>
let unwatcher;
export default {
    data: function () {
        return {
            editing: false,
            product: {}
        }
    },
    methods: {
        async save() {
            await this.$store.dispatch("saveProductAction", this.product)
            this.$store.push("/");
            this.product = {};
        },
        selectProduct(){
            if (this.$route.path == "/create") {
                    this.editing = false;
                    this.product = {};
                } else {
                    let productId = this.$route.params.id;
                    let selectedProduct = this.$store.state.products.find(p => p.id == productId);
                    this.editing = true;
                    this.product = {};

                    Object.assign(this.product, selectedProduct);
                }
        }
    },
    created() {
        unwatcher = this.$store.watch(state => state.products, this.selectProduct);

        this.selectProduct();
    },
    beforeDestroy(){
        unwatcher();
    }
}
</script>