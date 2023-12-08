const account = 1728
let accountEmail = "adarsh@gmail.com"
var accountPassword="62783"
accountCity="Ahmedabad"
let accountState; //undifined variable

console.log(accountEmail)//only one variable print

console.table([accountEmail,accountPassword,accountState,accountCity])

accountEmail="adarsh12@gmail.com"
accountPassword="123"
accountCity="Surat"

/* prefer not use Var 
- because of issue in block Scope { } and Functional Scope 
*/




console.table([accountEmail,accountPassword,accountState,accountCity])

