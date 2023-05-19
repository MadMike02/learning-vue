<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //props define passed from parent-- can be accessed through same as data--props musn't be mutable (change)
  // props:['name','phoneNumber','emailAddress'],
  props: {
    name: {
      type: String,
      required: true,
      validator: function (value) {
        // console.log(value.length,value.length > 3)
        return value.length > 5;
      },
    },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
  },
  //only available for this componenet
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "manuel lorenz",
        phone: "0123 123 123",
        email: "manuel@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
