const rayon = document.querySelector("#rayon");
const calculatorForm = document.querySelector("#caculator-form");

calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const diametre = document.querySelector("#diametre");
    diametre.value = 2 * rayon.value;

    const circ = document.querySelector("#circ");
    circ.value = 3.14 * 2 * rayon.value;

    const aire = document.querySelector("#aire");
    aire.value = 3.14 * Math.pow(rayon.value, 2);
});