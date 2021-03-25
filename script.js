//Base calculo para o resultado 

// Carne - 400gr por pessoa 
// Cerveja - 1200ml por adulto .... medido em latas padroes de 355ml
// Bebidas Nao alcolicas - 1000ml por pessoa ( incluindo crianca)

// Se o evento acontecer por um periodo de mais de 6 horas ....
//Carne - 650gr por pessoa
// Cerveja -  2000ml (2l) por adulto... medido em latas padroes de 355ml
// Bebidas Nao alcolicas - 1500ml por pessoa ( incluindo crianca)


//informacoes vindas do html
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

//Gif de espera (so de zuera mesmo pq a conta e muito rapida)
function Time(){
    resultado.innerHTML = `<img src="./icon/carne.gif" width="100%" height="200px">`
    
    setTimeout( calcular, 5000)
}
//botao de calculo do churrascometro e exibir a respsota
function calcular(){

    //conversao de input do html para o input no java 
    let ad = inputAdultos.value;
    let cr = inputCriancas.value;
    let dr = inputDuracao.value;

//Base do calculo das quantidades
let Qdtcarne = carnePP(dr) * ad + (carnePP(dr) / 2 * cr);
let Qdtcerveja = cervejaPP(dr) * ad ;
let Qdtbebeidas = bebidasPP(dr) * ad + (bebidasPP(dr) / 2 * cr);


//auto resposta inserida no html
resultado.innerHTML = ` <h2>Você vai precisar de :<h2>`
resultado.innerHTML += `<p> <img class="icon" src="./icon/meat.png"> ${Qdtcarne/1000}Kg de Carne</p>`
resultado.innerHTML += `<p><img class="icon" src="./icon/beer.png" width="35px" height="35px">  ${Math.ceil(Qdtcerveja/355)} Lata de Cerveja</p>`
resultado.innerHTML += `<p><img class="icon"  src="./icon/garrafas.png" width="35px" height="35px">   ${Math.ceil(Qdtbebeidas/2000)} Guarrafas de Bebida</p>`
}


//funcoes para balciamento do horario de duracao do evento
function carnePP(dr){
    if(dr >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(dr){
    if(dr >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidasPP(dr){
    if(dr >= 6){
        return 1500;
    }else{
        return 1000;
    }
}