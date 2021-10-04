let tab = [];

for (i = 0; i < 5; i++) {
    tab[i] = parseInt(prompt("saisez les nombres "));
}

let nmbrPetit = tab[0];
let nmbrGrand = tab[0];

for (i = 0; i < tab.length; i++) {
    if (tab[i] > nmbrGrand) {
        nmbrGrand = tab[i];
    }

    if (tab[i] < nmbrPetit) {
        nmbrPetit = tab[i];
    }
}

alert(
    `le plus grand nombre est :${nmbrGrand} et le plus petit nombre est :${nmbrPetit}`
);