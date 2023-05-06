const app = Vue.createApp({
  data: function () {
    return {
      count: 0,
      result: "",
    };
  },
  watch: {
    count(value) {
      if (value > 37) {
        setTimeout(() => {
          this.count = 0;
        }, 5000);
      }
    },
  },
  computed: {
    finalResult() {
      if (this.count > 37) {
        return "Too much!";
      }
      return "Not there yet";
    },
  },
  methods: {
    addToCount(num) {
      this.count += num;
    },
  },
});
app.mount("#assignment");
