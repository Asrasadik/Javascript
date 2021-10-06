let currentResult = 0;


function add(){
    currentResult=currentResult+userInput.value;
    outputResult(currentResult, calculationDes);
}

addBtn.addEventListener('click',add);
/*function add (num1 , num2){
    const result=num1+num2;
    return result;
}

currentResult = add(1,2); // pure function

//currentResult = (currentResult + 10) *3 / 2 -1;

let calculationDes = `(${currentResult} + 10)*3 / 2 -1`;

//outputResult(currentResult, calculationDes);
 this runs only once bcz this whole code runs from top to bottom  so its done its work but we want when button
is clicked it should give output but any time button can be clicked we donno when button gets clicked
the only thing that runs after button is clicked by browser is add function so we will put this line into add function
*/