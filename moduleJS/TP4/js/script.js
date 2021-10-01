let email = prompt("Ecrire votre adresse mail");
let password = prompt("Ecrire votre mot de passe");

let emailToLog 
let passwordToLog 

while(emailToLog!=email || passwordToLog!=password) {
    emailToLog= prompt("Ecrire de nouveau votre adresse mail");
    passwordToLog = prompt("Ecrire de nouveau votre mot de passe");
    if (emailToLog!=email || passwordToLog!=password) {
        alert("Identifiant incorrect")
    } else {
        alert("Identifiant correct, bienvenue dans votre espace client")
    }
}
