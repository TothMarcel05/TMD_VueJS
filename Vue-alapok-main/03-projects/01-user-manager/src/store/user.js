import { deleteUser, getUsers, updateUser, createUser } from '../../apis/userAPI.js'
import { ref } from 'vue'
const users = ref([])

export function useUserStore() {
  async function fetchUsers() {
    users.value = await getUsers()
  }

  async function removeUser(id) {
    await deleteUser(id)
    users.value = users.value.filter((user) => user.id !== id)
  }

  //update
  async function modifyUser(updatedUser) {
    const {id, ...userData} = updateUser
    const response = await updatedUser(id, userData)
    users.value = users.value.map(user => user.id === id ? response : user)
  }

  //create - post
  async function addUser(user) {
    const response = await createUser(user)
    users.value = [...users.value, response]
  }

  return {
    users,
    fetchUsers,
    removeUser,
    modifyUser,
    addUser
  }
}
