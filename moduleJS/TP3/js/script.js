let age = parseInt(prompt("Inscrire votre âge"));

if (age>=7 && age<=9) {
    alert("L'enfant fait partie de la catégorie poussin");
} else if (age>=10 && age<=11) {
    alert("L'enfant fait partie de la catégorie pupille");
} else if (age>=12 && age<=13) {
    alert("L'enfant fait partie de la catégorie benjamin");
} else if (age>=14 && age<=15) {
    alert("L'enfant fait partie de la catégorie minime");
} else if (age>=16 && age<=17) {
    alert("L'enfant fait partie de la catégorie cadet");
} else {
    alert("Cette personne ne rentre dans aucune catégorie")
}