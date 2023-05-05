const app = Vue.createApp({
    data:function(){
        return {
            userInput:'NIL',
            finalInput:'NIL'
        }
    },
    methods:{
        alertText(){
            alert("some text");
        },
        saveInput(e){
            this.userInput=e.target.value
        },
        finalOutput(e){
            this.finalInput=e.target.value
        }
    }
});
app.mount("#assignment");