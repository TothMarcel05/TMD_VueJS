const {createApp, ref, watch} = Vue;

//const app = Vue.createApp({
const app = createApp({
    setup() {
        let price= ref(0);
        let myMoney= ref(5);
        const errorMessage= ref(null);


        function increasePrice() {
            price.value++;

        }
        function decreasePrice() {
            price.value--;
        }

        function formattedPrice() {
            return price.value.toLocaleString('hu-HU', {
                style: 'currency', 
                currency: 'EUR' });
        }

        watch(price, () => {
            errorMessage.value = price.value > myMoney.value ? "You don't have enough money!" : null;
        });

        return { 
            price, 
            increasePrice, 
            decreasePrice, 
            formattedPrice, 
            errorMessage, 
            myMoney
        };
    }
});

app.mount('#appdiv');