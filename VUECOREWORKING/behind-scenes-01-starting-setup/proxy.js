const data={
    message:'hello',
    longMessage:'hello ! world'
}

const handler= {
    set(target,key,value){
        //target -- data which is wrapping in proxy
        //key - propertyy name of that data
        //value - value of that property
        console.log(target,key,value)

        if(key == message){
            target.longMessage= value + ' world'
        }
        target.message=value

        //change the some other value as soon as there is change in other
    }
}
const proxy = new Proxy(data,handler)

proxy.message='Hello !!!!'

//vue uses proxy to keep track of data keys and render DOM as soon as there is changed