<template>
  <header>
    <MainNavigation />
  </header>

  <main style="padding: 20px;">
    <h2>02 - DataFilter</h2>
    <DataFilter />

    <hr style="margin: 30px 0;" />

    <h2>03 - UserForm</h2>
    <UserForm />
  </main>
</template>

<script setup>
import MainNavigation from './components/MainNavigation.vue'
import DataFilter from './components/DataFilter.vue'
import UserForm from './components/UserForm.vue'
</script>