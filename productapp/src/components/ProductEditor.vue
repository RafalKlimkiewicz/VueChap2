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
            <router-link to="/" class="btn btn-secondary">Cancel</router-link>
            <!-- <button class="btn btn-secondary" v-on:click="cancel">Cancel</button> -->
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
            //this.$store.commit("nav/selectComponent", "table");
            this.$store.push("/");
            this.product = {};
        },
        // cancel() {
        //     this.$store.commit("selectProduct");
        //     this.$store.commit("nav/selectComponent", "table");
        // },
        selectProduct(selectedProduct){
            if (selectedProduct == null) {
                    this.editing = false;
                    this.product = {};
                } else {
                    this.editing = true;
                    this.product = {};

                    Object.assign(this.product, selectedProduct);
                }
        }
    },
    created() {
        unwatcher = this.$store.watch(state => state.selectProduct, this.selectProduct);

        this.selectProduct(this.$store.state.selectedProduct);
    },
    beforeDestroy(){
        unwatcher();
    }
}
</script>