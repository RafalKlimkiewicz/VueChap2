<template>
    <div class="mx-5 border borde-dark p-2">
        <h3 class="bg-warning text-white text-center p-2">Display</h3>
        <transition enter-active-class="fadeIn quick" leave-active-class="fadeOut quick" mode="out-in">
            <div v-if="show" class="animated h4 bg-info text-center p-2" key="hello">Hi, Adam</div>
            <div v-else class="animated h4 bg-info text-center p-2" key="goodbye">Bye, Adam</div>
        </transition>
        <div class="text-center">
            <button class="btn btn-primary" v-on:click="toggle">
                switch message
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            show: true
        }
    },
    methods: {
        toggle() {
            this.show = !this.show;
        }
    }
}
</script>
<style>
    .v-leave-active{
        opacity: 0;
        font-size: 0em;
        transition: all 250ms;
    }
    .v-enter{
        opacity: 0;
        font-size:0em;
    }
    .v-enter-to{
        opacity: 1;
        font-size: x-large;
        transition: all 250ms;
    }
    .quick{
        animation-duration: 250ms;
    }
</style>