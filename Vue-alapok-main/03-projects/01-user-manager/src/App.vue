<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { getUsers } from '../apis/userAPI';

const users = ref([]);

onMounted(async () => {
  users.value = await getUsers();
});

</script>


<template>
<table class="table table-striped">
  <thead></thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email address</th>
      <th>-</th>
    </tr>

    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.emailAdress }}</td>
        <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>


    </tbody>


</table>
</template>

<style scoped>

</style>
