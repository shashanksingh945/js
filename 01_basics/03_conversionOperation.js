let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=> 33
//"33abc"=> NaN(not a no) but type is number
// true=> 1; false=>0

let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1=> true ; 0=> false
//" " =>false ; "something"=>true


let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);
