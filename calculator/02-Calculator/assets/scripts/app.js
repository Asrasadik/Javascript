let currentResult = 0;


function getUserNum(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc, calcNum){
    const calcDesc = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDesc);
}

function add(){
    const enteredNum= getUserNum();
    const initialNum=currentResult;
    currentResult=currentResult + enteredNum;
   createAndWriteOutput('+',initialNum,enteredNum)
}

function sub(){
    const enteredNum= getUserNum();
    const initialNum=currentResult;
    currentResult=currentResult - enteredNum;
   createAndWriteOutput('-',initialNum,enteredNum)
}
function multiply(){
    const enteredNum= getUserNum();
    const initialNum=currentResult;
    currentResult=currentResult * enteredNum;
   createAndWriteOutput('*',initialNum,enteredNum)
}

function divide(){
    const enteredNum= getUserNum();
    const initialNum=currentResult;
    currentResult=currentResult / enteredNum;
   createAndWriteOutput('/',initialNum,enteredNum)
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

