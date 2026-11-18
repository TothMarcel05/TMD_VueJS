<script setup>
import { useGuitarStore} from './store/guitars.js'
import MainNavigation from './components/MainNavigation.vue';
import { onMounted } from 'vue';


const {guitars, fetchGuitars} = useGuitarStore()

onMounted(async() => {
  await fetchGuitars()
  console.log(guitars.value)
})
</script>

<template>
<div>
  <MainNavigation/>
  <main>
    
  </main>
</div>
</template>

<style scoped>

</style>
