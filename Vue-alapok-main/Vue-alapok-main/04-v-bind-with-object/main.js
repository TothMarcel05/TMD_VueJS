const app = Vue.createApp({
    setup() {
        // const src_ = "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
        // const alt_ = "Vue.js Logo";
        // const width_ = 200;
        
        const logoobject = {
            src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            alt: "Vue.js Logo",
            width: 200
        };
        return { logoobject};
    }
});

app.mount('#appdiv');