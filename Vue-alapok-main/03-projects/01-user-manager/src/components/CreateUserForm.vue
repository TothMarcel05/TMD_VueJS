<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '../../store/user.js'

const { addUser } = useUserStore()
const isFormVisible = ref(false)
const createUserForm = ref()

const userFormDataInitialState ={
  firstName: '',
  lastName: '',
  emailAdress: ''
}
const userFormData = reactive({...userFormDataInitialState})

function showForm() {
  isFormVisible.value = true
}

async function handleSaveClick() {
  try {
    if (createUserForm.value.checkValidity()) {
        await addUser(userFormData)
        Object.assign(userFormData, userFormDataInitialState)
    }
     isFormVisible.value = false
  } catch (error) {
    alert(error)
  }
}

function handleCancelClick() {
  isFormVisible.value = false
}

</script>
<template>
  <button @click="showForm">Creat new User</button>
  <form 
  v-show="isFormVisible" 
  ref="createUserForm"
  action="">
    <div class="mb-3">
      <label for="firstName">First Name</label>
      <input class="form-control" type="text" name="firstName" id="firstName" 
      v-model="userFormData.firstName" required />
    </div>

    <div class="mb-3">
      <label for="lastName">Last Name</label>
      <input class="form-control" type="text" name="lastName" id="lastName" 
      v-model="userFormData.lastName" required />
    </div>

    <div class="mb-3">
      <label for="emailAdress">Email</label>
      <input class="form-control" type="email" name="emailAdress" id="emailAdress" 
      v-model="userFormData.emailAdress" required />
    </div>

    <div class="mb-3">
        <button type="button" class="btn btn-primary" @click="handleSaveClick">Save</button>
        <button type="button" class="btn btn-secondary" @click="handleCancelClick">Cancel</button>
    </div>
  </form>
</template>
