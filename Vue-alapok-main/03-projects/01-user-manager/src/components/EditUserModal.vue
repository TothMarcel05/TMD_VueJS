<script setup>
import { defineProps, ref, watch } from 'vue'
import { useUserStore } from '../../store/user.js'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})
const closeButton = ref()

const userFormData = ref(props.user)
const { modifyUser } = useUserStore()

watch(
  () => props.user,
  (newUser) => {
    userFormData.value = { ...newUser }
  },
)

const handleSaveButtonClick = async () => {
  try {
    await modifyUser(userFormData.value)
    closeButton.value.click()
  } catch (error) {
    console.log('error modifying user:', error)
  }
}
</script>

<template>
  <div
    class="modal fade"
    id="editUserModal"
    tabindex="-1"
    aria-labelledby="EditUserModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fs-5" id="EditUserModalLabel">Modal title</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="mb-3">
              <label for="firstName">First Name</label>
              <input
                class="form-control"
                type="text"
                name="firstName"
                id="firstName"
                v-model="userFormData.firstName"
                required
              />
            </div>

            <div class="mb-3">
              <label for="lastName">Last Name</label>
              <input
                class="form-control"
                type="text"
                name="lastName"
                id="lastName"
                v-model="userFormData.lastName"
                required
              />
            </div>

            <div class="mb-3">
              <label for="emailAdress">E-mail</label>
              <input
                class="form-control"
                type="email"
                name="emailAdress"
                id="emailAdress"
                v-model="userFormData.emailAdress"
                required
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button ref="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="handleSaveButtonClick">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
