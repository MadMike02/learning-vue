const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "09998 9898 98",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

//component must be different from HTML tag names (use '-' between two words)
//component - sub apps which is connected with parent app
app.component("friend-contact", {
  template: `<li>
    <h2>{{friend.name}}</h2>
    <button @click='toggleDetail()'>Show Details</button>
    <ul v-if="dataAreVisible">
        <li><strong>Phone:</strong>{{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
    </li>`,
  data() {
    return {
      dataAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.dataAreVisible = !this.dataAreVisible;
    },
  },
});

app.mount("#app");
