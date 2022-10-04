
/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

//const é uma constante, uma vez declarado, o valor não pode ser alterado
//let é uma variável, o valor dela pode ser alterado

let precoCombustivel = 5.79;
let kmPorLitros = 12;
let distanciaEmKM = 1580;

let litrosConsumidos = (precoCombustivel * distanciaEmKM) / kmPorLitros;

console.log(litrosConsumidos.toFixed(2));