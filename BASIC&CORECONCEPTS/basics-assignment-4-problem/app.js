Vue.createApp({
    data(){
        return {
            user1:false,
            user2:false,
            isVisible:true,
            color:''
        }
    },
    computed:{
        toggleClass(){
            return this.isVisible ? 'visible' : 'hidden';
        },
        chooseColor(){
            return {'background-color':this.color}
        }
    },
    methods:{
        addClassToP(e){
            if(e.target.value == 'user1'){
                this.user1=true;
                this.user2=false;
            }else if(e.target.value == 'user2'){
                this.user2=true;
                this.user1=false;
            }
        },
        toggleVisibilty(){
            this.isVisible=!this.isVisible
        },
        addColor(e){
            let color = e.target.value;
            this.color=color;
        }
    }
}).mount('#assignment');