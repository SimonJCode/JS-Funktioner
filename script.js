//Spara button elementet i en variabel
var okBtn = document.getElementById("ok-button");

//Skapa en funktion för när man klickar på button elementet,
//Så ändras texten i input fältet till stora bokstäver.
okBtn.addEventListener("click", function(){
    var inputText = document.getElementById("input-field").value;
    var inputTextUpp = inputText.toUpperCase();
    document.getElementById("input-field").value = inputTextUpp;
});