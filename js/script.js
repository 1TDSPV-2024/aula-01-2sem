//EXEMPLO
//var nome = "Ale";
//if(true){
//    var nome = (João);
//}
//console.log(nome);

//DECLARANDO ARRY DE FRUTAS
let frutas = ["Jambo", "Zimbro", "Jaca", "Uva", "Lichia", "Maçã"];
//Visualizando o conteudo do array com um console LOG e TABLE
console.log(frutas);
console.table(frutas);
console.table(frutas[2]);

//Percorrendo o array com LOOPS FOR / 
console.log("=======================================LOOP FOR");
for (let x = 0; x < frutas.length; x++){
    console.log(frutas[x]);
}

//Percorrendo o array com LOOPS FOR OF / 
console.log("=======================================LOOP FOR OF");
for (const element of object) {
    console.log();   
}

//Percorrendo o array com LOOPS FOR IN/
console.log("=======================================LOOP FOR IN");
for (const indice in frutas) {
    console.log(indice, frutas[indice]);
}

//Percorrendo o arry com LOOPS FOR EACH
console.log("=======================================LOOP FOR EACH");

frutas.forEach((f, indice, arrayDeFrutas) => console.log(indice, arrayDeFrutas[indice]));


    