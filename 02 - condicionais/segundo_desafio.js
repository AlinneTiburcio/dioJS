/*
Faça um programa para calcular o valor de uma viagem

você terá 5 variáveis, sendo elas:
1 - Preço do Etanol
2 - Preço da Gasolina
3 - O tipo de combustível que está no seu carro
4 - Gasto médio de combustível do carro por KM
5 - Distância de KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem
*/

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let kmPorLitros = 10;
let distanciaEmKM = 100;
let tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Etanol') {
  let litrosConsumidos = (precoEtanol * distanciaEmKM) / kmPorLitros;
  console.log(litrosConsumidos.toFixed(2));
  console.log('Estamos utilizando Etanol')
} else {
  let litrosConsumidos = (precoGasolina * distanciaEmKM) / kmPorLitros;
  console.log(litrosConsumidos.toFixed(2));
  console.log('Estamos utilizando Gasolina')
}

