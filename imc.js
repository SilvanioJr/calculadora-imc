function puloLinha(){
    document.write("<br><br>");
} 

function mostra(frase) {
    document.write(frase);
    puloLinha();
}

function calculaImc(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

const nome = prompt("Digite o seu nome: ")
const alturaInformada = prompt(nome + ", informe sua altura: ");
const pesoInformado = prompt(nome + ", informe seu peso: ");

const imc = calculaImc(pesoInformado, alturaInformada);
const imcRound = Math.round(imc)

mostra("O imc do " + nome + " é " + imcRound)

//console.log(imc);

if(imcRound < 19){
    mostra("Abaixo do peso.");
}else if(imcRound >= 19 && imcRound < 25){
    mostra("peso normal.");
}else if(imcRound >= 25 && imcRound < 30){
    mostra("Levemente acima do peso.");
}else if(imcRound >= 30 && imcRound < 35){
    mostra("Obesidade grau 1.");
}else if(imcRound >= 35 && imcRound <= 40){
    mostra("Obesidade grau 2(severa).");
}else{
    mostra("Obesidade 3(mórbida).");
}