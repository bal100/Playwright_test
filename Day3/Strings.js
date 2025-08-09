const { Console } = require("console");

//String literal
let firstname ="Balasanjay"
let Lastname = "Balaji"
let username = 107
let Name = firstname.toString().concat(username)
console.log(Name)



// String literal - Stack memory - over right's value 
// String object - Heap memory - [new] keyword - Allocates every new memory

//String Object
// let firstName1 = new string ("Balasanjay");
// let lastName1 = new string("Balaji");

//Escape Sequence - 
let Intro = 'I\'m Balasanjay';
console.log(Intro);

//template literal ='${}'
let testcases =200
let output = `there are ${testcases} testcases`
console.log(output)

//length - starts with 1
//index - starts with 0
let myname ="Balasanjay Kumar"
console.log(`The length of my name is ${myname.length}`)
console.log(`The length of my name is ${myname.indexOf("s")}`)

//charAt
console.log(`The charAt of 9 is ${myname.charAt(9)}`)

//indexof
console.log(`The index of a ${myname.indexOf('a')}`)

//split
let company = "Tata Consultancy Services"
let Name1 =company.split(" ")
console.log(Name1)

//Slice
let fruit ="Jack Fruit"
let fruit1 = fruit.slice(3,-5)
console.log(fruit1)

//substring
let fruit2 ="Jack Fruit"
let fruit3 = fruit2.substring(3,-5)
console.log(fruit3)

function reverse(){
    let InstituteName="TESTLEAF"
    for(i=0;i<InstituteName.length;i--){
        console.log(charAt(i))
    }

}
reverse()