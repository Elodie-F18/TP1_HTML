function Etudiant(nom, prenom, age, genre, pays, option, listeCours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.listeCours = listeCours;
}

const etudiants = [];
const qteEtudiant = parseInt(prompt("Combien d'étudiants dans la liste :"));

for (let i = 1; i <= qteEtudiant; i++) {
    const nom = prompt("Nom :");
    const prenom = prompt('Prénom :');
    const age = parseInt(prompt('Age : '));
    const genre = prompt('Genre : ');
    const pays = prompt('Pays : ');
    const option = prompt('Option : ');
    const listeCours = [];
        for (let j = 0; j < 3; j++) {
            listeCours.push(prompt("Entrez les cours suivis :"));
        }
    const etudiant = new Etudiant( nom,prenom,age,genre,pays,option,listeCours);

    etudiants.push(etudiant);
}

for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
}

Etudiant.prototype.setnom = function (changeNom) {
    return (this.nom = changeNom );
};
Etudiant.prototype.setprenom = function (changePrenom) {
    return(this.prenom = changePrenom);
};
Etudiant.prototype.setoption = function (changeOption) {
    return(this.option = changeOption);
};