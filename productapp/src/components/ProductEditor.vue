<template>
    <div>
        <editor-field label="ID" editorFor="id"/>
        <editor-field label="Name" editorFor="name"/>
        <editor-field label="Price" editorFor="price"/>
        <div>

            <button class="btn btn-primary" v-on:click="save">
                {{ editing ? "Save" : "Create" }}
            </button>
            <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
        </div>

    </div>

</template>
<script>
import EditorField from './EditorField.vue';
import Vue from "vue";
export default {
    components: { EditorField },
    data: function () {
        return {
            editing: false,
            product: {
                id: 0,
                name: "",
                price: 0,
            },
            localBus: new Vue()
        }
    },
    methods: {
        startEdit(product) {
            console.log(`start edit`);
            console.log(product);
            this.editing = true;
            this.product = {
                id: product.id,
                name: product.name,
                price: product.price
            }
        },
        startCreate() {
            console.log(`stare create`);
            this.editing = false;
            this.product = {
                id: 0,
                name: "",
                price: 0
            }
        },
        save() {
            console.log(`save`);

            this.eventBus.$emit("complete", this.product);

            console.log(`End editing: ${JSON.stringify(this.product)}`);
            this.startCreate();
        },
        cancel() {
            console.log(`cancel`);
            this.product = {};
            this.editing = false;
        }
    },
    inject: ["eventBus"],
    provide: function(){
        return {
            editingEventBus: this.localBus
        }
    },
    created(){
        this.eventBus.$on("create", this.startCreate);
        this.eventBus.$on("edit", this.startEdit);
        this.localBus.$on("change", (change) => this.product[change.name] = change.value);
    },
    watch:{
        product(newValue, oldValue){
            console.log(`watch product new: ${newValue}, old: ${oldValue}`);
            console.log("target:")
            console.log(oldValue);
            console.log(newValue);
            this.localBus.$emit("target", newValue);
        }
    }
}
</script>