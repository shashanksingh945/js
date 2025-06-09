//dates

let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("02-24-2023")
// console.log(myCreatedDate.toString())

let myTime=Date.now()

// console.log(myTime)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay()+1)

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    
}))