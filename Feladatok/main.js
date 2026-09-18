const app = Vue.createApp({
  setup() {
    const formData = Vue.reactive({
      name: "",
    });

    function handleSubmit() {
      console.log(formData);
      console.log(`Name: ${formData.name}`);
      document.getElementById("userform").delete();
    }

    return {
      formData,
      handleSubmit,
    };
  },
});

app.mount("#appdiv");
