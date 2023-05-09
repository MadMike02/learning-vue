const app =Vue.createApp({
    data(){
        return {
            tasks:[],
            singleTask:'',
            showTasks:true
        }
    },
    computed:{
        changeCaption(){
            if(this.showTasks)
                return 'Hide List'
            else
                return 'Show List'
        },
        listTagCss(){
            if(this.showTasks)
                return 'display:block'
            else
                return 'display:none'
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.singleTask);
        },
        deleteTask(idx){
            this.tasks.splice(idx,1)
        },
        listToggle(){
            this.showTasks=!this.showTasks
        }
    }
});
app.mount("#assignment");