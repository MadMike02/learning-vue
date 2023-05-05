//create view app - control part of DOM

/*data--function receives which returns object
can use the object data in the DOM controlled by vue
*/
const app = Vue.createApp({
    //or data(){...}
    data:function(){
        return {
            courseGoal:'Finish course and learn vue',
            courseGoal2:'Some course 2',
            courseGoal3:'Some course 3',
            courseGoal4:'<i>Some course 4</i>',
            vueLink:"https://vuejs.org"
        };
    },
    //methods--define function which execute on events
    methods:{
        outputGoal(){
            const randomNum = Math.random();
            if(randomNum<0.5){return 'learn vue';}
            else{return 'Master Vue!';}
        },
        outputGoal2(){
            //aceesing variables in data
            const randomNum = Math.random();
            if(randomNum<0.5){return this.courseGoal2;}
            else{return this.courseGoal3;}
        }
    }
});
app.mount('#user-goal');