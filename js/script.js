
document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector("#form-names");
    const inputNome = document.querySelector("#idNome");
    const botaoAdd = document.querySelector("#btnAdd");
    const botaoOrdenar = document.querySelector("#btnOrdenar");
    const botaoReverter = document.querySelector("#btnReverter");
    const lista = document.querySelector("#lista");

    let arrayDeNomes = [];

    //add um nome na lista:
    function addNome(nome) {

        if (nome !== undefined && nome !== "") {
            arrayDeNomes.push(nome);
            inputNome.value = "";
            renderizarLista();
            console.log("Nome inserido com sucesso na lista!");
        } else {
            console.log("Por favor, insira um nome!");
        }
    }

    
    function renderizarLista() {
        //Zerar a lista
        lista.innerHTML = "";
        for (let x = 0; x < arrayDeNomes.length; x++) {
            const liElement = document.createElement("li");
            liElement.textContent = arrayDeNomes[x];
            lista.appendChild(liElement);
        }
    }

    //ordenar a lista:
    function ordenarLista() {
        arrayDeNomes.sort();
        renderizarLista();
    }

    //ordenar a lista:
    function reverterLista() {
        arrayDeNomes.reverse();
        renderizarLista();
    }


    //Chamando as funções
    botaoAdd.addEventListener("click", function (e) {
        e.preventDefault();
        addNome(inputNome.value);
    });

    botaoOrdenar.addEventListener("click", function (e) {
        ordenarLista();
    });

    botaoReverter.addEventListener("click", function (e) {
        reverterLista();
    });

});