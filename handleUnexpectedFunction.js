// function added( num1, num2){
   
//     if( typeof num1 !== "number" || typeof num2 !== "number"){
//         return "your number not a right. Please try again..!!"
//     }
//     let sum =num1+num2;
//     return sum;

// }

// console.log(added(32, 55));


function added (num1, num2){
    if (typeof num1 !== "number"|| typeof num2 !== "number"){
        return "enter your number..!"
    }
    let sum =num1 -num2;
    return sum;
}

console.log(added(50,"20"));