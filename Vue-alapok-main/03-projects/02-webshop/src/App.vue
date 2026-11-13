<script setup>
import { useGuitarStore} from './store/guitars.js'
import { onMounted } from 'vue';


const {guitars, fetchGuitars} = useGuitarStore()

onMounted(async() => {
  await fetchGuitars()
  console.log(guitars.value)
})
</script>

<template>
<div></div>
</template>

<style scoped>

</style>
