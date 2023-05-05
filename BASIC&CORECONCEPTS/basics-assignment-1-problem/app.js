const app = Vue.createApp({
    data(){
        return {
            name:'Sahil Jassal',
            age:25,
            imgUrl:'https://ag-spots-2021.o.auroraobjects.eu/2021/09/05/ford-mustang-gt-2018-c170305092021232632_2.jpg?1630877207'
        }

    },
    methods:{
        favouriteNumber(){
            return Math.random().toFixed(2)
        }
    }

});
app.mount("#assignment");