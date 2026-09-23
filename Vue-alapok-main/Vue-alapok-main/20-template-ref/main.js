const app = Vue.createApp({
  setup() {
    const formData = Vue.reactive({
      name: "",
      email: "",
    });

    const userForm = Vue.ref();

    function handleSubmit() {
      // event.preventDefault();
      console.log(formData);
      console.log(`Name: ${formData.name}, Email: ${formData.email}`);

      userForm.value.reset(); // Reset the form using the ref
      //   document.getElementById("userform").reset();
      //   document.querySelector("#userForm").reset();
    }

    return {
      formData,
      handleSubmit,
      userForm,
    };
  },
});

app.mount("#appdiv");
