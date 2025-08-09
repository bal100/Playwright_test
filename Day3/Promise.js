

// let batondeliver = new promise((resolve,rejected) => {
//     let isBatonPassed = true;
//     if(isBatonPassed){
//         resolve("Baton is successfully passed")
//     }
//     else {
//         rejected("Baton is not passed")
//     }
// })
//Task 1
function userprofile(name){
console.log("Hello,"+name+"!")
}

userprofile("Balasanjay")

//Task 2
const double =(num) => num*2
console.log(double(5))

//Task 3
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
},2000
)

//Task 4
function getuserData(callback){
    setTimeout(function(){
        callback()
    },5000)
}

const showmessage =function(msg){
    console.log("call Back Function - message received: "+msg)
}
getuserData(showmessage)
