<template>
  <div class="bg-secondary text-white text-center m-2 p-2 h5">
    {{ message }}
    <ChildComponenet />
    <child-componenet />
    <MyFeature labelText="Name props" initialValue="initial value props"/>
    <my-feature label-text="Name props" initial-value="initial value props"/>
    <child-global-component />
  </div>
</template>

<script>
import ChildComponenet from "./components/ChildComponent";
export default {
  name: 'App',
  components: {
    ChildComponenet,
    MyFeature: ChildComponenet,
  },
  data: function(){
    return {
      message: "PARENT MESSAGE"
    }
  }
}
</script>