const app = Vue.createApp({
    setup() {
        const guitars = [ 
            { id: 1, name: "Fender Stratocaster", stock: 0 },
            { id: 2, name: "Gibson Les Paul", stock: 3 },
            { id: 3, name: "Ibanez RG", stock: 5 },
            { id: 4, name: "ESP Eclipse", stock: 0 },
            { id: 5, name: "PRS Custom 24", stock: 2 }

        ];

        const outOfStock = "red";
        const OnlyFewLeftColor = "orange";
        const inStockColor = "light-green",


        return { guitars, outOfStock, OnlyFewLeftColor, inStockColor };
    }
});

app.mount('#appdiv');