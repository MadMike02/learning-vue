import { createApp } from "vue";

//import component, name can be anything
import FriendContact from "./components/FriendContact.vue";
//import vue files
import App from "./App.vue";

const app = createApp(App);
//component link
app.component("friend-contact", FriendContact);
app.mount("#app");
