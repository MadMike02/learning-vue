const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed:{
    fullname(){
      console.log('executing');
      if(this.name == ''){
        return '';
      }
      return this.name+' '+ 'sirname';
    }
  },
  methods: {
    /*outputFullName--->>this method will be executed evertime there will be change in
      data properties. so, it is not ideal approach to do dynamic
      tasks or calculations like this and call on front.

      --for this issue we use computed properties(like useEffect-- execute only dependency changes)
    */
    // outputFullName(){
    //   console.log('executing');
    //   if(this.name == ''){
    //     return '';
    //   }
    //   return this.name+' '+ 'sirname';
    // },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');