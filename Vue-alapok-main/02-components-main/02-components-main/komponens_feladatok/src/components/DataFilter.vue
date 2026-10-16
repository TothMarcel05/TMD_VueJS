<template>
  <div class="data-filter">
    <input type="text" v-model="searchQuery" placeholder="Keresés..." />
    <ul>
      <li v-for="item in filteredData" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const data = ref([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Smith' },
  { id: 4, name: 'Sarah Johnson' },
])

const searchQuery = ref('')

const filteredData = computed(() => {
  return data.value.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

watch(searchQuery, (newValue) => {
  console.log('Új keresési érték:', newValue)
})
</script>
