function greet(name,callback,callback2) {
    console.log("Hello," + name);
    callback()
    callback2()
}

function sayBye(){
    console.log("Bye Bye");
}

function sayThanks(){
    console.log("Thank you")
}
greet("Pranjal",saythanks,sayBye);
sayBye("Pranjal");


//making a callback series


function checkLogin(callback){
    setTimeout(()=> {
        console.log("User is login in to the Application")
        callback()
    },3000);
}

function verifyCart(callback){
    setTimeout(()=>{
        console.log("Cart is verified")
        callback()
    },3000);
}

function proceedToPayment(callback){

    setTimeout(()=>{
        console.log("proceeding to payment")
        callback()
    },3000);
}

function placeOrder(){
    console.log("Order is placed")
}

checkLogin(()=>{
    verifyCart(()=>{
        proceedToPayment(()=>{
            placeOrder(() => { 
                console.log("Order is placed successfully")
            })
        })
    })
})

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing asynchronous tasks")
//         resolve()
//     },2000);
// })
// promiseOne.then(function(){
//     console.log("promise executed")
// }) 
// or
//new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing asynchronous tasks")
//         resolve()
//     },2000);
// }).then(function(){
//     console.log("promise executed")
//})

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Doing asynchronous tasks")
        resolve({username:"Pranjal",id:12345})
    },3000);
})
promiseOne.then(function(u1){
    console.log(u1)
    console.log(u1.username)
    console.log(u1.id)
})

const u2= promiseOne.then(function(u1){ // will return promise pending as promise returns object not a value
    console.log(u1)

    return u1.username
})

promiseOne.then(function(u1){ 
    console.log(u1)

    return u1.username
}).then((username)=>{
    console.log(username)
})

// prmosise error  using if-else
const promiseTwo = new Promise(function(resolve,reject){
   
        let error = true
        if(!error){
            resolve("Promise resolved successfully")
        }
        else{
            reject("Promise rejected due to some error")
        }   
    
})
promiseTwo.then(function(u1){ 
    console.log(u1)

    return u1.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
})




    

