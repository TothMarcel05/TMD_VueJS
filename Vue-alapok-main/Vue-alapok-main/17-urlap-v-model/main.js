const app = Vue.createApp({
    setup() {
        const name = Vue.ref('')

        // setTimeout(() => {
        //     name.value = 'Marcel'
        // }, 2000);

        function updateName(event) {
            name.value = event.target.value;
        }

        return { 
            name,
            updateName
        };
    }
});

app.mount('#appdiv');