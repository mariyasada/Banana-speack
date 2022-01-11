console.log("welcome to javascript");

var txtinput= document.querySelector("#text-input");
var btntranslate = document.querySelector(".btn-translate");
var txtoutput =document.querySelector("#text-output");

 //var  serverUrl= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
 var Url="https://api.funtranslations.com/translate/minion.json";

//convert code into Es6
 const constructUrl = (text) =>
 {
     return Url + "?" + "text=" + text;
 }

 const errorHandler = (error)=> {
     console.log("error occured",error);
     alert("something wrong with server! try again after some time");
 }

// Calling a function when button clicked
btntranslate.addEventListener("click",() => {

    var inputText = txtinput.value;
    console.log("heyy");
    fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtoutput.innerText = translatedText;

    })
    .catch(errorHandler)
    console.log("hiiiiii");
});
