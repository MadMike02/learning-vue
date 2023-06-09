const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName:''
    };
  },
  watch:{
    //watcher name will be same as the data we want to watch
    //one method can have only one dependecy
    name(value1,value2){
      //value1 --> latest or last value of the property
      //value2 --> old value of the property
      this.fullName = value1+ ' ' + 'sirname';
    }
  },
  computed:{
    //can have multiple dependecies , just use reference of that in body
    // fullname(){
    //   console.log('executing');
    //   if(this.name == ''){
    //     return '';
    //   }
    //   return this.name+' '+ 'sirname';
    // }
  },
  methods: {
    /*outputFullName--->>this method will be executed evertime there will be change in
      data properties. so, it is not ideal approach to do dynamic
      tasks or calculations like this and call on front.

      --for this issue we use computed properties(like useEffect-- execute only dependency changes)
      we don't use computed properties for binding methods only to do some caluculation and return the value
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