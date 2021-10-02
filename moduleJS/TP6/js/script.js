let nombre =''

while (nombre<1 || nombre>3) {
    nombre = prompt("Ecrire un nombre");
    if (nombre<1 || nombre>3) {
        alert("Mauvaise valeur, réessayez")
    } else {
        alert("Bonne valeur")
    }
}