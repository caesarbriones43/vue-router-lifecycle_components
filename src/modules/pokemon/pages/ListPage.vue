<template>
  <h1>List Page</h1>
  <!-- <h4>{{ name }}</h4> -->

  <button @click="onChangeName">Cambiar Nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Cesar",
    };
  },
  methods: {
    onChangeName() {
      console.log("ONCHANGE NAME CLICK");
      this.name = "Omar";
    },
  },
  //optionsApi = sin setup ; compositionAPI = con setup
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>
