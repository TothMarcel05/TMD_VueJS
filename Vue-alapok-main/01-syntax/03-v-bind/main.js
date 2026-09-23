const app = Vue.createApp({
    setup() {
        const title_ = "This is a title";
        return { title_ };
    }
});

app.mount('#appdiv');