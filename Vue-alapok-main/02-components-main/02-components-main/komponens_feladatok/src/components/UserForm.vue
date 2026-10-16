<template>
  <div class="user-form">
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Username:</label>
        <input type="text" v-model="username" />
        <p v-if="usernameError" class="error">{{ usernameError }}</p>
      </div>

      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
        <p v-if="passwordError" class="error">{{ passwordError }}</p>
      </div>

      <div>
        <label>Confirm Password:</label>
        <input type="password" v-model="confirmPassword" />
        <p v-if="confirmPasswordError" class="error">{{ confirmPasswordError }}</p>
      </div>

      <button type="submit">Küldés</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const usernameError = computed(() => {
  if (username.value.length < 5 || username.value === password.value) {
    return 'Username must be at least 5 characters long and different from password'
  }
  return ''
})

const passwordError = computed(() => {
  if (password.value.length < 8 || (username.value && password.value === username.value)) {
    return 'Password must be at least 8 characters long and different from username'
  }
  return ''
})

const confirmPasswordError = computed(() => {
  if (confirmPassword.value.length < 8 || confirmPassword.value !== password.value) {
    return 'Confirm password must be at least 8 characters long and match with password'
  }
  return ''
})

const handleSubmit = () => {
  if (!usernameError.value && !passwordError.value && !confirmPasswordError.value) {
    alert(`Sikeres beküldés!\nUsername: ${username.value}\nPassword: ${password.value}`)

    username.value = ''
    password.value = ''
    confirmPassword.value = ''
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
