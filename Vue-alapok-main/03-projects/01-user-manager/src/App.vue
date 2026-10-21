<script setup>
import { useUserStore } from './store/user'
import UsersTable from './components/UsersTable.vue'

const {  fetchUsers } = useUserStore()

try {
  fetchUsers()
} catch (error) {
  console.error('Error fetching users:', error)
}

</script>

<template>
<div class="container">
  <UsersTable/>
</div>
    
</template>

<style scoped></style>
