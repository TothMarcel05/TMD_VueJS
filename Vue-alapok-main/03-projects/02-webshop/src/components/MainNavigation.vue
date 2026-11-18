<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <nav class="nav">
        <ul class="nav-list">
            <li>
                <!-- <a href="http://"></a> -->
                 <router-link :to="{name: 'guitarsList'}">Guitars</router-link>
            </li>
            <li>
                 <router-link :to="{name: 'cart'}">Cart</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav{
    background: var(--dark);
}

.nav_list{
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;
}
</style>