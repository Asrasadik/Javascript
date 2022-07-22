let currentResult = 0;
let logEntries=[];


function getUserNum(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc, calcNum){
    const calcDesc = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDesc);
}

function writeLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNum= getUserNum();
    const initialNum=currentResult;
    currentResult += enteredNum;
   createAndWriteOutput('+',initialNum,enteredNum)
   writeLog('ADD',initialNum,enteredNum,currentResult);
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
   writeLog('SUBTRACT',initialNum,enteredNum,currentResult);
}
function multiply(){
    const enteredNum= getUserNum();
    const initialNum=currentResult;
    currentResult=currentResult * enteredNum;
   createAndWriteOutput('*',initialNum,enteredNum)
   writeLog('MULTIPLY',initialNum,enteredNum,currentResult);
}

function divide(){
    const enteredNum= getUserNum();
    const initialNum=currentResult;
    currentResult=currentResult / enteredNum;
   createAndWriteOutput('/',initialNum,enteredNum)
   writeLog('DIVIDE',initialNum,enteredNum,currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

