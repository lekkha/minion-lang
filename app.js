var btnTranslate = document.querySelector("#btn-translate"); 
//select the input box
var txtInput = document.querySelector("#txt-input")
//check if it has selected the textbox via outputing it in the console
console.log(txtInput)
//reading the input value 

function clickHandler(){
    console.log("clicked!");
    console.log("input" , txtInput.value);
}
btnTranslate.addEventListener("click", clickHandler)
    