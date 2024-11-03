<template>
    <div class="form-group">
        <label>{{ formattedLabel }}</label>
        <input v-model.number="value" class="form-control" v-bind:class="[colors.bg, colors.text]" />
    </div>

</template>
<script>
export default {
    props: ["label"],
    data: function () {
        return {
            value: "",
            formattedLabel: this.format(this.label)
        }
    },
    inject: {
        colors: "colors",
        format: {
            from: "labelFromatter",
            default: () => (value) => `Default ${value}`
        }
    }
}
</script>