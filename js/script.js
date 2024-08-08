// Exemplo hoisting
// var nome = "Ale";
// if (true) {
//     var nome = "joão";
// }
// console.log(nome);

//Declarando um array de Frutas
let frutas = ["Jambo", "Zimbro", "Jaca", "Uva", "Lichia", "Maçã"];
//Visualizando o conteúdo do array com console LOG e TABLE
console.log(frutas);
console.table(frutas);
console.table(frutas);

//Percorrendo o array com LOOPS FOR /
console.log("=======================================LOOP FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

//Percorrendo o array com LOOPS FOR OF/
console.log("=======================================LOOP FOR OF");
for (const fruta of frutas) {
    console.log(fruta);
}

//Percorrendo o array com LOOPS FOR IN/
console.log("=======================================LOOP FOR IN");
for (const indice in frutas) {
    console.log(indice);
}

//Percorrendo o array com LOOPS FOR IN/
console.log("=======================================LOOP FOR EACH");
frutas.forEach((f, indice, arrayDeFrutas) => console.log(indice, arrayDeFrutas[indice]));

//Recuperando a lista ul
let lista = document.getElementById("lista");


document.getElementById("btnAdd").addEventListener("click", () => {
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;

    frutas.push(valorDigitadoNoCampo);
    renderizaLista();
});

function renderizaLista() {
    lista.innerHTML = "";
    frutas.forEach((fruta) => {
        //Criando elemento li e adicionando um nó de texto
        let elementoLi = document.createElement("li");
        elementoLi.textContent = fruta;
        lista.appendChild(elementoLi);
    });
}

renderizaLista();