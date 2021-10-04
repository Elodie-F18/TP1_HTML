//Fonctions
function addition(nombre1, nombre2) {
    const somme = nombre1 + nombre2
    return somme
}

//Utilisation des fonctions
const nombre1=parseInt(prompt("Saisir le premier nombre :"))
const nombre2=parseInt(prompt("Saisir le deuxième nombre :"))

const somme=addition(nombre1,nombre2)
document.write(`La somme est de : ${somme}`)