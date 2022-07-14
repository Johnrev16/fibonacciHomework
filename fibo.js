
function fiboFunc(n){

    if (n === 0){
        return 0;
    }

    if (n === 1){
        return 1;
    }

    var firstNum = 0;
    var secondNum = 1;
    var nthNum = 1;

    for(let i = 2; i <= n; i++){
        nthNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nthNum;
    }

    return nthNum;
}

for(let i = 0; i <= 10; i++){
    console.log(fiboFunc(i));
}
