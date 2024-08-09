
let listadenomes = ["Lemos", "Kauã", "Barata", "Luiz", "Samuel", "Lavinia"];
let lista = document.getElementById("nomes");


document.getElementById("add").addEventListener("click", () => {
    let campo = document.getElementById("idNome").value;
    if (campo === "") {
        alert("Digite um nome");
    } else {
        listadenomes.push(campo);
        renderizaLista();
    }
});

document.getElementById("sort").addEventListener("click", () => {
    listadenomes.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));
    renderizaLista();
});

document.getElementById("reverse").addEventListener("click", () => {
    listadenomes.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' })).reverse();
    renderizaLista();
});

function renderizaLista() {
    lista.innerHTML = "";
    listadenomes.forEach((nome) => {
        let elementoLi = document.createElement("li");
        elementoLi.textContent = nome;
        lista.appendChild(elementoLi);
    });
}

document.getElementById("remove").addEventListener("click", () => {
    let pesquisa = document.getElementById("idRem").value.toLowerCase();
    let verificador = listadenomes.length
    if (pesquisa === "") {
        alert("Digite um nome");}
    listadenomes.forEach((nome) => {
        let lwnome = nome.toLowerCase()
        if (lwnome === pesquisa) {
            listadenomes.splice(listadenomes.indexOf(nome), 1);
            renderizaLista();
        }
    })
    if (verificador === listadenomes.length){
        alert("Nome não encontrado");
    }
})

renderizaLista();