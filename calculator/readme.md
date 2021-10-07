```
let currentResult = 0;


function add(){
    currentResult=currentResult+userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click',add);
```

Above code gives output as like concatinating the strings because
in the line ```currentResult=currentResult+userInput.value;``` here though the userIput is of type number in html but always the type of input vale from ```<input></input>``` will 
always be string value thats how the Javascript in the browser works it doesn't try to be smart and check whether that should be a number or not it doesn't make anyassumptions. It 
just give you a string (text) and therefore what happens here is that we have a number and we have some text (from ```userInput.value``` ) so number and string both gets 
concatenated. It does a safer thing because it doesn't know where and what you have entered here as a string could be treated as number or not and it therefore simply converts it to string and concatenates it to a string that's what we see <br/>

* Use ```parseInt(userInput.value)``` (it is explicit way). <br/>
```parseInt``` would actually of course not be able to convert ```userInput.value``` to number, instead it would convert it to a special value 
* Use ```currentResult = currentResult + +userInput.value```<br/>
it is a shorter form to convert to string (```+userInput.value```).
* But ```parseInt parseFloat``` be more specific about the type whether we need float or int 
* ```currentResult.toString()``` <br/>
this converts number to string 


