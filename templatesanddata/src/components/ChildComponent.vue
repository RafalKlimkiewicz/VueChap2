<template>
    <div class="bg-primary text-white text-center m-2 p-2 h6">
        <slot name="header">
            <h4>Use this form to change data</h4>
        </slot>
        <div class="form-group m-1 text-left">
            <label>Name</label>
            <input v-model="product.name" class="form-control" />
        </div>
        <div class="form-group m-1 text-left">
            <label>Category</label>
            <input v-model="product.category" class="form-control" />
        </div>
        <div class="form-group m-1 text-left">
            <label>Price</label>
            <input v-model="product.price" class="form-control" />
        </div>
        <slot name="footer"></slot>
        <div class="m-2">
            <button class="btn btn-info" v-on:click="doSubmit">Send</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["initialProduct"],
    data: function () {
        return {
            product: this.initialProduct || {}
        }
    },
    methods: {
        doSubmit() {
            this.$emit("productSubmit", this.product);
        }
    }
}
</script>