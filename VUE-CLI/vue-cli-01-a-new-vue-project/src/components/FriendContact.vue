<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
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
