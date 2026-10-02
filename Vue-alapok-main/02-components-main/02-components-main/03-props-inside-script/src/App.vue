<script setup>
    import { ref } from 'vue';

    import MainNavigation from './components/MainNavigation.vue';
    import SiteFooter from './components/SiteFooter.vue';
    import SiteContent from './components/SiteContent.vue';
    import InputField from './components/InputField.vue';

    const title = ref('VUE')

    setTimeout(() => {
        title.value = 'REACT'
    }, 3000);

    function logMessage(name) {
        // console.log('Input field changed!', name);
        console.log(name);
    }
</script>

<template>
    <header>
        <MainNavigation :title="title" />
        <!-- <MainNavigation /> -->
    </header>

    <main>
        <SiteContent />
        <InputField @on-input="logMessage"/>
    </main>


    <footer>
        <!-- sitefooter komponens használata -->
        <SiteFooter />
    </footer>

</template>

<style scoped>
</style>
