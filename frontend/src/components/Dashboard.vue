<template>
  <div>
    <h1>User Dashboard</h1>
    <ul>
      <li><b>Username:</b> {{ user.username }}</li>
      <li><b>Email:</b> {{ user.email }}</li>
      <li><b>Is User Confirmed:</b> {{ user.confirmed }}</li>
      <li><b>Is User Blocked: </b>{{ user.blocked }}</li>
      <li><b>Provider:</b> {{ user.provider }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: "dashboard",
  setup() {
    const user = ref({});

    onMounted(() => {
      const jwtPayload = JSON.parse(localStorage.getItem("user"));
      user.value = jwtPayload;
    });

    return {
      user
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none !important;
  padding: 0;
}
</style>

