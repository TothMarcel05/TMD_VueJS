<script setup>
import { ref } from 'vue';

    defineEmits(['on-input']);

    const name = ref('');
</script>

<template>
    <input 
        v-model="name"
        type="text" 
        placeholder="Enter your name" 
        @input="$emit('on-input', name)" />
</template>

<style scoped>
</style>
