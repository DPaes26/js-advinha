let palpites = [];
let textoPalpite = document.querySelector("#palpites");
let bia = document.querySelector("#bia");
let palpiteBia = (Math.random() * 100).toFixed();


function receberPalpite(input) {
    if (palpites.length < 5) {

        for (let i = 0; i < palpites.length; i++) {
            if (input.value == palpites[i]) {
                alert("Este palpite já foi utilizado");
                input.value = "";
                return;
            }
        }

        if (input.value > palpiteBia) {
            alert("Bia está pensando em um número menor");
        } else if (input.value < palpiteBia) {
            alert("Bia está pensando em um número menor");
        } else {
            bia.src = "./assets/bia.png";
            // palpites = [];
        }

        palpites.push(input.value); //adiciona ao final do array, para guardar e mostrar os repetids.
        input.value = "";
        textoPalpite.innerHTML = palpites.join("-")

    } else {
        alert("Suas chances acabaram");
        bia.src = "./assets/Group 4.png";
        palpites = [];
        textoPalpite.innerHTML = "";
        input.value = "";
    }
}