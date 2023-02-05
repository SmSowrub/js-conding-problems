// function forFunction(){
//     for (var i = 1; i <= 50;i++){
//         let num = i;
//         if(num % 3 === 0 && num % 5 === 0){
//             console.log("fooBer")
//         }
//        else if(num % 5 ===0){
//             console.log("ber");
//         }
//        else if(num % 3 === 0){
//             console.log("foo");
//         }
//         else{
//             console.log(num);
//         }
//     }
    

// }
// console.log(forFunction());

for(let i = 50 ; i <= 100; i++ ){
    // console.log(i);
    if(i % 3== 0 && i % 5==0){
        console.log("fooBer");
    }
    else if(i % 5 == 0){
        console.log("ber");
    }
    else if(i % 3 == 0){
        console.log("foo")
    }
    else{
        console.log(i);
    }
}