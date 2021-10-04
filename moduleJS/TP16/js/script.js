const matrix = new Array(); //matrix = []

const matrixSize = parseInt(
    prompt(
        "Bonjour! \nDans ce programme, vous allez remplir une matrice carrée. Entrez la taille de la matrice:"
    )
);

let sumDiagonal = 0;
document.write(`
    <p>Matrice carrée de taille ${matrixSize}</p>
    <div>
`);
for (let j = 0; j < matrixSize; j++) {
    let row = [];
    document.write(`<span class="matrix">`);
    for (let i = 0; i < matrixSize; i++) {
        let value = parseInt(
            prompt(`Entrez l'élément ${i + 1} de la ligne ${j + 1}: `)
        );
        row.push(value);
        if (i === j) {
            sumDiagonal += value;
        }
        document.write(`<span class="x">${value}</span>`);
    }
    matrix.push(row);
    document.write("</span><br />");
}
// let sumDiagonal = 0;
// for (let j = 0; j < len; j++) {
//   for (let i = 0; i < len; i++) {
//     if (i === j) {
//       sumDiagonal += matrix[i][j];
//     }
//   }
// }
document.write(`
    </div>
    <p>Somme des éléments de la diagonale donne <strong>${sumDiagonal}</strong></p>
`);
console.log(matrix);
console.log(sumDiagonal);


//Autre solution
/*let tailleMatrice = parseInt(
    prompt("Saisissez la taille de votre matrice carée")

);

let somme = 0;

let matrice = [];
for (let i = 0; i < tailleMatrice; i++) {
    matrice[i] = [];
}

for (let i = 0; i < tailleMatrice; i++) {
    for (let j = 0; j < tailleMatrice; j++) {
        matrice[i][j] = parseInt(prompt("Saissez les nombres "));
    }
}

for (let i = 0; i < tailleMatrice; i++) {
    somme += matrice[i][i];
}

alert(`la somme de la diagonale est ${somme}`);*/