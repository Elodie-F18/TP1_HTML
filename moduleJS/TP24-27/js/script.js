const showError = document.querySelector("#err-student");
const studentForm = document.querySelector("#student-form");
const tableBody = document.querySelector("#table-body");

const nomInput = document.querySelector("#nom");
const prenomInput = document.querySelector("#prenom");
const ageInput = document.querySelector("#age");
const genreInputF = document.querySelector("#madame");
const genreInputM = document.querySelector("#monsieur");
const paysInput = document.querySelector("#pays");
const optionInput = document.querySelector("#option");

const coursForm = document.querySelector("#cours-form");
const coursInput = document.querySelector("#cours-input");
const coursList = document.querySelector("#cours-list");
const coursError = document.querySelector("#err-cours");

const querySelector = [
    nomInput,
    prenomInput,
    ageInput,
    genreInputF,
    paysInput,
    optionInput,
];

const studentDatabase = [];

function Student(fName, lName, age, gender, country, option, coursList) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.option = option;
    this.coursList = coursList;
}

const coursData = [];
const coursDatabase = [];

function Cours(title) {
    this.title = title;
}

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const tr = document.createElement("tr");
    tableBody.append(tr);

    if (
        nomInput.value.length === 0 ||
        prenomInput.value.length === 0 ||
        ageInput.value.length === 0 ||
        paysInput.value.length === 0 ||
        optionInput.value.length === 0
    ) {
        showError.innerText = "Veuillez remplir tous les champs";
        showError.classList.add("text-red");

        const nomError = document.querySelector(".nom");
        if (nomInput.value.length < 5 || typeof nomInput.value === "number") {
            nomError.innerText = "Ce champs doit contenir au mois 5 caractères";
            nomError.classList.add("text-red");
        } else {
            nomError.innerText = "";
            nomError.classList.remove("text-red");
        }
        const prenomError = document.querySelector(".prenom");
        if (prenomInput.value.length < 5 || typeof prenomInput.value === "number") {
            prenomError.innerText = "Ce champs doit contenir au mois 5 caractères";
            prenomError.classList.add("text-red");
        } else {
            prenomError.innerText = "";
            prenomError.classList.remove("text-red");
        }
        const ageError = document.querySelector(".age");
        if (typeof ageInput.value !== "number") {
            ageError.innerText = "Ce champs doit être un nombre";
            ageError.classList.add("text-red");
        } else {
            ageError.innerText = "";
            ageError.classList.remove("text-red");
        }
        const genderError = document.querySelector(".gender");
        if (genreInputF.value !== "f" || genreInputF.value !== "m") {
            genderError.innerText = "Ce champs doit être  f ou m";
            genderError.classList.add("text-red");
        } else {
            genderError.innerText = "";
            genderError.classList.remove("text-red");
        }
        const coursError2 = document.querySelector(".gender");
        if (coursData.value.length === 0) {
            coursError2.innerText = "Ce champs doit être  f ou m";
            coursError2.classList.add("text-red");
        } else {
            coursError2.innerText = "";
            coursError2.classList.remove("text-red");
        }
    } else {
        // Ajout de l'event de suppression sur le bouton
        const deleteStudentButton = document.createElement("button");
        deleteStudentButton.innerText = "X";
        deleteStudentButton.addEventListener("click", function () {
            deleteStudentButton.parentElement.parentElement.removeChild(
                deleteStudentButton.parentElement
            );
        });
        const nom = document.createElement("td");
        nom.innerText = nomInput.value;

        const prenom = document.createElement("td");
        prenom.innerText = prenomInput.value;

        const age = document.createElement("td");
        age.innerText = ageInput.value;

        const genre = document.createElement("td");
        genre.innerText = genreInputF.checked ? "f" : "m";

        const pays = document.createElement("td");
        pays.innerText = paysInput.value;

        const option = document.createElement("td");
        option.innerText = optionInput.value;

        const liElements = document.querySelectorAll("li");
        for (let i = 0; i < liElements.length; i++) {
            coursData.push(...liElements[i].innerText.split("\t"));
        }
        const cours = document.createElement("td");
        cours.innerText = coursData;

        
        tr.append(
            nom,
            prenom,
            age,
            genre,
            pays,
            option,
            cours,
            deleteStudentButton
        );

        const newStudent = new Student(
            nom.innerText,
            prenom.innerText,
            age.innerText,
            genre.innerText,
            pays.innerText,
            option.innerText,
            cours.innerText
        );
        studentDatabase.push(newStudent);

        for (queryElement of querySelector) {
            queryElement.value = "";
        }

        showError.innerText = "";
        coursError.innerText = "";
        showError.classList.remove("text-red");
        coursError.classList.remove("text-red");
    }
});

console.table(studentDatabase);
coursForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (coursInput.value.length < 2) {
        coursError.innerText = "Ce champs doit avoir au moin 2 caractères";
        coursError.classList.add("text-red");
    } else {
        const cours = document.createElement("li");
        const deleteTodoButton = document.createElement("button");
        deleteTodoButton.innerText = "X";

        // Ajout de l'event de suppression sur le bouton
        deleteTodoButton.addEventListener("click", function () {
            deleteTodoButton.parentElement.parentElement.removeChild(
                deleteTodoButton.parentElement
            );
        });
        cours.innerText = coursInput.value;
        cours.appendChild(deleteTodoButton);
        coursList.appendChild(cours);

        const newCours = new Cours(coursInput.value);
        coursDatabase.push(newCours);
        // console.log(coursDatabase);

        coursInput.value = "";
        coursError.innerText = "";
        coursError.classList.remove("text-red");
    }
});