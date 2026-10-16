<template>
  <nav class="main-nav">
    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <a :href="item.url" target="_blank">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref([
  { text: 'Vue.js', url: 'https://vuejs.org/' },
  { text: 'React', url: 'https://reactjs.org/' },
  { text: 'Angular', url: 'https://angular.io/' },
  { text: 'Svelte', url: 'https://svelte.dev/' },
])
</script>

<style scoped>
.main-nav {
  background-color: #333;
  padding: 1rem;
}
.main-nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}
.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.main-nav a:hover {
  color: #42b883;
}
</style>
