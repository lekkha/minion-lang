var btnTranslate = document.querySelector("#btn-translate"); 
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

// var sourceURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error); 
    alert("something wrong with server try again after sometime")
}

function clickHandler() {

    var inputText = txtInput.value; //taking input


    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(reponse => reponse.json())
    .then(json => { 
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;  
    })
    .catch(errorHandler)

};
btnTranslate.addEventListener("click", clickHandler)
    