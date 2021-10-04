let currentResult = 0;


function add (num1 , num2){
    const result=num1+num2;
    alert('The sum is '+result);
}

add(1,2);

currentResult = (currentResult + 10) *3 / 2 -1;

let calculationDes = `(${currentResult} + 10)*3 / 2 -1`;

outputResult(currentResult, calculationDes);