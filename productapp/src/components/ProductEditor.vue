<template>
    <div>
        <editor-field label="ID" />
        <editor-field label="Name" />
        <editor-field label="Price" />
        <div>

            <button class="btn btn-primary" v-on:dblclick="save">
                {{ editing ? "Save" : "Create" }}
            </button>
            <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
        </div>

    </div>

</template>
<script>
import EditorField from './EditorField.vue';
export default {
    components: { EditorField },
    data: function () {
        return {
            editing: false,
            product: {
                id: 0,
                name: "",
                price: 0,
            }
        }
    },
    methods: {
        startEdit(product) {
            this.editing = true;
            this.product = {
                id: product.id,
                name: product.name,
                price: product.price
            }
        },
        startCreate() {
            this.editing = false;
            this.product = {
                id: 0,
                name: "",
                price: 0
            }
        },
        save() {
            //TODO 
            console.log(`End editing: ${JSON.stringify(this.product)}`);
            this.startCreate();
        },
        cancel() {
            this.product = {};
            this.editing = false;
        }
    }

}
</script>