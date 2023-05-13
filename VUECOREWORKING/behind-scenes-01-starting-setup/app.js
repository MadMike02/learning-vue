const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      //$refs - built in refs property and will have all elements will reft
      console.log(this.$refs);
      //will return proxy of all used refs
      this.message = this.$refs.userText.value;
    },
  },
  //hooks - above 4 creation phases hooks
  beforeCreate() {
    //will run before app has been initialized
    // console.log('before create');
  },
  created() {
    //app is created but hasn't mounted yet
    // console.log('created');
  },
  beforeMount() {
    //before ready to mount
    // console.log('mount');
  },
  mounted() {
    //just after mount is done- everything is ready in DOM
    // console.log('mounted')
  },
  beforeUpdate(){
    //just before data has to be updated
    // console.log('before updated')
  },
  updated(){
    //after data has been updated
  },
  beforeUnmount(){
    //just before unmounting app from DOM
  },
  unmounted(){
    //after app is unmounted
  }
});
app.mount("#app");

// app.unmount(); -- for unmounting


//can create multiple apps

// properties of one app is not accessible by second app
// const app2 = Vue.createApp({}).mount('#app2')
const app2 = Vue.createApp({
  template: `<p>template</p>
  <button onclick='confirm("you sure")'>click</button>`,
}).mount("#app2");

//template- html code inside mounted target
