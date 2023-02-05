function woodRequirement(cheirstRequirement, tableRequirement, bedRequirement){
    let  cheirWood= 3;
    let tableWood= 10;
    let bedWood= 50;
    let cheirstRequirementTotal= cheirstRequirement * cheirWood;
    let tableRequirementTotal= tableRequirement * tableWood;
    let bedRequirementTotal= bedRequirement * bedWood;
    let totalWood=cheirstRequirementTotal + tableRequirementTotal + bedRequirementTotal;
    return totalWood;

}
console.log(woodRequirement(0,10,10));