// primitive
// 7 types: String, Number, Boolean, null, undefine, symbol, BigInt
// call by value

const score=100;
const scoleValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
console.log(typeof id)
const anotherId=Symbol('123')

console.log(id==anotherId)

const bigNumber=454555522454455555n

// Reference(non-primitive)  // datatype of non-primitive is object
// Array, object, function
// call by reference

const heros=["shaktiman","naagraj", "doga"]
let myObj= {
    name:"shashank",
    age:21

}

const myfunction=function(){
    console.log("hello world")
}

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)
console.log (typeof myfunction);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive), 

let myname="shashank"

let anothername=myname
 anothername="singh"

console.log(myname)
console.log(anothername)


// heap(non-primitive)


let user={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2=user

user2.email="shashank@google.com"

console.log(user.email)
console.log(user2.email)