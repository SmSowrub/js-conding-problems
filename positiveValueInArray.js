let positiveValue = [ 12, 13, 22, 33, 44,55, 66, -22,-56,29,50];
let onlyPositiveValue=[];
for (let i = 0 ; i < positiveValue.length; i++){
    let value =positiveValue[i];
    if(value >= 0){
        onlyPositiveValue.push(value)
    }
    else{
        break;
    }
}
console.log(onlyPositiveValue);