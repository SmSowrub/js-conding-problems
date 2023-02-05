// function bestFriend(friends){
//     let bigName =friends[0].length;
//     for (let i =0 ; i < friends.length; i++){
//         let elements = friends[i];
//         if(elements.length > bigName ){
//             bigName = elements;
            
//         }
//     }
//     return bigName
// }

// let friends =["sowrub","nazmul","hasun","rafi","Nazmul hasun", "mojumder"];
// console.log(bestFriend(friends));


function bestFriend (friends){
    let minLength=friends[0];
    for(let i=0 ; i< friends.length;i++){
        let name = friends[i];
       if (name.length < minLength.length){
           minLength= name;
       }
    }
    return minLength;
}

let friends =["sowrub","nazmul","hasun","rafi","Nazmul hasun", "mojumder"];
console.log(bestFriend(friends));