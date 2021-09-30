//Boite de dialogue alert
alert("Bonjour à tous");

//Déclaration de variables
let firstName = 'Jean';
console.log(firstName);
firstName = 'Jonathan';
console.log(firstName);
firstName = 'Lydie';
console.log(firstName);

//Typage dynamique
let age = 67;
age = '24';
console.log("J'ai "+ age+ "ans")

//Constantes : Ces valeurs ne peuvent pas être modifiées
const accelerationPesanteur = 9.8;
const pays = 'France';
console.log("J'habite en "+pays);


//Type de données
//String
const prenom = "Elodie";
const nom = "Fontaine";
//Number
let monAge = 24;

let presentation=`Je suis ${prenom} ${nom}, et j'ai ${monAge} ans`
console.log(presentation);

//Afficher une boite de dialogue
let votrePays="";
votrePays=prompt("Votre pays s'il vous plait");
document.write(`J'habite en ${pays}`);

//Prompter l'utilisateur
const votrePrenom = prompt('Quel est votre prénom ?')
const nomDeFamille = prompt('Quel est votre nom de famille ?')
const votreAge = prompt('Quel est votre age ?')

alert(`Vous êtes ${votrePrenom} ${nomDeFamille} et vous avez ${votreAge} ans`)