let nombre = "";

while (nombre<10 || nombre>20) {
    nombre = parseInt(prompt("Ecrire un nombre"));
    if (nombre<10) {
        alert("Plus grand")
    } else if (nombre>20){
        alert("Plus petit")
    } else {
        alert("Bravo")
    }
}