function paperRequireMents(fastCopy,secondCopy,thirdCopy){
    let fastCopyPaper = fastCopy * 100;
    let secondCopyPaper = secondCopy * 200;
    let thirdCopyPaper = thirdCopy * 300;
    const totalPaper= fastCopyPaper + secondCopyPaper + thirdCopyPaper;
    return totalPaper;
}
console.log(paperRequireMents(2,5,1));