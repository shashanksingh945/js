const accountId=144553
let accountEmail="shashank@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2  //not allowed

accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="allahabad"
let accountState;
console.log(accountId);


/*
Prefer not use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])