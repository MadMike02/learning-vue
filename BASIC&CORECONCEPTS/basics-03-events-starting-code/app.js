const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    confirmName(){
      this.confirmedName=this.name;
    },
    multiplyCounter(){
      this.counter*=2
    },
    divideBy(num){
      this.counter/=num
    },
    setName(e){
      //if giving no arguments then event is exist
      //or pass - $event      
      this.name=e.target.value
    },
    submitForm(e){
      e.preventDefault();
      alert('someText')
    },
    submit2(){
      alert('some Text2')
    }
  }
});

app.mount('#events');