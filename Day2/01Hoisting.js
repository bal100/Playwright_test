

// console.log(y);
// const y= 10;

function july() {
    let a =15;
    const b = 20;
    var c = a+b;
    console.log("The sum of a and b numbers is:"+c);
}
july()

var genderType = "female"; // global declaration


function printGender(){


let color="brown" //function scope


if(genderType.startsWith("female")){
    var age=30;
    let color ="pink"
    console.log("She/her favourite colour"+color);
}else{
    var age=35;
    console.log("He/him:"+color);
}
console.log(age);
}


printGender()
 console.log(genderType);
 
