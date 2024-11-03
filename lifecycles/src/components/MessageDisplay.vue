<template>
    <div class="bg-dark text-light text-center p-2">
        <div>
            Counter state: {{ counter }}
        </div>
        <button class="btn btn-secondary" v-on:click="handleClick">
            Increase
        </button>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            counter: 0
        }
    },
    created: function () {
        console.log(`MessageDisplay: created`);
    },
    beforeDestroy: function () {
        console.log(`MessageDisplay: beforeDestroy`);
    },
    destroyed: function () {
        console.log(`MessageDisplay: destroyed`);
    },
    methods: {
        handleClick() {
            this.counter++;
        }
    }
}
</script>