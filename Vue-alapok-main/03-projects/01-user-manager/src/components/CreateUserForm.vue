<script setup>
import { ref } from 'vue'
const isFormVisible = ref(false)

function showForm(){
    isFormVisible.value = true
}
</script>
<template>
    <button 
    v-show="isFormVisible"
    @click="showForm">Creat new User</button>
<form
v-show="isFormVisible"
 action=""> 
    <div class="mb-3">
        <label for="firstName">First Name</label>
        <input class="form-control" type="text" name="firstName" id="firstName" 
        v-model="userFormData.firstName" required>
    </div>

    <div class="mb-3">
        <label for="lastName">Last Name</label>
        <input class="form-control" type="text" name="lastName" id="lastName" 
        v-model="userFormData.lastName" required>
    </div>

    <div class="mb-3">
        <label for="emailAdress">Email</label>
        <input class="form-control" type="email" name="emailAdress" id="emailAdress" 
        v-model="userFormData.emailAdress" required>
    </div>
</form>
</template>