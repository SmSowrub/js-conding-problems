
// calculate sopping 
// let soppingCart=[
//     {name:"shirt", price:1000},
//     {name:"pant", price:2000},
//     {name:"shows", price:2500},
//     {name:"belt", price:500}
// ];

// function soppingCartCost (soppingCart){
//     let sum =0;
//     for (let i = 0; i < soppingCart.length; i++ ){
//         let sopping=soppingCart[i];
//         sum =sum + sopping.price;
//     }
//     return sum
// }
// console.log(soppingCartCost(soppingCart));


// multipul shart and pant belat added in soppingCart...!!!

let soppingCart=[
    {name:"shirt", price:1000, quantity: 3 },
    {name:"pant", price:2000, quantity: 5 },
    {name:"shows", price:2500, quantity: 3 },
    {name:"belt", price:500, quantity: 1 }
];

function multiSoppingCartAdded(soppingCart){
    let sum = 0;
    for (let i = 0; i < soppingCart.length; i++) {
        const products = soppingCart[i];
        let quantityAdded= products.price*products.quantity;
        sum = sum + quantityAdded;
        
    }
    return sum;
}

console.log(multiSoppingCartAdded(soppingCart));