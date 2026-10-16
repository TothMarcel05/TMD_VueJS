<script setup>
import { useUserStore } from './store/user'

const { users, fetchUsers, removeUser } = useUserStore()

try {
  fetchUsers()
} catch (error) {
  console.error('Error fetching users:', error)
}

async function handleDeleteClick(userId) {
  try {
    const confirmDelete = confirm('Are you sure you want to delete this user?')
    if (confirmDelete) 
    {
      await removeUser(userId)
    }
    
  } catch (error) {
    console.error('Error deleting user:', error)
  }
}
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
        <td>{{ user.email }}</td>
        <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger" @click="handleDeleteClick(user.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
