// //get first element on dom

/*
vanilla javascript-- imperative approach (step by step 
 to execute) 
 */

// const btn = document.querySelector('button');
// const inp = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal(){
//     let value= inp.value;

//     let listHtml = document.createElement('li');
//     listHtml.textContent = value;
//     // console.log(listHtml,list);
//     list.append(listHtml);

//     inp.value='';
// }
// btn.addEventListener('click',addGoal);

//by VUE

//initialize app
/* 
declarative approach 
*/
Vue.createApp({
  data: function () {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    //methods, functions
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
