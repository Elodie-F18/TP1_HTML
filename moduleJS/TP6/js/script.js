/*let nombre =''

while (nombre<1 || nombre>3) {
    nombre = prompt("Ecrire un nombre");
    if (nombre<1 || nombre>3) {
        alert("Mauvaise valeur, réessayez")
    } else {
        alert("Bonne valeur")
    }
}*/

let number = parseInt(prompt("Entrez un nombre compris entre 1 et 3: "));

while (!(number >= 1 && number <= 3)) {
    number = parseInt(
        prompt(`${number} n'est pas compris entre 1 et 3. Merci de réessayer!`)
    );
}
if (number >= 1 && number <= 3) {
    alert(`Très bien ! ${number} est bien compris entre 1 et 3.`);
    document.write(`Très bien ! ${number} est bien compris entre 1 et 3.`);
}