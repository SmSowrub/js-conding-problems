// let phones =[
//     {name:"Nokia", color:"Black", price:25000, mgP:"17.55px"},
//     {name:"Apple", color:"blue", price:95000, mgP:"58.55px"},
//     {name:"Samsung", color:"Nave blue", price:35000, mgP:"17.55px"},
//     {name:"infinx", color:"green", price:15000, mgP:"27.55px"}
// ];
// var cheapest = phones[0];
// for(var i=0 ; i < phones.length; i++){
//     var elements =phones[i];
//     if(elements.price < cheapest.price ){
//         cheapest = elements;
        
//     }
    
// }

// console.log(cheapest.price);

let phones =[
    {name:"Nokia", color:"Black", price:25000, mgP:"17.55px"},
    {name:"Apple", color:"blue", price:95000, mgP:"58.55px"},
    {name:"Samsung", color:"Nave blue", price:35000, mgP:"17.55px"},
    {name:"infinx", color:"green", price:15000, mgP:"27.55px"}
];

// function cheapestPhone(phones){
//     let cheapest =phones[0];
//     for(let i =0; i < phones.length; i++){
//         let phone = phones[i];
//         if( phone.price < cheapest.price){
//             cheapest=phone;
//         }
//     }
//     return cheapest;
// }
// console.log(cheapestPhone(phones))

// function bigIstPhone(phones){
//     let bigRate=phones[0];
//     for (let i = 0 ; i < phones.length; i++){
//         let phone = phones[i];
//         if(phone.price > bigRate.price){
//             bigRate=phone;
//         }
//     }
//     return bigRate;
// }

// console.log(bigIstPhone(phones));



function bigIstName(phones){
    let bigRate=phones[0];
    for (let i = 0 ; i < phones.length; i++){
        let phone = phones[i];
        if(phone.name.length > bigRate.name.length){
            bigRate=phone;
        }
    }
    return bigRate;
}

console.log(bigIstName(phones));