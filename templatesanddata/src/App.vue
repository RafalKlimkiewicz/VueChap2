<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Name: {{ name }}</div>
      <div>Has admin access: {{ hasAdminAccess }}</div>
      <div>Password: {{ password }}</div>
      <div>Details: {{ details }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Name</label>
        <input v-model="password" type="password" class="form-control" />
      </div>
      <div class="form-group">
        <label>Szczegóły</label>
        <textarea v-model="details" class="form-control" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "Rafal",
      password: "password",
      details: "Has administrator privileges",
      hasAdminAccess: false,
    }
  }
}
</script>