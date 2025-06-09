const name="shashank"
const repoCount=2

// console.log(name+repoCount+"value")

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("shashank")

// console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-7,4)
console.log(anotherString)

const newString1=" shashank "
console.log(newString1)
console.log(newString1.trim())

const url="https://google.com/home%why"

console.log(url.replace('%','-'))

console.log(url.includes('goo'))

console.log(url.split("%"))
