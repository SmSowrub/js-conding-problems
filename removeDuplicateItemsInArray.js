// let friends=["sowrub","hasun","sowrub","hasun","nazmul","mojumder","nazmul","mojumder"];
// function removeFriends(friends){
//     let unique=[];
// for(var i=0;i < friends.length;i++){
//     let friend=friends[i];
//     if(unique.includes(friend) === false){
//         unique.push(friend);
//     }
// }
// return unique;
// }
// console.log(removeFriends(friends));



let names=["sowrub","hasun","sowrub","hasun","nazmul","mojumder","nazmul","mojumder"];

function removeFriends(friends){
    let unique =[];
    for(let i=0; i < friends.length; i++ ){
        var friend =friends[i];
        if(unique.includes(friend) === false){
            unique.push(friend);
        }
    }
    return unique;
}

console.log(removeFriends(names));