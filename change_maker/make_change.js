"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
    var userEntry = parseInt($("cents").value);
if (isNaN(userEntry)) {
alert("You must enter a number");
} else if (userEntry <= 0 || userEntry > 99 ) {
        alert("Value should exists between 0 and 99");}
{var convQuarters = parseInt(userEntry / 25);
        $("quarters").value = convQuarters;
        var modulusQuarters = parseInt(userEntry % 25);}
{var convDimes = parseInt(modulusQuarters / 10);
        $("dimes").value = convDimes;
        var modulusDimes = parseInt(modulusQuarters % 10);}
{var convNickels = parseInt(modulusDimes / 5);
        $("nickels").value = convNickels;
        var modulusNickels = parseInt(modulusDimes % 5);}
{var convPennies = parseInt(modulusNickels / 1);
        $("pennies").value = convPennies;
    }
};

window.onload = function() {
    $("calculate").onclick = processEntry;
};