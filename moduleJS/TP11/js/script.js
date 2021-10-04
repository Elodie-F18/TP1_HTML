let nombre = prompt("Entrer le premier nombre dont vous voulez la table de multiplication");
let nombre_max = prompt("Entrer le dernier nombre dont vous voulez la table de multiplication");
let prem_nombre = prompt("Entrer le premier nombre de la table");
let last_nombre = prompt("Entrer le dernier nombre de la table");

for (let i = nombre; i < nombre_max; i++) {
    for (let k = prem_nombre; k <= last_nombre; k++) {
        document.write(i + " x " + k + " = " + k * i);
        document.write("<br/>");
    }
    document.write("<br/>");
}