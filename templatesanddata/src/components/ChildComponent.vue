<template>
    <div class="bg-primary text-white text-center m-2 p-2 h6">
        {{ message }}
        <div class="form-group m-1 text-left">
            <label>{{ labelText }}</label>
            <input v-model="message" class="form-control" />
        </div>
    </div>
</template>

<script>
export default{
    props: ["labelText", "initialValue"],
    data: function(){
        return {
            message: this.initialValue
        }
    }
}
</script>