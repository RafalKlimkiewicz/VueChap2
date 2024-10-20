<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Name: {{ name }}</div>
      <div>Has admin access: {{ hasAdminAccess }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <input type="radio" v-model="name" value="Janek" class="form-check-input" />
        <label class="form-check-label">Janek</label>
      </div>
      <div class="form-check">
        <input type="radio" v-model="name" value="Alicja" class="form-check-input" />
        <label class="form-check-label">Alicja</label>
      </div>
      <div class="form-check">
        <input type="radio" v-model="name" value="Bodzio" class="form-check-input" />
        <label class="form-check-label">Bodzio</label>
      </div>
      <div class="form-check">
        <input type="checkbox" v-model="hasAdminAccess" class="form-check-input" />
        <label class="form-check-label">Has admin access?</label>
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
      hasAdminAccess: true,
    }
  }
}
</script>