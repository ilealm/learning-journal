
function validateEmail()
{
    document.write("validateEmail");
    // confirm("eMail validated",true);

} //funtion validateEmail()



// This function ask for the country of the user and say hi in English or spanish
function sayHi()
{
    var country = prompt("Which country are your visit us?","country here...");

    if (country === "usa" || country === "USA")  {
        greetings = 'Hello there! welcome!';
    } else if (country === "mexico" || country === "MEXICO" || "mx") {
        greetings = 'Hola! que gusto que nos visites!';
    } else {
        greetings = 'So glad you are here!';
    }

    confirm(greetings,true)
    greetings = "<i>" + greetings + "</i>"
    
    document.write('<h3>' + greetings + "  :-D" + '</hr>'); 
    
} //function sayHi()

