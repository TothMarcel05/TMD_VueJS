const app = Vue.createApp({
  setup() {
    const formData = Vue.reactive({
      name: "",
      email: "",
    });

    function handleSubmit() {
      console.log(formData);
      console.log(`Name: ${formData.name}, Email: ${formData.email}`);
    document.getElementById("userform").reset();
    document.querySelector("#userForm").reset();
    }

    return {
      formData,
      handleSubmit,
    };
  },
});

app.mount("#appdiv");
