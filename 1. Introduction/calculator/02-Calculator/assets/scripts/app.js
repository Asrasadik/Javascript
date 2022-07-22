let currentResult = 0;
let logEntries=[];


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
    currentResult += enteredNum;
   createAndWriteOutput('+',initialNum,enteredNum)
   /*const logEntry = {
       operation: 'ADD',
       prvResult: initialNum,
       number: enteredNum,
       result: currentResult
   };
   console.log(logEntry.operation);*/
  // console.log(logEntry);

  // logEntries.push(enteredNum);
   //console.log(logEntries); // console.log(logEntries[0]), console.log(logEntries[1]);;
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

