const {createApp, ref} = Vue;

//const app = Vue.createApp({
const app = createApp({
    setup() {
        let price= Vue.ref(0);

        function increasePrice() {
            price.value++;
            console.log(price.value);
        }
        function decreasePrice() {
            price.value--;
            console.log(price.value);
        }

        function formatPrice() {
            return price.value.toLocaleString('hu-HU', {
                style: 'currency', 
                currency: 'EUR' });
        }

        return { price, increasePrice, decreasePrice, formatPrice };
    }
});

app.mount('#appdiv');