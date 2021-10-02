let email = prompt("Ecrire votre adresse mail");
let password = prompt("Ecrire votre mot de passe");

let emailToLog 
let passwordToLog 

let count =0;

while(count<5 && (emailToLog!=email || passwordToLog!=password)) {
    emailToLog= prompt("Ecrire de nouveau votre adresse mail");
    passwordToLog = prompt("Ecrire de nouveau votre mot de passe");
    count=count+1;
    if (emailToLog!=email || passwordToLog!=password) {
        alert("Identifiant incorrect")
    } else {
        alert("Identifiant correct, bienvenue dans votre espace client")
    }
    if (count==5) {
        alert("Vous avez dépassé les 5 essais, votre compte est bloqué")
    }
}