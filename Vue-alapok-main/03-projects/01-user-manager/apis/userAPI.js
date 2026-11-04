import apiClient from "../utils/apiClients.js";

const urlFragment = "users";

export async function getUsers() {
    const response = await apiClient.get(urlFragment);
    return response.data;
}

// delete
export async function deleteUser(id) {
    const response = await apiClient.delete(`${urlFragment}/${id}`);
}

//update
export async function updateUser(userId, updatedUser) {
    const {id, ...userData} = updatedUser
    const response = await apiClient.put(`${urlFragment}/${userId}`, userData)
    return response.data;
}

// post - create
export async function createUser(newUser) {
    const response = await apiClient.post(urlFragment, newUser)
    return response.data;
}

